import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ClassificationIcon from "./ClassificationIcon";

// Components
import NoContent from "./NoPost";
import Loading from "../../common/Loading";
import PostCard from "./PostCard";
import Post from "./Post";
import toast from "react-hot-toast";
import Error from "../../common/Error";

import fetchUrl from "../../common/fetchvar";

const BlogDev = () => {
    const { num } = useParams();
    const [selectedMainCategory, setSelectedMainCategory] = useState(0);
    const [selectedSubCategory, setSelectedSubCategory] = useState(0);
    const [subCategoryList, setSubCategoryList] = useState(null);
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [blogPage, setBlogPage] = useState(0);
    const [totalPost, setTotalPost] = useState(0);
    const [mainCategory, setMainCategory] = useState(null);

    // Initial fetch
    useEffect(() => {
        Promise.all([
            fetch(fetchUrl + "/api/blog/category/2")
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setMainCategory(data);
                })
                .catch((err) => {
                    return err;
                }),
        ]).finally(() => {
            setIsLoading(false);
        });
    }, []);

    // Fetch blogData when category changes
    useEffect(() => {
        setIsLoading(true);
        if (selectedSubCategory == null || selectedSubCategory == 0) {
            fetch(fetchUrl + "/api/blog/filter/2/" + selectedMainCategory)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPosts(data);
                })
                .catch((err) => {
                    return err;
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            fetch(fetchUrl + "/api/blog/filter/3/" + selectedSubCategory)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setPosts(data);
                })
                .catch((err) => {
                    return err;
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [selectedMainCategory, selectedSubCategory]);

    // Fetch sub category when selectedMainCategory changes
    useEffect(() => {
        // Fetch subCategory by selectedMainCategory
        if (selectedMainCategory == null || selectedMainCategory == 0) {
            setSubCategoryList(null);
        } else {
            fetch(fetchUrl + "/api/blog/category/3/" + selectedMainCategory)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setSubCategoryList(data);
                })
                .catch((err) => {
                    return err;
                });
        }
    }, [selectedMainCategory]);

    return (
        <div>
            <div className="h1">????????????</div>

            <div className="row">
                {mainCategory == null || mainCategory.length == 0 ? (
                    <NoContent message="??????????????? ?????????" />
                ) : (
                    mainCategory.map((category) => {
                        return (
                            <Link to="/blog/dev" className="col-12 col-md-6">
                                <div
                                    onClick={() => {
                                        if (
                                            selectedMainCategory != category.num
                                        ) {
                                            setSelectedMainCategory(
                                                category.num
                                            );
                                        } else {
                                            setSelectedMainCategory(0);
                                            setSelectedSubCategory(0);
                                        }
                                    }}
                                >
                                    <ClassificationIcon
                                        data={category}
                                        isActive={
                                            selectedMainCategory == category.num
                                        }
                                    />
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>

            <div className="row">
                {selectedMainCategory != null ? (
                    subCategoryList != null ? (
                        subCategoryList.map((category) => {
                            return (
                                <Link to="/blog/dev" className="col-6 col-md-3">
                                    <div
                                        onClick={() => {
                                            if (
                                                selectedSubCategory ==
                                                category.num
                                            ) {
                                                setSelectedSubCategory(0);
                                            } else {
                                                setSelectedSubCategory(
                                                    category.num
                                                );
                                            }
                                        }}
                                    >
                                        <ClassificationIcon
                                            data={category}
                                            isActive={
                                                selectedSubCategory ==
                                                category.num
                                            }
                                        />
                                    </div>
                                </Link>
                            );
                        })
                    ) : (
                        <></>
                    )
                ) : (
                    <></>
                )}
            </div>

            <div className="mt-5">
                {isLoading ? (
                    <Loading />
                ) : posts == null ? (
                    <Error />
                ) : posts.length == 0 ? (
                    <NoContent message="????????????, ?????? ???????????? ?????????" />
                ) : num == null ? (
                    <>
                        {posts.map((post) => {
                            return (
                                <Link
                                    to={"/blog/dev/" + post.num}
                                    className="text-decoration-none"
                                >
                                    <PostCard post={post} />
                                </Link>
                            );
                        })}

                        <div className="row mt-3 justify-content-center">
                            <div className="col-12 align-self-center">
                                <ul class="pagination justify-content-center">
                                    <li
                                        class="page-item"
                                        onClick={() => {
                                            if (0 < blogPage) {
                                                setBlogPage(blogPage - 1);
                                            } else {
                                                toast.error(
                                                    "??? ?????? ?????? ??? ?????????. ???????????? ???????????????"
                                                );
                                            }
                                        }}
                                    >
                                        <div class="page-link" href="#">
                                            {"<"}
                                        </div>
                                    </li>
                                    {totalPost < 10 ? (
                                        <li className="page-item active">
                                            <div className="page-link">1</div>
                                        </li>
                                    ) : (
                                        [
                                            ...Array(
                                                Math.floor(totalPost / 10)
                                            ),
                                        ].map((item, index) => {
                                            return (
                                                <li
                                                    class={
                                                        "page-item" +
                                                        (blogPage == index
                                                            ? " active"
                                                            : "")
                                                    }
                                                    onClick={() => {
                                                        setBlogPage(index);
                                                    }}
                                                >
                                                    <div class="page-link">
                                                        {index + 1}
                                                    </div>
                                                </li>
                                            );
                                        })
                                    )}
                                    <li
                                        class="page-item"
                                        onClick={() => {
                                            if (
                                                blogPage <
                                                Math.floor(totalPost / 10) - 1
                                            ) {
                                                setBlogPage(blogPage + 1);
                                            } else {
                                                toast.error(
                                                    "??? ?????? ???????????? ?????????"
                                                );
                                            }
                                        }}
                                    >
                                        <div class="page-link">{">"}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>
                ) : (
                    <Post num={num} />
                )}
            </div>
        </div>
    );
};

export default BlogDev;
