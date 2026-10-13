# Why We Keep Puzzling - FIT3179 DV2

Puzzles and Brain Games

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
