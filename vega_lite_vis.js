/*
var vg_1 = "daily_cost_bar_chart.vg.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
// Access the Vega view instance
(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
*/

var vg_categories = "charts/puzzle-categories-jigsaw.vg.json";

vegaEmbed("#puzzle_categories", vg_categories, {
  mode: "vega",
  renderer: "svg",
  actions: false
}).catch(console.error);

var vg_types = "charts/puzzle-types-tree.vg.json";

vegaEmbed("#puzzle_types", vg_types, {
    actions: false
}).then(function(result) {
  // The chart is available through result.view.
}).catch(console.error);


var vg_gender = "charts/gender-group.vg.json";

vegaEmbed("#puzzle_gender", vg_gender, {
  mode: "vega",
  renderer: "svg",
  actions: false
}).catch(console.error);

var vg_countries = "charts/countries-map.vg.json";

vegaEmbed("#puzzle_countries", vg_countries, {
  mode: "vega-lite",
  renderer: "svg",
  actions: false
}).catch(console.error);

var vg_downloads = "charts/puzzle-downloads-countries-map.vg.json";

vegaEmbed("#puzzle_downloads", vg_downloads, {
    mode: "vega-lite",
    actions: false
}).then(function(result) {
  // The chart is available through result.view.
}).catch(console.error);

var vg_flow = "charts/countries-flow.vg.json";

vegaEmbed("#countries_flow", vg_flow, {
  mode: "vega",
  renderer: "svg",
  actions: false
}).catch(console.error);

var vg_locations = "charts/escape-rooms-locations-map.vg.json";

vegaEmbed("#escape_rooms_locations", vg_locations, {
    mode: "vega-lite",
    actions: false
}).then(function(result) {
  // The chart is available through result.view.
}).catch(console.error);

var vg_escape_rooms = "charts/escape-rooms-map.vg.json";

vegaEmbed("#escape_rooms", vg_escape_rooms, {
    mode: "vega",
    renderer: "svg",
    actions: false
}).then(function(result) {
  // The chart is available through result.view.
}).catch(console.error);

var vg_market_shares = "charts/market-shares.vg.json";

vegaEmbed("#market-shares", vg_market_shares, {
  mode: "vega-lite",
  actions: false
}).catch(console.error);

var vg_participation = "charts/participation.vg.json";

vegaEmbed("#participation", vg_participation, {
  mode: "vega-lite",
  actions: false
}).catch(console.error);

var vg_mobile_shares = "charts/mobile-shares.vg.json";

vegaEmbed("#mobile-shares", vg_mobile_shares, {
  mode: "vega-lite",
  actions: false
}).catch(console.error);

var vg_motivations = "charts/motivations.vg.json";

vegaEmbed("#motivations", vg_motivations, {
  mode: "vega-lite",
  actions: false
}).catch(console.error);

var vg_age_groups = "charts/age-groups.vg.json";

vegaEmbed("#age-groups", vg_age_groups, {
  mode: "vega-lite",
  actions: false
}).catch(console.error);