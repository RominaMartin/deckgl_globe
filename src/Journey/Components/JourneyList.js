import styled from "styled-components";
import ListItem from "../../Components/ListItem";

const JourneyList = ({ data, onItemHover }) => {
  return (
    <StyledListWrapper>
      {data.map((item) => (
        <ListItem key={item.iso} data={item} onHover={onItemHover} />
      ))}
    </StyledListWrapper>
  );
};

const StyledListWrapper = styled.ul`
  position: absolute;
  left: 20px;
  top: 20px;
  padding: 8px;
  box-sizing: border-box;
  background: #fff;
  max-height: calc(100vh - 40px);
  width: 250px;
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

export default JourneyList;
