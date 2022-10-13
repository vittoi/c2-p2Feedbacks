import styled from "styled-components";

export const Article = styled.div`
  padding: 3rem 0;

  font-family: "Noto Serif", serif;

  text-align: justify;
  line-height: 1.75rem;

  header {
    p {
      opacity: 0.65;
    }
  }

  ul {
    list-style: none;

    li {
      margin: 0.5rem;
    }

    li:before {
      content: "●";

      margin-right: 0.5rem;

      font-size: 1rem;
      color: #b2b2b2;
    }
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
