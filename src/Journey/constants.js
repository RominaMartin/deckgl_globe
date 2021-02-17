export const COUNTRIES =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson";

// export const COUNTRIES = "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson"

export const DEFAULT_VIEW_STATE = {
  latitude: 40.454572474788996,
  longitude: -3.7027573585510254,
  zoom: 0,
};

export const THEME = {
  light: {
    border: [],
    polygon: [],
    background: [],
    selected: [],
    container: "#5b5b5b",
  },
  dark: {
    border: [34, 40, 49],
    polygon: [57, 62, 70],
    background: [238, 238, 238],
    selected: [255, 211, 105],
    container: "#5b5b5b",
    hovered: [255, 239, 161],
    hoveredBorder: [246, 245, 245],
  },
};
