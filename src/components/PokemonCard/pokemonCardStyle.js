import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid yellowgreen;
  width: 29vw;
`;

export const Img = styled.img`
  display: flex;
  border: 2px solid red;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  gap: 1.2rem;
  border: 2px solid black;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 9vw;
  gap: 1rem;
  cursor: pointer;
`;
export const Span = styled.span`
  font-size: 0.8rem;
  color: whitesmoke;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  cursor: pointer;
`;
