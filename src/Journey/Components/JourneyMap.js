import { _GlobeView as GlobeView } from "@deck.gl/core";
import { DeckGL, GeoJsonLayer, SolidPolygonLayer } from "deck.gl";
import { useRef, useState } from "react";
import * as CONSTANTS from "../constants";

const JourneyMap = ({ data, theme, hovered }) => {
  const deckRef = useRef(null);
  const [viewState, setViewState] = useState(CONSTANTS.DEFAULT_VIEW_STATE);
  const GLOBE_VIEW = new GlobeView();

  const getColor = (d) => {
    if (d.properties.iso_a3 === hovered) return theme.hovered;

    return data.includes(d.properties.iso_a3) ? theme.selected : theme.polygon;
  };

  return (
    <DeckGL
      ref={deckRef}
      views={GLOBE_VIEW}
      viewState={viewState}
      controller={true}
      onViewStateChange={(e) => setViewState(e.viewState)}
    >
      <SolidPolygonLayer
        data={[
          [
            [
              [-180, 90],
              [0, 90],
              [180, 90],
              [180, -90],
              [0, -90],
              [-180, -90],
            ],
          ],
        ]}
        opacity={0.5}
        getPolygon={(d) => d}
        stroked={false}
        filled={true}
        getFillColor={theme.background}
        parameters={{ cull: true }}
      />

      <GeoJsonLayer
        data={CONSTANTS.COUNTRIES}
        lineWidthMinPixels={2}
        stroked={true}
        filled={true}
        getLineColor={theme.border}
        getFillColor={getColor}
        pickable={true}
        updateTriggers={{
          getFillColor: getColor,
        }}
      />
    </DeckGL>
  );
};

export default JourneyMap;
