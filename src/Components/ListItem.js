import styled from "styled-components";

const ListItem = ({ data, onHover, onClick, selected }) => {
  return (
    <StyledItem
      onMouseEnter={() => onHover(data)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(data.iso)}
      selected={selected}
    >
      <span>{data.flag}</span>
      <span>{data.name}</span>
    </StyledItem>
  );
};

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#ababab" : "#fff")};
  padding: 8px;
  border-bottom: 1px solid #eee;
  gap: 10px;

  span:first-child {
    text-align: center;
  }

  :hover {
    background: #ccc;
    cursor: pointer;
  }
`;

export default ListItem;
