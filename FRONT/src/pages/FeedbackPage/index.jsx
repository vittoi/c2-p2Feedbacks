import { useEffect, useRef, useState } from "react";
import "./style.css";

import axios from "axios";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import SearchBar from "../../components/SearchBar";
import AccordionFeedbacks from "../../components/AccordionFeedbacks";

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const headers = {
    "Access-Control-Allow-Origin": "*"
   }
  useEffect(() => {
    
    // Recuperando todas categorias
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/feedbacks`, {headers})
      .then(({ data }) => {
        setFeedbacks(data);
      });

  }, []);

  function searchPatterns() {
    
  }

  return (
    <Container>
      <h1 className='h1'>Bot Users Feedbacks</h1>
      <AccordionFeedbacks feedbacks={feedbacks} />
    </Container>
  );
};

export default FeedBackPage;
