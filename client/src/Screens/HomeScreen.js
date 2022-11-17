import React, { useState, useEffect } from 'react'
import { Spinner, Row, Col } from 'react-bootstrap'

import News from '../components/News.js'

import { fetchNews } from '../axios/index.js';

const HomeScreen = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
      const getNews = async () => {
        const response = await fetchNews();
        console.log(response.data);
        setNews(response.data);
      }

      getNews();
    }, []);




  return (

    // Creating a grid with cards of news
    <>
      <h1>Latest News</h1>
      {!news.length ? <Spinner animation="border" role="status" /> : 
        <Row>
          {news.map((news) => (
            <Col key={news.id} sm={12} md={6} lg={4} xl={3}>
              <News news={news} />
            </Col>
          ))}
        </Row>
      }
    </>
  )
}


export default HomeScreen