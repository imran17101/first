import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerImage from '../images/banner-image.png';
import NewSetsProducts from '../component/new-sets-product';
import TrendingWeek from '../component/trending-of-weeks';
import TopGainers from '../component/top-gainers';
import AddImage from '../images/AD-image.png';
import UpcomingSets from '../component/upcoming-sets';
import BlogGrid from '../component/blog-grid';

import Header from "../component/header";
import Footer from "../component/footer";


export default function Home() {
  return (
    <>
        <Header />
        <section className='Banenr-section'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <div className='banner-txt text-white'>
                            <span>WELCOME TO CODETCG</span>
                            <h1>Browse the Best Digital Cards!</h1>
                            <p>Stellar Crown is right around the corner. Here's everything you need to know!</p>
                            <button className='banner-btn'>Browse Now</button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='banner-image'>
                            <img src={BannerImage} alt="Pokemon Cards" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


        <section className='Cards-list-section'>
            <Container>
                <NewSetsProducts/>
            </Container>
        </section>

        <section className='trending-top-section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8}>
                        <Row>
                            <Col md={6}>
                                <TrendingWeek/>
                            </Col>
                            <Col md={6}>
                                <TopGainers/>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4}>
                        <div className='add-box'>
                            <img src={AddImage} alt="Add"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='Cards-list-section'>
            <Container>
                <UpcomingSets/>
            </Container>
        </section>


        <section className='blog-listing-section'>
            <Container>
                <h2><span>CodeTCG</span> Articles</h2>
                <BlogGrid/>
            </Container>
        </section>

        {/* Footer */}
        <Footer/>
    </>
  )
}
