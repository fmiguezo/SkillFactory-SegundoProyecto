import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CharactersContainer from "./components/CharactersContainer";
import UsersContainer from "./components/UsersContainer";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/characters" element={<CharactersContainer />} />
        <Route path="/users" element={<UsersContainer />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
