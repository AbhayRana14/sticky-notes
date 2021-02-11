import React from "react";
import Card from "react-bootstrap/Card";
import "../Cards/Card.style.css";


function MyCard(props){
  const items = props.items;
  const listItems = items.map( item=> {
    return(
      <div className="card-container" key="item.key">
        <Card className="text-center">
        {/* <Card.Header className="text-header">{item.index}</Card.Header> */}
          <Card.Body id="c-bdy">
            <Card.Text>
              <p>{item.text}</p>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-footer"/>
        </Card>
      </div>
    );
  })
  return(
    <div>
    {listItems}
    </div>
  )
}

export default MyCard;
