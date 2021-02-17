import { useEffect, useState } from "react";
import styled from "styled-components";
import { initJourney } from "../Actions/actions";
import JourneyList from "../Components/JourneyList";
import JourneyMap from "../Components/JourneyMap";
import { THEME } from "../constants";

const JourneyContainer = () => {
  const [theme] = useState("dark");
  const [countries, setCountries] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    (async () => {
      const basicData = await initJourney();
      setCountries(basicData.countries);
      setSelectedItems(basicData.selected);
    })();
  }, []);

  return (
    <StyledJourneyContainer background={THEME[theme].container}>
      <JourneyMap
        data={selectedItems}
        theme={THEME[theme]}
        hovered={hoveredItem}
      />
      <JourneyList data={countries} onItemHover={setHoveredItem} />
    </StyledJourneyContainer>
  );
};

const StyledJourneyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ background }) => background};
`;

export default JourneyContainer;
