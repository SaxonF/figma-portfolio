const chroma = require('chroma-js');

const { parameterizeName, getScreenNodes } = require("./figmaHelpers");
const FigmaClient = require("./figmaClient");

const Project = (node) => {
  const {
    r,
    g,
    b,
    a
  } = node.backgroundColor;
  const rgb = [r, g, b].map(n => n * 255);
  const colorHex = chroma.rgb(rgb).hex();

  return {
    name: node.name,
    background: colorHex,
    id: node.id
  }
}

const Screen = (node) => ({
  name: node.name,
  image: "",
  comments: []
})

const Comment = (comment) => ({
  nodeId: comment.client_meta.node_id,
  message: comment.message
})

class FigmaPortfolio {
  constructor(token, file) {
    this.client = FigmaClient({
      personalAccessToken: token
    });
    this.file = file;
  }

  async projects() {
    try {
      const {
        data: {
          document
        }
      } = await this.client.file(this.file);
      const nodes = document.children;
      const projects = nodes.map(node => Project(node));
      return projects;
    } catch (error) {
      return error;
    }
  }

  async project(name) {
    try {
      const {
        data: {
          document
        }
      } = await this.client.file(this.file);
      const node = document.children.find(child => parameterizeName(child.name) === name);
      let project = Project(node);


      let [screens, comments] = await Promise.all([
        this._projectScreens(node),
        this._projectComments(node)
      ]);

      comments.forEach(comment => {
        screens[comment.screen].comments.push(comment.message);
      })

      let screensArray = [];
      Object.keys(screens).forEach(id => {
        screensArray.push(screens[id]);
      });

      project.screens = screensArray;

      return project;
    } catch (error) {
      return error;
    }

  }

  async _projectScreens(project) {
    const {
      children
    } = project;
    const screens = {};

    // TODO: add check for type frame
    children.forEach(node => (screens[node.id] = Screen(node)));

    const screenImages = (await this.client.fileImages(this.file, {
      ids: Object.keys(screens),
      scale: 2
    })).data.images;

    Object.keys(screenImages).forEach(function(id) {
      const image = screenImages[id];
      screens[id].image = image;
    });

    return screens;
  }

  async _projectComments(project) {
    const comments = (await this.client.comments(this.file)).data.comments
      .filter(comment => comment.client_meta !== null)
      .map(comment => Comment(comment));
    const screenNodeIds = getScreenNodes(project);
    let filteredComments = [];
    comments.forEach(comment => {
      screenNodeIds.forEach(screen => {
        if (comment.nodeId === screen.id || screen.children.includes(comment.nodeId)) {
          filteredComments.push({
            screen: screen.id,
            message: comment.message
          });
        };
      })
    });
    return filteredComments;
  }
};

module.exports = FigmaPortfolio;
