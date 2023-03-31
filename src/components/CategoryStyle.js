import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TrendsContentUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  @media screen and (min-width: 900px) {
    text-align: right;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1rem;
  }
`;

export const TrendsContentLink = styled(Link)`
  font-family: sans-serif;
  transition: all 0.3s ease-in-out;

  :hover {
    color: whitesmoke;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (min-width: 900px) {
    margin-bottom: 1rem;
    border-bottom: solid 0px transparent;

    :hover {
      border-bottom: solid 2px whitesmoke;
    }
  }

  ${(props) => {
    const color = props.index % 2 === 0 ? "#20eac5" : "#a252f2";
    return `color: ${color}`;
  }}
`;
