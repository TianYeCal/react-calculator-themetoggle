import { useState } from "react";
import styled from "styled-components";

const ThemeToggle = () => {
  const [firstBtn, setFirstBtn] = useState(true);
  const [secondBtn, setSecondBtn] = useState(false);
  const [thirdBtn, setThirdBtn] = useState(false);
  return (
    <Wrapper>
      <div className="container nav-container">
        <h2>calc</h2>
        <div className="right">
          <p>THEME</p>
          <div className="number">
            <p>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </p>
            <div className="switch">
              <div className="switch-radios">
                <input
                  type="radio"
                  name="theme-type"
                  value="one"
                  id="first"
                  onChange={() => {
                    setSecondBtn(false);
                    setThirdBtn(false);
                    setFirstBtn(true);
                    document.body.classList.remove("third-theme");
                    document.body.classList.remove("second-theme");
                    document.body.classList.add("first-theme");
                  }}
                />
                <input
                  type="radio"
                  name="theme-type"
                  value="two"
                  id="second"
                  onChange={() => {
                    setSecondBtn(true);
                    setThirdBtn(false);
                    setFirstBtn(false);
                    document.body.classList.remove("first-theme");
                    document.body.classList.remove("third-theme");
                    document.body.classList.add("second-theme");
                  }}
                />
                <input
                  type="radio"
                  name="theme-type"
                  value="three"
                  id="third"
                  onChange={() => {
                    setSecondBtn(false);
                    setThirdBtn(true);
                    setFirstBtn(false);
                    document.body.classList.remove("first-theme");
                    document.body.classList.remove("second-theme");
                    document.body.classList.add("third-theme");
                  }}
                />
              </div>
              <div
                className={
                  firstBtn
                    ? "ball first-btn"
                    : "ball" && secondBtn
                    ? "ball second-btn"
                    : "ball" && thirdBtn
                    ? "ball third-btn"
                    : "ball"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  margin-top: 5rem;
  margin-bottom: 0.5rem;
  font-size: 24px;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: end;
    color: var(--screen-text-color);
    .number {
      p {
        padding: 0.1rem 0.25rem;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
      }
    }
    h2 {
      text-transform: lowercase;
      font-size: 32px;
    }
  }
  .right {
    display: flex;
    gap: 1rem;
    align-items: end;
  }
  .switch {
    height: 30px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: var(--switch-bg);
    border-radius: 50px;
    padding: 5px;
    position: relative;
    cursor: pointer;
  }

  .switch-radios {
    position: relative;
  }

  .switch-radios > * {
    position: absolute;
  }

  input[type="radio"]:first-of-type {
    right: 22px;
  }

  input[type="radio"]:nth-of-type(2) {
    right: -10px;
  }

  input[type="radio"]:last-of-type {
    right: -42px;
  }

  .ball {
    background: hsl(6, 63%, 50%);
    height: 24px;
    width: 24px;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 3px;
    transition: all 0.5s ease;
  }
  .first-btn {
    left: 4px;
  }
  .second-btn {
    left: 38px;
  }
  .third-btn {
    left: 72px;
  }
  input[type="radio"] {
    cursor: pointer;
    opacity: 0;
  }
`;
export default ThemeToggle;
