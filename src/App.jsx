import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import Create from "./components/Create/Create";
import Delete from "./components/Delete/Delete";
import ParticlesBg from "./components/Particles/ParticlesBg";

console.log("Env Variables", process.env.REACT_APP_USE_EXPRESS_API);

const App = () => {
  // useEffect(async () => {
  //   const apiresponse = await axios.get("http://localhost:8000/");
  //   console.log("API Response => ", apiresponse);
  // }, []);
  return (
    <>
      <ParticlesBg /> 
        <div className="app-container">
          <BrowserRouter>
            <Header title={" Movie Search Engine"} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<Create />} />
              <Route path="/delete" element={<Delete />} />
            </Routes>
            <Footer
              className="footer-container"
              name={"Sumit Sunchu"}
              address={"1622 Holmwood Drive Celina Texas 75009"}
              address2={"7/1 Ramodiya Mansion Worli Mumbai Maharashtra 400030"}
              email={"sumitsunchu@gmail.com"}
              phone={"+1 903-990-0356"}
            />
          </BrowserRouter>
        </div>
    </>
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
