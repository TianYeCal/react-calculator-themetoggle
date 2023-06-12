import styled from "styled-components";
import { useGlobalContext } from "./context";

const Screen = () => {
  const { calc } = useGlobalContext();
  return (
    <Wrapper>
      <div className="container screen-container">{calc ? calc : 0}</div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 0.5rem;
  .screen-container {
    text-align: right;
    padding: 1rem 0.5rem;
    background: var(--screen-bg);
    border-radius: 0.25rem;
    color: var(--screen-text-color);
  }
`;
export default Screen;
