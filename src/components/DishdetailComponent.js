import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  formatDate(date) {
    var n = new Date(date);
    var d = n.getDate();
    var m = n.toLocaleString("en-us", { month: "long" });
    var y = n.getFullYear();
    if (d < 10) {
      d = "0" + d;
    }
    const dt = m + " " + d + ", " + y;
    return dt;
  }

  renderComments(dish) {
    if (dish != null) {
      if (dish.comments != null) {
        return (
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {dish.comments.map(comment => {
              return (
                <ul key={comment.id} className="list-unstyled">
                  <li>{comment.comment}</li>
                  <li>
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      } else {
        return <div />;
      }
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        {this.renderComments(this.props.selectedDish)}
      </div>
    );
  }
}

export default DishDetail;