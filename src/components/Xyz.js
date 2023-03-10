import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import Paginate from "./Paginate";
function Xyz() {
    const [commentData, setcommentData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [postsPerPage] = useState(10);
    useEffect(() => {
        const fetchData = async () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((json) => {
                    console.log(json)
                    setLoading(true)
                    setcommentData(json);

                });
        };

        fetchData();
        setLoading(false)
    }, []);
    const indexOfLastPost = currentPage * postsPerPage;

    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = commentData.slice(indexOfFirstPost, indexOfLastPost);

    const pageHandler = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div>
            {loading ?
                <div>
                    <Posts posts={currentPosts} />

                    <Paginate
                        onChangepage={pageHandler}
                        postsPerPage={postsPerPage}
                        totalPosts={commentData.length}
                    />
                </div>
                : <h4>Loading...</h4>}
        </div>
    )
}
export default Xyz;