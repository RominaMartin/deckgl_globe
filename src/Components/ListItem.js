import styled from "styled-components";

const ListItem = ({ id, year, place, onHover }) => {
  return (
    <StyledItem
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      <span>{year}</span>
      <span>{place}</span>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  display: grid;
  column-gap: 10px;
  align-items: center;

  grid-template-columns: 30% 1fr;

  background-color: #fff;
  padding: 8px;
  margin-bottom: 4px;

  span:first-child {
    font-weight: bold;
    text-align: center;
  }
`;

export default ListItem;
