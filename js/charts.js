// A specification describes the chart; vegaEmbed draws it inside the matching div.
// CSV URLs are relative to index.html, not to the charts/ directory.
async function drawCharts() {
  const chartNames = ['participation', 'motivations', 'mobile-shares', 'market-shares'];
  await Promise.all(chartNames.map(async (name) => {
    const container = document.getElementById(name);
    try {
      if (typeof vegaEmbed === 'undefined') {
        throw new Error('Chart libraries could not load. Check your internet connection.');
      }
      const response = await fetch(`charts/${name}.json`);
      if (!response.ok) throw new Error(`Cannot load the chart specification (${response.status}).`);
      const specification = await response.json();
      container.textContent = '';
      await vegaEmbed(container, specification, { actions: false, renderer: 'svg' });
    } catch (error) {
      console.error(name, error);
      container.classList.add('error');
      container.textContent = `Unable to display chart. ${error.message} Open this page through Live Server, not by double-clicking the HTML file.`;
    }
  }));
}
drawCharts();
