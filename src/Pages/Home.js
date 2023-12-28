import './Home.css'

import logo from '../images/LOGO-02-3.png';
import logo2 from '../images/Blog-1024x355 1.png'
import BlogCard from '../Components/BlogCard';
import Blog from '../Pages/Blog';
import SignIn from '../Components/SignIn';
import Backdrop from '../Components/Backdrop';
import { useEffect, useState, useRef } from 'react';
import AddBlog from '../Pages/AddBlog';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Home = (props) => {

    useEffect(() => {
        if (typeof props.stateValue === 'string') {
            return;
        } else {
            setIsLogedIn(true);
        }
    }, [props.stateValue]);

    const searchCategories = [
        {
            "id": 1,
            "title": "Category name",
            "text_color": "#ffffff",
            "background_color": "#000000"
        },
        {
            "id": 2,
            "title": "Category name",
            "text_color": "green",
            "background_color": "blue"
        }
    ]

    const data = [
        {
            "id": 1,
            "title": "Blog title",
            "description": "Blog description",
            "image": "https://via.placeholder.com/150",
            "publish_date": "2023-11-19 00:00:00",
            "categories": [
                {
                    "id": 1,
                    "name": "Category name",
                    "text_color": "#ffffff",
                    "background_color": "#000000"
                },
                {
                    "id": 2,
                    "name": "meore",
                    "text_color": "green",
                    "background_color": "blue"
                }
            ],
            "author": "გელა გელაშვილი"
        }, {
            "id": 2,
            "title": "Blog title",
            "description": "Blog description",
            "image": "https://via.placeholder.com/150",
            "publish_date": "2023-11-19 00:00:00",
            "categories": [
                {
                    "id": 1,
                    "name": "Category name",
                    "text_color": "#ffffff",
                    "background_color": "#000000"
                },
                {
                    "id": 2,
                    "name": "meore",
                    "text_color": "green",
                    "background_color": "blue"
                }
            ],
            "author": "გელა გელაშვილი"
        },
        {
            "id": 3,
            "title": "Blog title",
            "description": "Blog description",
            "image": "https://via.placeholder.com/150",
            "publish_date": "2023-11-19 00:00:00",
            "categories": [
                {
                    "id": 1,
                    "name": "Category name",
                    "text_color": "#ffffff",
                    "background_color": "#000000"
                },
                {
                    "id": 2,
                    "name": "meore",
                    "text_color": "green",
                    "background_color": "blue"
                }
            ],
            "author": "გელა გელაშვილი"
        },
        {
            "id": 4,
            "title": "Blog title",
            "description": "Blog description",
            "image": "https://via.placeholder.com/150",
            "publish_date": "2023-11-19 00:00:00",
            "categories": [
                {
                    "id": 1,
                    "name": "Category name",
                    "text_color": "#ffffff",
                    "background_color": "#000000"
                },
                {
                    "id": 2,
                    "name": "meore",
                    "text_color": "green",
                    "background_color": "blue"
                }
            ],
            "author": "გელა გელაშვილი"
        }
    ]
    const [isModalOpen, setModalOpen] = useState(false);
    const useModal = () => setModalOpen(!isModalOpen);
    const [isLogedIn, setIsLogedIn] = useState(false)

    const changeStatus = () => {
        setIsLogedIn(true)
    }

    return (
        <div>
            <header className='app-header'>
                <img src={logo} />
                {isLogedIn && <Link to='/AddBlog'> <button style={{ width: 153, cursor: 'pointer' }}> დაამატე ბლოგი </button></Link>}
                {!isLogedIn && <button className='enter' onClick={useModal}> შესვლა </button>}
            </header>
            <div className='content'>
                {isModalOpen && <Backdrop onClick={useModal} />}
                {isModalOpen && <SignIn closeModal={useModal} status={changeStatus} />}
            </div>
            <div className='body'>
                <div className='h1-logo'>
                    <h1> ბლოგი </h1>
                    <img src={logo2} />
                </div>
                <div className="filter">
                    <ul>
                        {props.filterCategories.map(category => (
                            <li
                                key={category.id}
                                style={
                                    {
                                        backgroundColor: category.background_color,
                                        color: category.text_color,
                                        padding: '8px 16px 8px 16px',
                                        borderRadius: '30px',
                                        cursor: 'pointer'
                                    }
                                } > {category.title}</li>
                        ))}
                    </ul>
                </div>
                <div className='blog-list'>
                    {data.map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            description={blog.description}
                            image={blog.image}
                            publish_date={blog.publish_date}
                            categories={blog.categories}
                            author={blog.author}
                        />
                    ))}
                </div>
            </div>
            {/* <Blog
                data={data}
            /> */}
        </div>
    )
}

export default Home;