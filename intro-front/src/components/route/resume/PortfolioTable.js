import React from "react";
import { Link } from "react-router-dom";

import PortfolioCard from "../portfolio/PortfolioCard";
import Error from "../../common/Error";
import MoreButton from "../../common/MoreButton";

const PortfolioTable = ({
    portfolioData,
    setIsPortfolioOpen,
    setSelectedPortfolioNum,
}) => {
    return (
        <div className="row">
            <div className="h2 mb-3">포트폴리오</div>

            {portfolioData == null || portfolioData.length == 0 ? (
                <Error />
            ) : (
                portfolioData.map((portfolio) => {
                    return (
                        <div className="col-12 col-md-6">
                            <PortfolioCard
                                portfolio={portfolio}
                                setIsPortfolioOpen={setIsPortfolioOpen}
                                setSelectedPortfolioNum={
                                    setSelectedPortfolioNum
                                }
                            />
                        </div>
                    );
                })
            )}

            <div className="col-12">
                {portfolioData == null || portfolioData.length < 4 ? (
                    <></>
                ) : (
                    <Link to="/portfolio">
                        <MoreButton />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PortfolioTable;
