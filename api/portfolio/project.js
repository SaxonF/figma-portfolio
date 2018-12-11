const FigmaPortfolio = require('./figmaPortfolio');
const { parse } = require("url");

const token = process.env.FIGMA_TOKEN;
const figmaFile = process.env.FIGMA_FILE;

module.exports = async (req, res) => {
  const portfolio = new FigmaPortfolio(token, figmaFile);
  const { query } = parse(req.url, true);
  const { name } = query;

  try {
    const project = await portfolio.project(name);
    res.end(JSON.stringify(project));
  } catch (error) {
    res.end(error);
  }
};
