import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projectDetails' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
