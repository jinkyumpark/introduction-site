// React
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import MoreButton from "../../common/MoreButton";
import PostCard from "../blog/PostCard";
import Loading from "../../common/Loading";
import NoContent from "../blog/NoPost";
import Error from "../../common/Error";

// Library
import {
    BsGithub as GithubIcon,
    BsLink45Deg as LinkIcon,
} from "react-icons/bs";
import { Modal, Popover, OverlayTrigger } from "react-bootstrap";
import toast from "react-hot-toast";
import fetchUrl from "../../common/fetchvar";

const PortfolioDetail = ({ portfolioNum }) => {
    const [portfolio, setPortfolio] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (portfolioNum == null || typeof portfolioNum == undefined) {
            setIsError(true);
            setIsLoading(false);
        } else {
            fetch(fetchUrl + "/api/portfolio/detail/" + portfolioNum)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPortfolio(data);
                })
                .catch((err) => {
                    return err;
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, []);

    return (
        <div className="card container">
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <div style={{ marginTop: "100px", marginBottom: "100px" }}>
                    <Error />
                </div>
            ) : (
                <>
                    <Modal.Header closeButton className="text-center">
                        <div className="h1">{portfolio.title}</div>
                    </Modal.Header>

                    <div className="card-body">
                        <div className="card-content">
                            <img
                                src={fetchUrl + "/images/" + portfolio.image}
                                alt=""
                                className="img-fluid w-100"
                            />

                            <div className="row">
                                <div className="col-12 col-sm-9 col-md-10">
                                    <div className="h5 mt-3 text-muted ps-5 lh-base">
                                        {portfolio.summary}
                                    </div>
                                </div>

                                <div className="col-12 col-sm-3 col-md-2 align-self-center text-end text-md-center mt-3">
                                    <OverlayTrigger
                                        key="portfolioGithubLink"
                                        placement="top"
                                        overlay={
                                            <Popover>
                                                <Popover.Body>
                                                    ????????? ????????? ?????? ??? ??????
                                                    ????????? Repository??? ????????????
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <a
                                            className="text-muted h2 me-3"
                                            target="_blank"
                                            href={portfolio.githubLink}
                                        >
                                            <GithubIcon />
                                        </a>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        key="portfolioSiteLink"
                                        placement="top"
                                        overlay={
                                            <Popover>
                                                <Popover.Body>
                                                    ????????? ???????????? ????????????
                                                    ???????????? ??? ?????????
                                                </Popover.Body>
                                            </Popover>
                                        }
                                    >
                                        <a
                                            className={"text-muted h2"}
                                            target="_blank"
                                            onClick={() => {
                                                if (
                                                    portfolio.websiteLink ==
                                                    "http://jinkyumpark.com"
                                                ) {
                                                    toast.error(
                                                        "?????? ??????????????? ?????? ???????????? ?????? ??? ?????????????????????!"
                                                    );
                                                } else {
                                                    window.open(
                                                        portfolio.websiteLink
                                                    );
                                                }
                                            }}
                                        >
                                            <LinkIcon />
                                        </a>
                                    </OverlayTrigger>
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <div className="card">
                                            <div className="card-header text-center">
                                                ????????????
                                            </div>
                                            <div className="card-body text-center">
                                                {portfolio.startDate
                                                    .substring(
                                                        2,
                                                        portfolio.startDate.indexOf(
                                                            "T"
                                                        )
                                                    )
                                                    .replace("-", "??? ")
                                                    .replace("-", "??? ")
                                                    .concat("???")}{" "}
                                                -
                                                {portfolio.endDate == null
                                                    ? " (?????????)"
                                                    : portfolio.endDate
                                                          .substring(
                                                              2,
                                                              portfolio.endDate.indexOf(
                                                                  "T"
                                                              )
                                                          )
                                                          .replace("-", "??? ")
                                                          .replace("-", "??? ")
                                                          .concat("???")}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <div className="card">
                                            <div className="card-header text-center">
                                                ????????????
                                            </div>
                                            <div className="card-body text-center">
                                                {portfolio.developerCount}???
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="h2">??????</div>

                                <div className="row">
                                    {portfolio.func == null ||
                                    portfolio.func.length == 0 ? (
                                        <NoContent message="?????? ??????????????? ????????? ?????????" />
                                    ) : (
                                        portfolio.func.map((func) => {
                                            return (
                                                <div className="col-12 col-md-6">
                                                    <FunctionCard func={func} />
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                                {portfolio.func == null ||
                                portfolio.func.length < 4 ? (
                                    <></>
                                ) : (
                                    <MoreButton />
                                )}
                            </div>

                            <div className="mt-3">
                                <div className="h2">????????? ??????</div>

                                <div className="row">
                                    {portfolio.tech == null ||
                                    portfolio.tech.length == 0 ? (
                                        <NoContent message="????????? ????????? ?????? ?????????" />
                                    ) : (
                                        portfolio.tech.map((tech) => {
                                            return (
                                                <div className="col-4 col-md-3 mb-3">
                                                    <TechIcon tech={tech} />
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="h2">DB ??????</div>
                                {portfolio.db == null ? (
                                    <div className="h1">
                                        <NoContent message="DB??? ?????? ????????? ?????????" />
                                    </div>
                                ) : (
                                    <div>
                                        <img
                                            src={portfolio.db.img}
                                            alt=""
                                            className="img-fluid w-100"
                                        />

                                        <div className="list-group mt-3">
                                            {portfolio.db.explanation ==
                                            null ? (
                                                <NoContent message="DB??? ?????? ????????? ?????? ?????????" />
                                            ) : (
                                                portfolio.db.explanation.map(
                                                    (ex) => {
                                                        return (
                                                            <div className="list-group-item">
                                                                {ex}
                                                            </div>
                                                        );
                                                    }
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-3">
                                <div className="h2">????????????</div>

                                <div className="row mt-3 mb-3">
                                    {portfolio.explanation == null ||
                                    portfolio.explanation.length == 0 ? (
                                        <NoContent message="?????? ????????? ?????? ?????????" />
                                    ) : (
                                        <>
                                            <div className="h5 ps-5 text-muted">
                                                ??????????????? ?????? ???????????? ??????
                                                ???????????? ????????????, ?????? ?????????
                                                ????????? ????????? ??? ??? ???????????????!
                                            </div>
                                            {portfolio.explanation.map((ex) => {
                                                return (
                                                    <ExplanationCard
                                                        explanation={ex}
                                                    />
                                                );
                                            })}
                                        </>
                                    )}
                                </div>

                                {portfolio.explanation == null ||
                                portfolio.explanation.length < 4 ? (
                                    <></>
                                ) : (
                                    <MoreButton />
                                )}
                            </div>

                            <div className="mt-3">
                                <div className="h2">????????????</div>

                                {portfolio.history == null ||
                                portfolio.history.length == 0 ? (
                                    <NoContent message="??????????????? ?????? ?????????" />
                                ) : (
                                    <div className="list-group mt-3 mb-3">
                                        {portfolio.history == null ||
                                        portfolio.history.length == 0 ? (
                                            <NoContent message="??????????????? ?????? ?????????" />
                                        ) : (
                                            portfolio.history.map((his) => {
                                                return (
                                                    <div className="list-group-item">
                                                        <div className="row">
                                                            <div className="col-4 col-md-3 align-self-center">
                                                                {his.date
                                                                    .substring(
                                                                        2,
                                                                        his.date.indexOf(
                                                                            "T"
                                                                        )
                                                                    )
                                                                    .replace(
                                                                        "-",
                                                                        "??? "
                                                                    )
                                                                    .replace(
                                                                        "-",
                                                                        "??? "
                                                                    )
                                                                    .concat(
                                                                        "???"
                                                                    )}
                                                            </div>

                                                            <div className="col-7 col-md-8 align-self-center">
                                                                {his.content}
                                                            </div>

                                                            <div className="col-1 align-self-center text-center">
                                                                <a
                                                                    className="text-muted h2 me-3"
                                                                    target="_blank"
                                                                    href={
                                                                        his.githubLink
                                                                    }
                                                                >
                                                                    <GithubIcon />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        )}
                                    </div>
                                )}
                                {portfolio.history == null ||
                                portfolio.history.length < 5 ? (
                                    <></>
                                ) : (
                                    <MoreButton />
                                )}
                            </div>

                            <div className="mt-3 mb-3">
                                <div className="h2">?????????, ?????????</div>

                                <div className="list-group mt-3">
                                    {portfolio.review == null ||
                                    portfolio.review.length == 0 ? (
                                        <NoContent message="????????? ?????? ?????????" />
                                    ) : (
                                        portfolio.review.map((re) => {
                                            return (
                                                <div className="list-group-item">
                                                    <p>{re}</p>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const ExplanationCard = ({ explanation }) => {
    const { title, why, how, relatedPost } = explanation;

    return (
        <div className="col-12 col-md-6 mb-3">
            <div className="card" style={{ height: "600px" }}>
                <div className="card-header text-center">{title}</div>
                <div className="card-body">
                    <div className="h5">??? ????????????????</div>
                    <p className="text-muted">{why}</p>
                    <div className="h5">
                        ????????? ?????????????????? ???????????? ????????? ?????????
                    </div>
                    <p className="text-muted">{how}</p>

                    <div className="h5 mt-5">?????? ?????????</div>
                    <div className="row">
                        {relatedPost == null || relatedPost.length == 0 ? (
                            <NoContent
                                message="????????? ???????????? ?????????"
                                size="100"
                            />
                        ) : (
                            relatedPost.map((post) => {
                                return (
                                    <Link
                                        to={
                                            "/blog/" +
                                            post.category.type +
                                            post.num
                                        }
                                        className="text-decoration-none"
                                    >
                                        <PostCard post={post} />
                                    </Link>
                                );
                            })
                        )}
                    </div>
                </div>
                <div className="card-footer text-end bg-white">
                    <a href="" className="h2 text-dark" target="_blank">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};
const FunctionCard = ({ func }) => {
    return (
        <div className="card mb-3">
            <div className="card-header text-center">{func.title}</div>

            <div className="card-body">
                <p style={{ height: "150px", overflow: "auto" }}>
                    {func.content}
                </p>

                <img
                    src={fetchUrl + "/images/" + func.img}
                    alt=""
                    className="img-fluid"
                />
            </div>
        </div>
    );
};
const TechIcon = ({ tech }) => {
    return (
        <div className="row h-100 w-100 border justify-content-center">
            <div className="col-12 align-self-center text-center mt-2">
                <img
                    src={fetchUrl + "/images/" + tech.img}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className="img-fluid mx-auto d-block rounded-circle"
                />
            </div>
            <div className="col-12 align-self-center">
                <div className="h3 text-center">{tech.title}</div>
            </div>
        </div>
    );
};

export default PortfolioDetail;
