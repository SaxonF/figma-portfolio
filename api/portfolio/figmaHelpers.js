const parameterizeName = (name) => {
  return name.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

const getNodeIds = (arr = []) => arr.reduce((a, b) => {
  return [
    ...a,
    b.id,
    ...getNodeIds(b.children)
  ]
}, [])

const getScreenNodes = (project) => {

  const screenNodes = project.children.map(screen => {
    // TODO: add filter for node type frame
    return {
      id: screen.id,
      children: getNodeIds(screen.children)
    }
  });

  return screenNodes;
}


module.exports = { parameterizeName, getScreenNodes, getNodeIds }
