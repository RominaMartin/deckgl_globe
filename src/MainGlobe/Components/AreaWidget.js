import styled from "styled-components";

const AreaWidget = ({ area }) => {
  return (
    <StyledAreaWrapper>
      <span>Area</span>

      <StyledTotal>{new Intl.NumberFormat().format(area)} km²</StyledTotal>
    </StyledAreaWrapper>
  );
};

const StyledAreaWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 50px;
  padding: 8px;
  box-sizing: border-box;
  background: #f5f5f5;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  > span {
    font-weight: bold;
  }
`;

const StyledTotal = styled.span``;

export default AreaWidget;
