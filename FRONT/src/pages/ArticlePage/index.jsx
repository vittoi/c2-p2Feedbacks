import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import axios from "axios";

import * as S from "./style";

import Container from "react-bootstrap/Container";

import { BeatLoader } from "react-spinners";

const ArticlePage = () => {
  const { articleId } = useParams();

  const [article, setArticle] = useState();

  const { isLoading } = useQuery(
    ['getPattern'],
    () =>
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/pattern/${articleId}`),
    { onSuccess: ({ data }) => {
        setArticle(data);
      }}
  );

  if (isLoading)
    return (
      <S.LoaderContainer>
        <BeatLoader color="#8fad88" />
      </S.LoaderContainer>
    );

  return (
    article && (
      <Container>
        <S.Article dangerouslySetInnerHTML={{ __html: article.html }} />
      </Container>
    )
  );
};

export default ArticlePage;
