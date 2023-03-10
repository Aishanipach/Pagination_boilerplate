import React from 'react'
import Pagination from 'react-js-pagination'
import { useState } from "react";
import styles from "../App.module.css"
function Paginate(props) {
    const [currentPage, setCurrentPage] = useState(1);
    // total records per page to display
    const recordPerPage = props.postsPerPage;
    // total number of the records
    const totalRecords = props.totalPosts;
    // range of pages in paginator
    const pageRange = 3;
    // handle change event
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        props.onChangepage(pageNumber);
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <div className={styles.pagination} >
                <pagination>
                    <Pagination
                        prevPageText='Prev'
                        nextPageText='Next'
                        firstPageText='First'
                        lastPageText='Last'
                        activePage={currentPage}
                        itemsCountPerPage={recordPerPage}
                        totalItemsCount={totalRecords}
                        pageRangeDisplayed={pageRange}
                        onChange={handlePageChange}
                    />
                </pagination>
            </div>
        </div>
    );
}
export default Paginate;