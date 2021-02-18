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
      <StyledSocial>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=rominamartin&repo=deckgl_globe&type=star&count=true"
          frameborder="0"
          width="100"
          scrolling="0"
          height="20"
          title="GitHub"
        ></iframe>
      </StyledSocial>
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

const StyledSocial = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
`;

export default MainGlobeContainer;
