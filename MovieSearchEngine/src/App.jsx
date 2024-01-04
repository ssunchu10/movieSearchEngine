import React from "react";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "",
    };
  }

  componentDidMount() {
    // console.log("App Component Mounted");
    this.setState({
      heading: "Sumit Sunchu's Movie Search Engine",
    });
    // this.state.heading = "Sumit Sunchu's Movie Search Engine";
  }

  // // componentDidUpdate() {
  // //   console.log("App Component Upadted");
  // // }

  // componentWillMount() {
  //   console.log("App Component Will Mount");
  //   this.state.heading = "Testing Will Mount";
  //   // debugger;
  // }

  render() {
    return (
      <>
        <h1 className="header">{this.state.heading}</h1>
        <SearchBar />
      </>
    );
  }
}

export default App;
