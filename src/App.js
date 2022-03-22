import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { TaskProvider } from "./context/TaskContext";
    
const App = () => {
    return(
        <TaskProvider>
            <Router>
                <div className="outer py-md-5 py-sm-3 py-0 px-sm-3 px-0">
                    <div className="main d-flex flex-column mx-auto py-4 px-5">
                        <Header />
                        <Routes>
                            <Route path="/" exact element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </Router>
        </TaskProvider>
    )
}

export default App;