import React from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/Search/SearchBar";
import MovieList from "./components/Card/MovieList";
import Page from "./components/Page/Page";
import { Footer } from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css"

const App = () => {
  const [result, updateAPIResponseResult] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const searchState = useSelector((state) => state.searchState);
  
  const handlePage = async (pageNumber) => {
    setCurrentPage(pageNumber);
    // handleSearch();
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchState.searchInput}&page=${pageNumber}&api_key=210c1a86f52296d71c06efcbac38c0c7`
    );
    const dataJ = await data.json();
    // console.log(dataJ);
    updateAPIResponseResult(dataJ.results);
    setTotalPages(dataJ.total_pages);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const fetchTrending = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchState.searchInput}&page=${currentPage}&api_key=210c1a86f52296d71c06efcbac38c0c7`
      );
      const dataJ = await data.json();
      console.log(dataJ);
      updateAPIResponseResult(dataJ.results);
      setTotalPages(dataJ.total_pages);
      setTotalResults(dataJ.total_results);
    };
    fetchTrending();
  };

  useEffect(() => {}, [result]);
  return (
    <div className="app-container">
      <Header title={"Sumit Sunchu's Movie Search Engine"} />
      <SearchBar
        onClickButton={handleSearch}
      />
      <Page noOfPages={totalPages} onPageChange={handlePage} currentPage={currentPage} totalResults={totalResults} result={result}/>
      <MovieList movieResult={result} />
      <Page noOfPages={totalPages} onPageChange={handlePage} currentPage={currentPage} totalResults={totalResults} result={result}/>
      <Footer className="footer-container" name={"Sumit Sunchu"} address={"1622 Holmwood Drive Celina Texas 75009"} address2={"7/1 Ramodiya Mansion Worli Mumbai Maharashtra 400030"} email={"sumitsunchu@gmail.com"} phone={"+1 903-990-0356"} noOfPages={totalPages} />
    </div>
  );
};

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

export default App;
