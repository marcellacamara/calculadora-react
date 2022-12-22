import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  padding: 1rem;
  background-color: #eae8f7;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 1.25rem 1.25rem 0 0;

  font-size: 24px;
  font-family: "Roboto";

  input {
    width: 100%;
    height: 75px;
    color: #babae0;
    background-color: #eae8f7;
    border: none;
    padding: 0 10px;

    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-weight: bold;
    font-size: 30px;
    font-family: "Roboto";
  }
`;
