import styled from "styled-components";
import { useGlobalContext } from "./context";

const Keyboard = () => {
  const { updateCalc, setCalc, deleteNum, showResult } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container keyboard-container">
        <button className="btn" onClick={() => updateCalc("7")}>
          7
        </button>
        <button className="btn" onClick={() => updateCalc("8")}>
          8
        </button>
        <button className="btn" onClick={() => updateCalc("9")}>
          9
        </button>
        <button className="btn del" onClick={() => deleteNum()}>
          DEL
        </button>
        <button className="btn" onClick={() => updateCalc("4")}>
          4
        </button>
        <button className="btn" onClick={() => updateCalc("5")}>
          5
        </button>
        <button className="btn" onClick={() => updateCalc("6")}>
          6
        </button>
        <button className="btn" onClick={() => updateCalc("+")}>
          +
        </button>
        <button className="btn" onClick={() => updateCalc("1")}>
          1
        </button>
        <button className="btn" onClick={() => updateCalc("2")}>
          2
        </button>
        <button className="btn" onClick={() => updateCalc("3")}>
          3
        </button>
        <button className="btn" onClick={() => updateCalc("-")}>
          -
        </button>
        <button className="btn" onClick={() => updateCalc(".")}>
          .
        </button>
        <button className="btn" onClick={() => updateCalc("0")}>
          0
        </button>
        <button className="btn" onClick={() => updateCalc("/")}>
          /
        </button>
        <button className="btn" onClick={() => updateCalc("*")}>
          ×
        </button>
        <button className="btn reset" onClick={() => setCalc("")}>
          RESET
        </button>
        <button className="btn equal" onClick={showResult}>
          =
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .keyboard-container {
    padding: 0.5rem;
    background: var(--keyboard-bg);
    border-radius: 0.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
  }
  .btn {
    font-size: 0.4rem;
    background: var(--btn-bg);
    color: var(--btn-color);
  }
  .reset,
  .del {
    color: white;
    background: var(--delete-reset);
    box-shadow: rgba(hsl(224, 28%, 35%), 0.1);
  }
  .reset:hover,
  .del:hover {
    background: var(--delete-reset-hover);
  }
  .btn:hover {
    background: var(--btn-hover);
  }
  .reset {
    grid-column: 1 / span 2;
  }
  .equal {
    grid-column: 3 / span 2;
    background: var(--equal-btn);
    color: white;
  }
  .equal:hover {
    background: var(--equal-btn-hover);
  }
`;
export default Keyboard;
