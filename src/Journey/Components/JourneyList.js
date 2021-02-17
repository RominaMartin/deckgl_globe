import styled from "styled-components";
import ListItem from "../../Components/ListItem";

const JourneyList = ({ onItemHover }) => {
  const items = [
    { id: "ESP", place: "Spain", year: 2020 },
    { id: "FRA", place: "France", year: 2019 },
    { id: "PRT", place: "Portugal", year: 2018 },
  ];

  return (
    <StyledListWrapper>
      <StyledListHeader>Countries list</StyledListHeader>
      <StyledList>
        {items.map((item, index) => (
          <ListItem
            key={index}
            id={item.id}
            place={item.place}
            year={item.year}
            onHover={onItemHover}
          />
        ))}
      </StyledList>
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 8px;
  background: #fff;
  max-height: 100px;
  min-width: 150px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const StyledListHeader = styled.div`
  width: 100%;
  font-weight: bold;
  text-align: center;
`;

const StyledList = styled.ul`
  width: 100%;
  background: #eee;
  margin-top: 10px;
`;

export default JourneyList;
