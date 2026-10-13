# Why We Keep Puzzling

Four Vega-Lite chart prototypes for FIT3179. No build, account, API key or backend is needed. Internet access is required to load the three pinned chart libraries from jsDelivr.

## Preview in VS Code

1. Open your cloned FIT3179 folder in VS Code.
2. Copy this package's contents into that folder. `index.html` must be directly inside FIT3179, alongside `charts`, `data`, `css` and `js`. Do not put the entire downloaded folder inside FIT3179.
3. Open Extensions (Ctrl+Shift+X), find **Live Server** by **Ritwick Dey**, and install it.
4. In the Explorer, right-click `index.html` and select **Open with Live Server**.
5. Your browser opens a local address such as `http://127.0.0.1:5500`. Scroll to see all four charts; hover over marks for exact values.
6. Change a file and save with Ctrl+S; Live Server refreshes the page.

Alternative if Python is installed: open a terminal in this folder and run `python -m http.server 8000`, then visit http://localhost:8000. Use Ctrl+C to stop it.

Do not open index.html by double-clicking: browser restrictions can block CSV and JSON requests on file:// URLs.

## What each file does

- `index.html`: text, chart containers, source links and library imports.
- `css/style.css`: page layout, fonts and colours.
- `js/charts.js`: fetches each JSON specification and calls vegaEmbed.
- `charts/*.json`: Vega-Lite chart specifications.
- `data/*.csv`: original reported values transcribed into small tables.

## Reading the Vega-Lite specifications

- `data.url`: location of the CSV, relative to index.html in this project.
- `mark`: the graphical shape (bar, point, rule, rect or text).
- `encoding`: maps dataset columns onto x/y position, colour or text.
- `nominal`: categories such as puzzle names; `quantitative`: numbers.
- `layer`: combines marks into one chart, e.g. bars and text labels.
- `transform`: creates a display label or filters missing values. It does not change original percentages.
- `tooltip`: information displayed on hover.

1. Participation: y = puzzle type; x = percentage; bars plus text. Zero baseline.
2. Motivations: y = reason; x = percentage; points plus text. Zero baseline.
3. Mobile shares: y = category; x = percentage; rules join each pair of points; colour distinguishes metric. The CSV uses long format, one row per category and measure.
4. Market shares: x = category; y = market; cell colour = percentage; text gives exact values. Blank CSV cells become null; a grey background represents missing data.

## Sources and limitations

Aviva / Ipsos UK, November 2022, overall survey sample 2,379 adults 18+:
https://www.aviva.com/newsroom/news-and-research-overview/news-releases/2022/12/a-nation-of-puzzlers-63-percent-of-uk-adults-do-puzzles-at-least-once-a-week/

- Participation is over the previous 12 months; selected puzzle categories only. Other / none / don't know are omitted from the chart. Responses overlap.
- The motivations release does not clearly state the question-specific denominator. These are self-reported reasons, not health-effect measurements.
- These UK findings are not Australian population estimates.

Sensor Tower, The State of Puzzle Games, 2023:
https://investgame.net/wp-content/uploads/2023/11/the-state-of-puzzle-games.pdf

- Page 8: reported worldwide cumulative download and revenue shares, selected categories. The figure says "All Time"; the methodology and other pages give differing historical starts. Do not relabel these as annual 2023 data or claim a precise cumulative start date without clarification.
- Page 13: 2022 revenue composition within each listed country/region. Europe is an aggregate region. Categories are selected, not exhaustive. Shares are rounded.
- App Store and Google Play estimates; third-party Android stores excluded. Revenue means gross consumer spending including store fees; do not relabel it profit or total industry revenue including advertising.
- Unreported market/category cells are blank, not zero. Their values may be included in an "Other" group in the source.
- Downloads are not unique people. Download shares and revenue shares have different denominators and cannot establish individual conversion or causation.

These are historical prototypes. The assignment asks for the most recent available data: check for newer equivalent sources before the final submission. Final requirements still include at least ten charts, three different geographic map idioms, Australian relevance and an appropriate level of interaction. The matrix heatmap is not a geographic map. Full age-group comparisons are not included here.

## Git

No commits or pushes have been made for you. Review the files in VS Code Source Control. Stage, commit and push only when you choose. This download excludes .git so it cannot replace your repository's Git metadata.

## Verification and AI acknowledgement

The files were prepared with ChatGPT assistance. Verify the source figures and understand the specifications before submission. Keep or revise the acknowledgement in the page to accurately describe your own use.

Verification performed: all four specifications compiled with Vega-Lite 5.20.1 and rendered to SVG using Vega 5.30.0 with the CSV data loaded. JavaScript syntax and data paths checked. Full browser layout and Live Server interaction have not been inspected in this environment.
