import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import Profile from "./Profile";
import PortfolioCard from "../portfolio/PortfolioCard";
import PostCard from "../blog/PostCard";
import MoreButton from "../../common/MoreButton";
import Error from "../../common/Error";
import Loading from "../../common/Loading";
import NoContent from "../blog/NoPost";

// Resources
import "./homeStyle.css";
import fetchUrl from "../../common/fetchvar";

const Home = ({
    setIsBlogOpen,
    setBlogNum,
    setIsPortfolioOpen,
    setSelectedPortfolioNum,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [portfolioData, setPortfolioData] = useState(null);
    const [csBlogData, setCsBlogData] = useState(null);
    const [devBlogData, setDevBlogData] = useState(null);
    const [profileData, setProfileData] = useState(null);

    // Initial Fetch
    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            // Profile
            fetch(fetchUrl + "/api/home/profile")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setProfileData(data);
                })
                .catch((err) => {
                    return err;
                }),

            // Portfolio
            fetch(fetchUrl + "/api/portfolio/list")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPortfolioData(data);
                })
                .catch((err) => {
                    return err;
                }),

            // Blog
            fetch(fetchUrl + "/api/home/blog/cs")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setCsBlogData(data);
                })
                .catch((err) => {
                    return err;
                }),
            fetch(fetchUrl + "/api/home/blog/dev")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setDevBlogData(data);
                })
                .catch((err) => {
                    return err;
                }),
        ]).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <Error />
            ) : (
                <div className="container">
                    <Profile profile={profileData} />

                    <div className="mb-5">
                        <div className="h1 mb-3">??????????????? </div>

                        <div className="row">
                            {portfolioData == null ||
                            portfolioData.length == 0 ? (
                                <Error />
                            ) : (
                                portfolioData.map((data) => {
                                    return (
                                        <div className="col-12 col-md-6">
                                            <PortfolioCard
                                                portfolio={data}
                                                setIsPortfolioOpen={
                                                    setIsPortfolioOpen
                                                }
                                                setSelectedPortfolioNum={
                                                    setSelectedPortfolioNum
                                                }
                                                isLinkActive={
                                                    data.status == 2 ||
                                                    data.status == 3
                                                }
                                            />
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {portfolioData == null || portfolioData.length < 4 ? (
                            <></>
                        ) : (
                            <Link to="/portfolio">
                                <MoreButton />
                            </Link>
                        )}
                    </div>

                    <div className="mb-5">
                        <div className="h1 mb-3">CS ?????? ??????</div>

                        {csBlogData == null ? (
                            <Error />
                        ) : csBlogData.length == 0 ? (
                            <NoContent
                                message={"????????????, ?????? ???????????? ?????????"}
                            />
                        ) : (
                            csBlogData.map((post) => {
                                return (
                                    <div>
                                        <Link
                                            to={"/blog/cs/" + post.postNum}
                                            className="text-decoration-none"
                                        >
                                            <PostCard post={post} />
                                        </Link>
                                    </div>
                                );
                            })
                        )}

                        {csBlogData == null || csBlogData.length < 3 ? (
                            <></>
                        ) : (
                            <Link to="/blog/cs">
                                <MoreButton />
                            </Link>
                        )}
                    </div>

                    <div className="mb-5">
                        <div className="h1 mb-3">?????? ?????? ??????</div>

                        {devBlogData == null ? (
                            <Error />
                        ) : devBlogData.length == 0 ? (
                            <NoContent
                                message={"????????????, ?????? ???????????? ?????????"}
                            />
                        ) : (
                            devBlogData.map((post) => {
                                return (
                                    <Link
                                        to={"/blog/dev/" + post.postNum}
                                        className="text-decoration-none"
                                    >
                                        <PostCard post={post} />
                                    </Link>
                                );
                            })
                        )}

                        {devBlogData == null || devBlogData.length < 3 ? (
                            <></>
                        ) : (
                            <Link to="/blog/dev">
                                <MoreButton />
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Home;
