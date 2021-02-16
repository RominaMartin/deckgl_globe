import { _GlobeView as GlobeView } from "@deck.gl/core";
import { DeckGL, GeoJsonLayer, SolidPolygonLayer } from "deck.gl";
import * as CONSTANTS from "../constants";

const JourneyMap = () => {
  return (
    <DeckGL
      views={new GlobeView()}
      initialViewState={CONSTANTS.DEFAULT_VIEW_STATE}
      controller={true}
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
        getFillColor={[238, 238, 238]}
        parameters={{ cull: true }}
      />

      <GeoJsonLayer
        data={CONSTANTS.COUNTRIES}
        lineWidthMinPixels={2}
        stroked={true}
        filled={true}
        getLineColor={[34, 40, 49]}
        getFillColor={[57, 62, 70]}
      />
    </DeckGL>
  );
};

export default JourneyMap;
