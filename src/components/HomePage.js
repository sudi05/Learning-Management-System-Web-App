import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import { useDispatch } from 'react-redux';
import { logout } from '../actions';

let image1 = require("../images/python-img.jpg");
let image2 = require("../images/reactJS-img.jpg");
let image3 = require("../images/java-img.jpg");
let image4 = require("../images/communication-img.jpeg");
const HomePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('authToken');
        navigate('/loginPage');
    }

    return (
        <div className="container">
            <div className="home-page">
                <h1>Welcome to the Learning Platform</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
                <h2>Featured Courses</h2>
                <div className="course-section">
                    <div className="course-card">
                        <img src={image1} alt=''/>
                        <div className="course-info">
                            <h3>Python</h3>
                            <p>John Doe</p>
                            <Link to="/coursePage/1" className="course-link">
                                View Course
                            </Link>
                        </div>
                    </div>
                    <div className="course-card">
                        <img src={image2} alt='' />
                        <div className="course-info">
                            <h3>React JS</h3>
                            <p>Jane Smith</p>
                            <Link to="/coursePage/2" className="course-link">
                                View Course
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="course-section2">
                    <div className="course-card">
                        <img src={image3} alt='' />
                        <div className="course-info">
                            <h3>Java</h3>
                            <p>Mike Johnson</p>
                            <Link to="/coursePage/3" className="course-link">
                                View Course
                            </Link>
                        </div>
                    </div>
                    <div className="course-card">
                        <img src={image4} alt='' />
                        <div className="course-info">
                            <h3>Communications</h3>
                            <p>Sarah Williams</p>
                            <Link to="/coursePage/4" className="course-link">
                                View Course
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;