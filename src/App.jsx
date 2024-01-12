import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/Search/SearchBar";
import MovieList from "./components/Card/MovieList";
import Page from "./components/Page/Page";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <Header title={"Sumit Sunchu's Movie Search Engine"} />
      <SearchBar />
      <Page />
      <MovieList />
      <Page />
      <Footer
        className="footer-container"
        name={"Sumit Sunchu"}
        address={"1622 Holmwood Drive Celina Texas 75009"}
        address2={"7/1 Ramodiya Mansion Worli Mumbai Maharashtra 400030"}
        email={"sumitsunchu@gmail.com"}
        phone={"+1 903-990-0356"}
      />
    </div>
  );
};

export default App;


// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       heading: "",
//     };
//   }

// componentDidMount() {
//   // console.log("App Component Mounted");
//   this.setState({
//     heading: "Sumit Sunchu's Movie Search Engine",
//   });
//   // this.state.heading = "Sumit Sunchu's Movie Search Engine";
// }

// // componentDidUpdate() {
// //   console.log("App Component Upadted");
// // }

// componentWillMount() {
//   console.log("App Component Will Mount");
//   this.state.heading = "Testing Will Mount";
//   // debugger;
// }

//   render() {
//     return (

//     );
//   }
// }

