import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  state = { loading: true };

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
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    }

    const { name, animal, breed, city, state, description, images } =
      this.state;
    return (
      <div className="details">
        <Carousel images={images} />
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

const DetailsWithRouter = withRouter(Details);

export default function DetailsWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <DetailsWithRouter />
    </ErrorBoundary>
  );
}
