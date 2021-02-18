export const COUNTRIES =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson";

export const DEFAULT_VIEW_STATE = {
  latitude: 40.454572474788996,
  longitude: -3.7027573585510254,
  zoom: 1,
};

export const THEME = {
  light: {
    border: [161, 105, 40],
    polygon: [189, 146, 90],
    background: [214, 189, 141],
    selected: [237, 234, 194],
    container: "#b5c8b8",
    hovered: [121, 167, 172],
    hoveredBorder: [40, 135, 161],
  },
  dark: {
    border: [35, 41, 49],
    polygon: [57, 62, 70],
    background: [170, 170, 170],
    selected: [78, 204, 163],
    container: "#222831",
    hovered: [255, 239, 161],
    hoveredBorder: [246, 245, 245],
    // border: [34, 40, 49],
    // polygon: [57, 62, 70],
    // background: [238, 238, 238],
    // selected: [255, 211, 105],
    // container: "#5b5b5b",
    // hovered: [255, 239, 161],
    // hoveredBorder: [246, 245, 245],
  },
};
