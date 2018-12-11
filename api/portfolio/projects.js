const FigmaPortfolio = require('./figmaPortfolio');

const token = process.env.FIGMA_TOKEN;
const figmaFile = process.env.FIGMA_FILE;

module.exports = async (req, res) => {
  const portfolio = new FigmaPortfolio(token, figmaFile);
  try {
    const projects = await portfolio.projects();
    res.end(JSON.stringify(projects));
  } catch (error) {
    res.end(error);
  }
};
