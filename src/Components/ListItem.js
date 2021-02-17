import styled from "styled-components";

const ListItem = ({ data, onHover }) => {
  return (
    <StyledItem
      onMouseEnter={() => onHover(data)}
      onMouseLeave={() => onHover(null)}
    >
      <span>{data.flag}</span>
      <span>{data.name}</span>
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

  :hover {
    background: #ccc;
    cursor: pointer;
  }
`;

export default ListItem;
