import './App.css';
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import {Navigate, Route, BrowserRouter, Routes} from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={"wrapper"}>
                    <Navbar/>
                    <div className="content">
                        <ScrollToTop/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/resume" element={<Resume/>}/>
                            <Route path="/cv" element={<Navigate to="/resume"/>}/>
                            <Route path="/socials" element={<Socials/>}/>
                            <Route path="/contact" element={<Navigate to="/socials"/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
