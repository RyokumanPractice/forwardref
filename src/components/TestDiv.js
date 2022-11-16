import styled from "styled-components";

const TestDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color};
`;

export default TestDiv;
