import { useState } from "react";
import styled from "styled-components";
import JourneyList from "../Components/JourneyList";
import JourneyMap from "../Components/JourneyMap";
import { THEME } from "../constants";

const JourneyContainer = () => {
  const [theme] = useState("dark");
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <StyledJourneyContainer background={THEME[theme].container}>
      <JourneyMap
        data={["ESP", "FRA", "PRT"]}
        theme={THEME[theme]}
        hovered={hoveredItem}
      />
      <JourneyList onItemHover={setHoveredItem} />
    </StyledJourneyContainer>
  );
};

const StyledJourneyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ background }) => background};
`;

export default JourneyContainer;
