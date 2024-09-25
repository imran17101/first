import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo.svg';
import Facebook from '../images/facebook.svg';
import GooglePlus from '../images/Google-plus.svg';
import Messenger from '../images/Messenger.svg';
import Discord from '../images/Discord.svg';
import Twitch from '../images/Twitch.svg';
import { Form, Button } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";

export default function footer() {
    return (
        <>
            <footer className='footer'>
                <Container>
                    <p className='footer-description'>
                        *To purchase a subscription you must have a CodeTCG account. Free tracked shipping on orders is for Direct by CodeTCG items only. Only orders $35 and up are eligible for the 1, 2, or 3% Loyalty Bonus Promotional Store Credit and it is limited to the first $10,000.00 spent on eligible orders each calendar month. There is a maximum of $50 of promotion store credit earned per each individual item. Store credit can be earned on any $35+ orders in the marketplace, excluding gift cards, not only for Direct by CodeTCG packages. CodeTCG Subscription is only available for U.S. customers at this time. See th CodeTCG Subscription FAQ for full details.
                    </p>

                    <div className='footer-logo-form'>
                        <Row className='align-items-center'>
                            <Col lg={4}>
                                <div className='footer-logo-desc'>
                                    <img src={logo} alt="Footer Logo" className='footer-logo' />
                                    <p className='logo-bottom-desc'>We are a huge marketplace dedicated to connecting great artists of all mediums with their fans and unique Card collectors!</p>
                                    <ul className='list-unstyled social-links m-0'>
                                        <li>
                                            <a href='/' className='social-icons'>
                                                <img src={Facebook} alt='facebook' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className='social-icons'>
                                                <img src={GooglePlus} alt='facebook' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className='social-icons'>
                                                <img src={Messenger} alt='facebook' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className='social-icons'>
                                                <img src={Discord} alt='facebook' />
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/' className='social-icons'>
                                                <img src={Twitch} alt='facebook' />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className='footer-form'>
                                    <Form className="d-flex">
                                        <Form.Control type="email" placeholder="Enter your email to subscribe" className="me-2" aria-label="email" />
                                        <Button className="arrow-btn"><FaArrowRightLong /></Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='footer-links-box'>
                        <Row>
                            <Col sm={6} md={4} xl={2}>
                                <div className='footer-links-div'>
                                    <h4>How Can We Help?</h4>
                                    <ul className='list-unstyled footer-links'>
                                        <li><a href="/">Contact Customer Service</a></li>
                                        <li><a href="/">Help Center</a></li>
                                        <li><a href="/">Accessibility</a></li>
                                        <li><a href="/">Leave Us Feedback</a></li>
                                        <li><a href="/">Refund and Return Policy</a></li>
                                        <li><a href="/">Security Researchers</a></li>
                                        <li><a href="/">Responsible Disclosure</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={6} md={4} xl={2}>
                                <div className='footer-links-div'>
                                    <h4>Shop</h4>
                                    <ul className='list-unstyled footer-links'>
                                        <li><a href="/">Magic</a></li>
                                        <li><a href="/">Yu-Gi-Oh!</a></li>
                                        <li><a href="/">Pokémon</a></li>
                                        <li><a href="/">Disney Lorcana</a></li>
                                        <li><a href="/">Flesh and Blood</a></li>
                                        <li><a href="/">All Categories</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={6} md={4} xl={2}>
                                <div className='footer-links-div'>
                                    <h4>Articles & Decks</h4>
                                    <ul className='list-unstyled footer-links'>
                                        <li><a href="/">CodeTCG player Infinite</a></li>
                                        <li><a href="/">Magic Articles & Decks</a></li>
                                        <li><a href="/">Yu-Gi-Oh! Articles & Decks</a></li>
                                        <li><a href="/">Pokémon Articles & Videos</a></li>
                                        <li><a href="/">Disney Lorcana Articles & Decks</a></li>
                                        <li><a href="/">Flesh and Blood Articles & Videos</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={6} md={4} xl={2}>
                                <div className='footer-links-div'>
                                    <h4>Buy With Us</h4>
                                    <ul className='list-unstyled footer-links'>
                                        <li><a href="/">CodeTCG Subscription</a></li>
                                        <li><a href="/">CodeTCG Safeguard</a></li>
                                        <li><a href="/">Gift Cards</a></li>
                                        <li><a href="/">Cart Optimizer</a></li>
                                        <li><a href="/">Mass Entry</a></li>
                                        <li><a href="/">Collection Tracker</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={6} md={4} xl={2}>
                                <div className='footer-links-div'>
                                    <h4>Sell With Us</h4>
                                    <ul className='list-unstyled footer-links'>
                                        <li><a href="/">Sell On CodeTCG player</a></li>
                                        <li><a href="/">Unlock Pro</a></li>
                                        <li><a href="/">Direct by CodeTCG player</a></li>
                                        <li><a href="/">Price Data API's</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col sm={6} md={4} xl={2}>
                                <div className='footer-links-div'>
                                    <h4>About</h4>
                                    <ul className='list-unstyled footer-links'>
                                        <li><a href="/">About Us</a></li>
                                        <li><a href="/">Our Core Values</a></li>
                                        <li><a href="/">Working at CodeTCG</a></li>
                                        <li><a href="/">Working in Syracuse</a></li>
                                        <li><a href="/">Careers</a></li>
                                        <li><a href="/">Press Center</a></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='footer-copyright'>
                        <Row>
                            <Col md={6}>
                                <p className='copyright-txt'>CodeTCG 2024 - All Rights Reserved</p>
                            </Col>
                            <Col md={6}>
                                <div className='terms-policy text-end'>
                                    <a href='/'>Terms of Service</a>
                                    <a href='/'>Privacy</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </footer>
        </>
    )
}
