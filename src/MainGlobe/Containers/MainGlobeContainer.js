import { useEffect, useState } from "react";
import styled from "styled-components";
import { useKeyPress } from "../../hooks/useKeyPress";
import { initMainGlobe, handleSelection } from "../Actions/actions";
import MainGlobeList from "../Components/MainGlobeList";
import MainGlobeMap from "../Components/MainGlobeMap";
import { THEME } from "../constants";

const MainGlobeContainer = () => {
  const [theme] = useState("dark");
  const letterTyped = useKeyPress();
  const [countries, setCountries] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState(letterTyped);

  useEffect(() => {
    (async () => {
      const basicData = await initMainGlobe();
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
    <StyledMainGlobeContainer background={THEME[theme].container}>
      <MainGlobeMap
        data={selectedItems}
        theme={THEME[theme]}
        hovered={hoveredItem}
        onItemClick={onItemClick}
      />
      <MainGlobeList
        data={countries}
        onItemHover={setHoveredItem}
        onItemClick={onItemClick}
        selected={selectedItems}
        search={searchTerm}
        handleClearSelection={onClear}
      />
    </StyledMainGlobeContainer>
  );
};

const StyledMainGlobeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ background }) => background};
`;

export default MainGlobeContainer;
