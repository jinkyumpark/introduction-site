// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import Topnav from "./components/common/Topnav";
import Footer from "./components/common/Footer";
import Login from "./components/route/admin/Login";
import Admin from "./components/route/admin/Admin";
import Home from "./components/route/home/Home";
import Resume from "./components/route/resume/Resume";
import Portfolio from "./components/route/portfolio/Portfolio";
import BlogCs from "./components/route/blog/BlogCs";
import BlogDev from "./components/route/blog/BlogDev";
import PortfolioDetail from "./components/route/portfolio/PortfolioDetail";

// Library
import { Modal } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
    const [selectedPortfolioNum, setSelectedPortfolioNum] = useState(null);

    return (
        <>
            <Router>
                <div className="App mt-5">
                    <div>
                        <Toaster position="bottom-right" />
                    </div>

                    <Topnav
                        setIsPortfolioOpen={setIsPortfolioOpen}
                        setIsLoginOpen={setIsLoginOpen}
                    />

                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Home
                                        setIsPortfolioOpen={setIsPortfolioOpen}
                                        setSelectedPortfolioNum={
                                            setSelectedPortfolioNum
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/resume"
                                element={
                                    <Resume
                                        setIsPortfolioOpen={setIsPortfolioOpen}
                                        setSelectedPortfolioNum={
                                            setSelectedPortfolioNum
                                        }
                                    />
                                }
                            />
                            <Route
                                path="/portfolio"
                                element={
                                    <Portfolio
                                        setIsPortfolioOpen={setIsPortfolioOpen}
                                        setSelectedPortfolioNum={
                                            setSelectedPortfolioNum
                                        }
                                    />
                                }
                            />
                            <Route path="/blog/cs/" element={<BlogCs />} />
                            <Route path="/blog/dev/" element={<BlogDev />} />
                            <Route path="/blog/cs/:num" element={<BlogCs />} />
                            <Route
                                path="/blog/dev/:num"
                                element={<BlogDev />}
                            />

                            <Route path="/admin" element={<Admin />} />
                        </Routes>
                    </div>

                    <Modal
                        show={isLoginOpen}
                        onHide={() => {
                            setIsLoginOpen(false);
                        }}
                    >
                        <Login setIsLoginOpen={setIsLoginOpen} />
                    </Modal>

                    <Modal
                        show={isPortfolioOpen}
                        size="xl"
                        style={{ minHeight: "90vh" }}
                        scrollable={false}
                        onHide={() => {
                            setIsPortfolioOpen(false);
                        }}
                        fullscreen="sm-down"
                    >
                        <PortfolioDetail
                            portfolioNum={selectedPortfolioNum}
                            style={{ minHeight: "90vh" }}
                        />
                    </Modal>

                    <Footer setIsLoginOpen={setIsLoginOpen} />
                </div>
            </Router>
        </>
    );
}

export default App;
