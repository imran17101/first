import React, { useState } from 'react';
import logo from '../images/logo.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import upcoming from '../images/mtg_duskmourn_house_of_horror_search.webp';


export default function Header() {

    const [selectedCategory, setSelectedCategory] = useState('All Items');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        // Implement search functionality here
        console.log(`Searching for: ${event.target.search.value} in ${selectedCategory}`);
    };

    return (
        <>
            <header>
                <div className='top-header'>
                    <div className='cstm-container'>
                        <a href='/' className='brand-logo'>
                            <img src={logo} alt='Site Logo' />
                        </a>
                        <div className="header-search-form">
                            <Form className="d-flex" onSubmit={handleSearch} style={{ flexGrow: 1 }}>
                                <Form.Select value={selectedCategory} onChange={handleCategoryChange}>
                                    <option>All Items</option>
                                    <option>Category 1</option>
                                    <option>Category 2</option>
                                    <option>Category 3</option>
                                </Form.Select>
                                <Form.Control type="search" name="search" placeholder="Enter your search here..." aria-label="Search" />
                                <Button className="cstm-searc-icon" variant="outline-light" type="submit">
                                    <IoSearch />
                                </Button>
                            </Form>
                        </div>
                        <div className="login-with-cart">
                            <span className='csrt-user'><FiUser /></span>
                            <span className='csrt-user'><IoCartOutline /></span>
                            <a href="/" className='login-btn sign-in-btns'>Sign In</a>
                            <a href="/" className='login-btn sell-btns'>Sell With Us</a>
                        </div>
                    </div>
                </div>
                <div className='navbar-links'>
                    <Navbar className='py-0' variant="dark" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-lg-none' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Magic" id="magic-dropdown">
                                    <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Yu-Gi-Oh" id="yugioh-dropdown">
                                <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Pokemon" id="pokemon-dropdown">
                                <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Disney Lorcana" id="lorcana-dropdown">
                                <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="One Piece" id="onepiece-dropdown">
                                <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Digimon" id="digimon-dropdown">
                                <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="Flesh and Blood" id="fab-dropdown">
                                <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <NavDropdown title="More" id="fab-dropdown">
                                    <div className='mega-dropdown-box'>
                                        <div className='cstm-container'>
                                            <h2>Magic: The Gathering</h2>
                                            <div className='cstm-row'>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <h3><a href='/'>Latest Sets</a></h3>
                                                        <ul className='list-unstyled'>
                                                            <li><a href='/'>Duskmourn: House of Horror</a></li>
                                                            <li><a href='/'>Mystery Booster 2</a></li>
                                                            <li><a href='/'>Bloomburrow</a></li>
                                                            <li><a href='/'>Universes Beyond: Assassin's Creed</a></li>
                                                            <li><a href='/'>Modern Horizons 3</a></li>
                                                            <li><a href='/'>Outlaws of Thunder Junction</a></li>
                                                            <li><a href='/'>Universes Beyond: Fallout</a></li>
                                                            <li><a href='/'>Murders at Karlov Manor</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className='cstm-col'>
                                                    <div className='mega-dropdown-links'>
                                                        <div className='cstm-bg-image'>
                                                            <img src={upcoming} alt="Upcoming" />
                                                            <p className='upcoming-image-title'>Duskmourn: House of Horror</p>
                                                            <button className='preorder'>Preorder Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </NavDropdown>
                                <Nav.Link href="#action2">Subscribe to CodeTCG</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </>
    )
}
