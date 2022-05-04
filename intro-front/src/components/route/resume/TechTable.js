// React
import React, { useEffect, useState } from "react";

// Components
import TechCard from "./TechCard";
import Error from "../../common/Error";

// Library
import {
    Collapse,
    Button,
    OverlayTrigger,
    Popover,
    Modal,
    Carousel,
} from "react-bootstrap";
import toast from "react-hot-toast";
import fetchUrl from "../../common/fetchvar";

const TechTable = ({
    techData,
    techHeaderData,
    techLength,
    techPage,
    setTechPage,
}) => {
    const [isDesOpen, setIsDesOpen] = useState(false);

    const techSummary = {
        buttonTitle: "기술이 있다의 기준은?",
        buttonDescription: `단순히 가볍게 몇 번 다뤄 봤다고 이 기술을 보유하고 있다고는 생각하지 않습니다.
        무조건 프로젝트에서 사용한 적이 있고, 서툴어도 검색해 가면서 현업에서 바로
        사용할 수 있다고 생각하는 기술만 포함했습니다.`,
    };

    return (
        <>
            <div className="row">
                <div className="col-md-8 col-lg-9 col-4 col-sm-6">
                    <div className="h2">보유기술 (총 {techLength}개)</div>
                </div>

                <div className="col-md-4 col-lg-3 col-8 col-sm-6">
                    <Button
                        onClick={() => setIsDesOpen(!isDesOpen)}
                        aria-controls="techDes"
                        aria-expanded={isDesOpen}
                        className="btn-primary w-100"
                    >
                        {techSummary.buttonTitle}
                    </Button>
                </div>
            </div>
            <Collapse in={isDesOpen} className="mt-3 h6 text-muted">
                <div
                    className="card card-body"
                    id="techDes"
                    style={{ lineHeight: "2rem" }}
                >
                    {techSummary.buttonDescription}
                </div>
            </Collapse>

            <div className="mt-3 mb-5">
                <Carousel variant="dark" indicators={false}>
                    {techHeaderData == null || techHeaderData.length == 0 ? (
                        <Error />
                    ) : (
                        techHeaderData.map((arr) => {
                            return (
                                <Carousel.Item>
                                    <div
                                        className="row ps-3"
                                        style={{ height: "120px" }}
                                    >
                                        {arr.map((tech) => {
                                            return (
                                                <div className="col-4 col-md-3">
                                                    <div className="row h-100 w-100 border justify-content-center">
                                                        <div className="col-12 align-self-center text-center mt-2">
                                                            <img
                                                                src={
                                                                    fetchUrl +
                                                                    "/images/" +
                                                                    tech.img
                                                                }
                                                                alt=""
                                                                style={{
                                                                    height: "50px",
                                                                }}
                                                                className="img-fluid mx-auto d-block rounded-circle"
                                                            />
                                                        </div>
                                                        <div className="col-12 align-self-center">
                                                            <div className="h5 text-center">
                                                                {tech.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </Carousel.Item>
                            );
                        })
                    )}
                </Carousel>
            </div>

            {techData == null || techData.length == 0 ? (
                <Error />
            ) : (
                <div>
                    {techData.map((data) => {
                        return <TechCard tech={data} />;
                    })}
                </div>
            )}

            {techData == null ? (
                <div className="row mt-3 justify-content-center">
                    <div className="col-12 align-self-center">
                        <ul class="pagination justify-content-center">
                            <li className="page-item">0</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="row mt-3 justify-content-center">
                    <div className="col-12 align-self-center">
                        <ul class="pagination justify-content-center">
                            <li
                                class="page-item"
                                onClick={() => {
                                    if (techPage >= 1) {
                                        setTechPage(techPage - 1);
                                    } else {
                                        toast.error(
                                            "가장 처음 페이지에 있어요"
                                        );
                                    }
                                }}
                            >
                                <div class="page-link" href="#">
                                    {"<"}
                                </div>
                            </li>
                            {[...Array(Math.ceil(techLength / 3))].map(
                                (item, index) => {
                                    return (
                                        <li
                                            class={
                                                "page-item" +
                                                (techPage == index
                                                    ? " active"
                                                    : "")
                                            }
                                            onClick={() => {
                                                setTechPage(index);
                                            }}
                                        >
                                            <div class="page-link">
                                                {index + 1}
                                            </div>
                                        </li>
                                    );
                                }
                            )}
                            <li
                                class="page-item"
                                onClick={() => {
                                    if (techPage < Math.floor(techLength / 3)) {
                                        setTechPage(techPage + 1);
                                    } else {
                                        toast.error(
                                            "더 이상 보유기술이 없어요"
                                        );
                                    }
                                }}
                            >
                                <div class="page-link">{">"}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default TechTable;
