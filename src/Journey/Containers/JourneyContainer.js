import { useEffect, useState } from "react";
import styled from "styled-components";
import { useKeyPress } from "../../hooks/useKeyPress";
import { initJourney, handleSelection } from "../Actions/actions";
import JourneyList from "../Components/JourneyList";
import JourneyMap from "../Components/JourneyMap";
import { THEME } from "../constants";

const JourneyContainer = () => {
  const [theme] = useState("dark");
  const letterTyped = useKeyPress();
  const [countries, setCountries] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(letterTyped);

  useEffect(() => {
    (async () => {
      const basicData = await initJourney();
      setCountries(basicData.countries);
      setSelectedItems(basicData.selected);
    })();
  }, []);

  useEffect(() => {
    setSearchTerm(letterTyped);
  }, [letterTyped]);

  const onItemClick = (selected) => {
    const selectedList = handleSelection({ current: selectedItems, selected });
    setSelectedItems(selectedList);
  };

  const onClear = () => {
    setSelectedItems([]);
    setSearchTerm("");
  };

  return (
    <StyledJourneyContainer background={THEME[theme].container}>
      <JourneyMap
        data={selectedItems}
        theme={THEME[theme]}
        hovered={hoveredItem}
        onItemClick={onItemClick}
      />
      <JourneyList
        data={countries}
        onItemHover={setHoveredItem}
        onItemClick={onItemClick}
        selected={selectedItems}
        search={searchTerm}
        handleClearSelection={onClear}
      />
    </StyledJourneyContainer>
  );
};

const StyledJourneyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ background }) => background};
`;

export default JourneyContainer;
