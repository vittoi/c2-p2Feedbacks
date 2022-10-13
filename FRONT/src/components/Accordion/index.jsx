import { Link } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";

const AppAccordion = ({ patterns }) => {
  return (
    patterns && (
      <Accordion className="mt-4">
        {patterns.map((pattern, i) => (
          <AccordionItem key={i} {...pattern} />
        ))}
      </Accordion>
    )
  );
};

export default AppAccordion;

const AccordionItem = ({ id, name, description }) => {
  return (
    <Accordion.Item eventKey={id}>
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body align="justify">
        {description}
        <div className="mt-2">
          <Link to={`/article/${id}`} target="_blank">Access Pattern</Link>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};
