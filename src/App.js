import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/UI/AppRouter";
import Header from "./pages/partPages/Header/Header";
import Main from "./pages/partPages/main/Main";
import { Route } from "react-router-dom";

// import './main.js'


function App() {
  return (
    <BrowserRouter>
    
        <div className="App">
          <Header/>
          <AppRouter/>

          {/* <Main/> */}
        </div>

    </BrowserRouter>
  );
}

export default App;
