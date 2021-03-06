import React, { useState, useEffect } from "react";

import ClassificationIcon from "./ClassificationIcon";

// Components
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import NoContent from "./NoPost";

// React icons
import { BsGearWideConnected as ComplexityIcon } from "react-icons/bs";
import {
    BiTimeFive as LengthIcon,
    BiWorld as LanguageIcon,
    BiTask as ProgressIcon,
} from "react-icons/bi";

// Library
import { Carousel, OverlayTrigger, Popover } from "react-bootstrap";
import "./carousel.css";
import parse from "html-react-parser";
import fetchUrl from "../../common/fetchvar";

const Post = ({ num }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [concept, setConcept] = useState(null);

    // Initial Fetch
    useEffect(() => {
        Promise.all([
            // Fetch Data Here
            fetch(fetchUrl + "/api/blog/post/detail/" + num)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPost(data);
                    setConcept(splitArray(data.concepts));
                })
                .catch((err) => {
                    return err;
                }),
        ]).finally(() => {
            setIsLoading(false);
        });
    }, []);

    const splitArray = (data) => {
        const result = new Array(Math.ceil(data.length / 4))
            .fill()
            .map((_) => data.splice(0, 4));
        return result;
    };

    return isLoading ? (
        <Loading />
    ) : post == null || post.length == 0 ? (
        <Error />
    ) : (
        <div className="overflow-hidden">
            <div className="row justify-content-center">
                <div className="col-5 col-md-3 align-self-center">
                    <ClassificationIcon
                        data={post.classification}
                        isActive={true}
                    />
                </div>

                <div className="col-7 col-md-9 h2 text-center align-self-center">
                    {post.title}
                </div>
            </div>

            <div className="row mt-3 justify-content-center">
                <div className="col-12 p-3 text-muted h5 mt-3 lh-base">
                    {post.subtitle}
                </div>
            </div>

            <div className="mt-5">
                <div className="mb-5">
                    <div className="h3 mt-3">?????? ??????</div>

                    <Carousel
                        variant="dark"
                        indicators={false}
                        controls={
                            concept == null || concept.length <= 4
                                ? false
                                : true
                        }
                    >
                        {post.concepts == null ? (
                            <div className="text-center h3 text-muted">
                                ?????? ????????? ?????????
                            </div>
                        ) : (
                            concept.map((arr) => {
                                return (
                                    <Carousel.Item>
                                        <div className="row">
                                            {arr == null ? (
                                                <NoContent />
                                            ) : (
                                                arr.map((concept) => {
                                                    return (
                                                        <div className="col-3">
                                                            <LearningConcept
                                                                concept={
                                                                    concept
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                })
                                            )}
                                        </div>
                                    </Carousel.Item>
                                );
                            })
                        )}
                    </Carousel>
                </div>

                <div className="mb-3 mt-5">
                    <div className="h3 mt-3">3?????????</div>

                    <div className="list-group">
                        {post.summary == null ||
                        typeof post.summary == undefined ? (
                            <Error />
                        ) : post.summary.length == 0 ? (
                            <NoContent message="3???????????? ?????????" />
                        ) : (
                            post.summary.map((sum) => {
                                return (
                                    <div className="list-group-item">
                                        {sum.content}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                <div className="mb-3 mt-5">
                    <div className="h3 mt-3">??????</div>

                    <div className="mt-5 mb-5">
                        {post.content == null || post.content == "" ? (
                            <NoContent message="????????? ?????????" />
                        ) : (
                            <div
                                className="lh-base"
                                style={{ fontSize: "1.2rem" }}
                            >
                                {parse(post.content)}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-5">
                    <div className="h3 mt-3 mb-2 mb-3">????????? ??????, ??????</div>
                    {post.learningContent == null ? (
                        <Error />
                    ) : post.learningContent.length == 0 ? (
                        <NoContent message="????????? ????????? ?????????" />
                    ) : (
                        post.learningContent.map((content) => {
                            return (
                                <LearingContentCard
                                    content={content}
                                    className="mb-5"
                                />
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

const LearingContentCard = ({ content }) => {
    return (
        <>
            <div className="row mb-4">
                <div className="col-2 align-self-center">
                    <div className="row justify-content-center">
                        <img
                            src={
                                fetchUrl +
                                "/images/" +
                                content.classification.icon
                            }
                            alt={content.classification.title + "Icon"}
                            className="img-fluid rounded-circle"
                        />
                        <div className="h3 text-center">
                            {content.classification.title}
                        </div>
                    </div>
                </div>

                <div className="col-10">
                    <div className="card">
                        <div className="card-header text-center">
                            <div className="row">
                                <div className="col-8 col-md-10 align-self-center">
                                    {content.title}
                                </div>
                                <div className="col-4 col-md-2">
                                    <a
                                        className="btn btn-primary w-100"
                                        href={content.link}
                                        target="_blank"
                                    >
                                        ??????
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="card-content p-4"
                            style={{ height: "150px", overflowY: "auto" }}
                        >
                            {content.description == null ||
                            content.description == "" ? (
                                <NoContent message="????????? ?????????" size="75" />
                            ) : (
                                content.description
                            )}
                        </div>

                        <div className="card-footer bg-transparent">
                            <div className="row">
                                <div className="col-6 col-md-3 p-2">
                                    <div className="btn w-100 btn-outline-dark">
                                        <div className="row">
                                            <div className="col-3">
                                                <LanguageIcon />
                                            </div>
                                            <div className="col-9">
                                                {content.language == 0
                                                    ? "??????"
                                                    : "?????????"}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 p-2">
                                    <div
                                        className={
                                            "btn w-100 " +
                                            (content.finishPercent < 30
                                                ? "btn-outline-danger"
                                                : content.finishPercent < 60
                                                ? "btn-outline-warning"
                                                : "btn-outline-success")
                                        }
                                    >
                                        <div className="row">
                                            <div className="col-3">
                                                <ProgressIcon />
                                            </div>
                                            <div className="col-9">
                                                {content.finishPercent < 30
                                                    ? "3?????? 1"
                                                    : content.finishPercent < 60
                                                    ? "3?????? 2"
                                                    : "??????!"}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 p-2">
                                    <div
                                        className={
                                            "btn w-100 " +
                                            (content.difficulty == 0
                                                ? "btn-outline-danger"
                                                : content.difficulty == 1
                                                ? "btn-outline-warning"
                                                : "btn-outline-success")
                                        }
                                    >
                                        <div className="row">
                                            <div className="col-3">
                                                <ComplexityIcon />
                                            </div>
                                            <div className="col-9">
                                                {content.difficulty == 0
                                                    ? "???"
                                                    : content.difficulty == 1
                                                    ? "???"
                                                    : "???"}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 p-2">
                                    <div
                                        className={
                                            "btn w-100 " +
                                            (content.duration < 60
                                                ? "btn-outline-danger"
                                                : content.duration < 180
                                                ? "btn-outline-warning"
                                                : "btn-outline-success")
                                        }
                                    >
                                        <div className="row">
                                            <div className="col-3">
                                                <LengthIcon />
                                            </div>
                                            <div className="col-9">
                                                {content.duration < 60
                                                    ? content.duration + "???"
                                                    : "??? " +
                                                      Math.round(
                                                          content.duration / 60
                                                      ) +
                                                      "??????"}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const LearningConcept = ({ concept }) => {
    return (
        <OverlayTrigger
            placement="top"
            overlay={
                <Popover>
                    <Popover.Body>{concept.content}</Popover.Body>
                </Popover>
            }
        >
            <button className="btn btn-outline-primary w-100">
                {concept.title}
            </button>
        </OverlayTrigger>
    );
};

export default Post;
