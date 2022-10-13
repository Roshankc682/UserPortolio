import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import {  PROJECT_DATA } from '../../config/urls';
import instance from "../../services/axios_instance";

const Paginate_Data = () => {
  const [data, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    instance({
      url:PROJECT_DATA,
      method:"GET",
    }).then((res)=>{
      setPosts(res.data);
    }).catch((err)=>{
    })
    setLoading(false);
  }, []);

  // Get current data
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={dataPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </>
  );
};

export default Paginate_Data;