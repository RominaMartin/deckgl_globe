import { _GlobeView as GlobeView } from "@deck.gl/core";
import { DeckGL, GeoJsonLayer, SolidPolygonLayer } from "deck.gl";
import { useEffect, useRef, useState } from "react";
import * as CONSTANTS from "../constants";

const JourneyMap = ({ data, theme, hovered, onItemClick = () => {} }) => {
  const deckRef = useRef(null);
  const [viewState, setViewState] = useState(CONSTANTS.DEFAULT_VIEW_STATE);
  const GLOBE_VIEW = new GlobeView({ x: 120 });

  useEffect(() => {
    if (hovered) {
      setViewState({
        ...viewState,
        ...hovered.coordinates,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered]);

  const getColor = (d) => {
    if (data.includes(d.properties.iso_a3)) return theme.selected;

    if (hovered && hovered.iso === d.properties.iso_a3) return theme.hovered;

    return theme.polygon;
  };

  const getBorderColor = (d) =>
    hovered && hovered.iso === d.properties.iso_a3
      ? theme.hoveredBorder
      : theme.border;

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
        getLineColor={getBorderColor}
        getFillColor={getColor}
        pickable={true}
        updateTriggers={{
          getFillColor: getColor,
          getLineColor: getBorderColor,
        }}
        onClick={(e) => onItemClick(e.object.properties.iso_a3)}
      />
    </DeckGL>
  );
};

export default JourneyMap;
