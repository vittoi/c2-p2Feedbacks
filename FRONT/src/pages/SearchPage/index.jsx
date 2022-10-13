import { useEffect, useRef, useState } from "react";
import "./style.css";

import axios from "axios";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import SearchBar from "../../components/SearchBar";
import Accordion from "../../components/Accordion";

const SearchPage = () => {
  const tagifyRef = useRef();
  const [patterns, setPatterns] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoryPatterns, setCategoryPatterns] = useState([]);

  useEffect(() => {

    // Recuperando todas categorias
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/category/all`)
      .then(({ data }) => {
        setCategorias(data);
      });
  }, []);

  function searchPatterns() {
    const tags = tagifyRef.current.getCleanValue();
    const tagValues = tags.map((tag) => tag.value);

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/patterns`, {
        tags: tagValues,
      })
      .then(({ data }) => {
        setPatterns(data);
      });
  }

  function displayCategoryPatterns(tag) {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/article/${tag}`)
      .then(({ data }) => {
        setCategoryPatterns(data);
      });
  }

  return (
    <Container>
      <h1 className='h1'>Patterns Search</h1>
      <SearchBar tagifyRef={tagifyRef} searchPatterns={searchPatterns} />
      <div className='accordion-container'>
        <Accordion patterns={patterns} />
      </div>


      <Nav className="mt-4" variant="tabs" defaultActiveKey="/search">
        {categorias.map((tag, i) => (
          <Nav.Item
            key={i}
            onClick={() => displayCategoryPatterns(tag)}
          >
            <Nav.Link>{tag}</Nav.Link>

          </Nav.Item>
        ))}
      </Nav>
      <Accordion patterns={categoryPatterns} />
    </Container>
  );
};

export default SearchPage;
