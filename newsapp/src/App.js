


import React, { useState, useEffect } from 'react';
import NewsList from './Newslist';
import PaginationControls from './paginationControls'; 
import axios from 'axios';
import './App.css'
const App = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(''); 
  const itemsPerPage = 4;

  useEffect(() => {
    const apiEndpoint = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=15c3ded4319c4e38b0b5c3183450a4ed`;

    axios.get(apiEndpoint)
      .then((response) => {
        console.log(response.data);
        const data = response.data.articles.map((item, index) => ({
          serialNo: index + 1,
          ...item
        }));
        const results = data.filter((article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setNews(results);
        console.log(results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]); 

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNews = news.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="App">
      <h1>News Dashboard</h1>
      <input
        type="text"
        placeholder="Search news..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <NewsList news={paginatedNews} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
