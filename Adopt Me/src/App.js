const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ])
}


const App = () => {
      return React.createElement(
        "div",
        {},
        [
          React.createElement("h1", {}, "Adopt Me"),
          React.createElement(Pet, { name: "Jamon", animal: "dog", breed: "dacshund"}),
          React.createElement(Pet, { name: "Doufu", animal: "dog", breed: "Spanish Water Dog"}),
          React.createElement(Pet, { name: "Gretta", animal: "dog", breed: "Giant Shnowzer"})
        ]
      );
    };

    ReactDOM.render(React.createElement(App), document.getElementById('root'))
