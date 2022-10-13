import { Link } from "react-router-dom";
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import "./style.css" ;

const AppAccordionFeedback = ({ feedbacks }) => {
  return (
    feedbacks && (
      <div className="comments">
        {feedbacks.map((feedback, i) => (
          <CardItem key={i} {...feedback} />
        ))}
      </div>
    )
  );
};

export default AppAccordionFeedback;

const CardItem = ({ _id, user, description, category, pattern, createdAt }) => {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Header style={{backgroundColor: "#8fad88" }}>
        {user} - {moment(createdAt).format("MMMM Do YYYY")}
        </Card.Header>
      <Card.Body align="justify">
        {description}      
      </Card.Body>
      <Card.Footer >
        {pattern} - {category}
      </Card.Footer>
    </Card>
  );
};
