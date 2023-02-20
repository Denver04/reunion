import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
// import Main from './Components/Main';
// import {BrowserRouter , Route , Routes } from "react-router-dom"

function App() {

  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      </BrowserRouter> */}
      <Navbar />
      <Body />
    </div>
  )
}

export default App
