import { Component } from "react";
import { withRouter } from "react-router-dom";

class Details extends Component {
  constructor() {
    super();

    this.state = { loaading: true };
  }
  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
  }

  render() {
    const { name, animal, breed, city, state, description } = this.state;
    return (
      <div className="details">
        <div>
          <h2>{name}</h2>
          <h3>
            {animal} - {breed} - {city}, {state}
          </h3>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
