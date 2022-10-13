import styled from "styled-components";

export const Suggestions = styled.div`
  margin-top: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SuggestionWord = styled.div`
  padding: 0.35rem 0.75rem;
  border-radius: 3rem;

  color: #000;
  background-color: #e5e5e5;

  transition: all 0.25s;

  :hover {
    cursor: pointer;
    filter: brightness(0.85);
  }
`;
