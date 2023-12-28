import './App.css'
import logo from './images/LOGO-02-3.png';
import logo2 from './images/Blog-1024x355 1.png'
import BlogCard from './Components/BlogCard';
import Blog from './Pages/Blog';
import SignIn from './Components/SignIn';
import Backdrop from './Components/Backdrop';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddBlog from './Pages/AddBlog';

// import { Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  const [filterCategories, setFilterCategories] = useState([])
  console.log(filterCategories)
  useEffect(() => {
    getRequest()
  }, []);



  const getRequest = () => {
    const response = axios.get('https://api.blog.redberryinternship.ge/api/categories')
      .then(res => {
        setFilterCategories(res.data.data)
      })
  }


  const [stateValue, setStateValue] = useState('');


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




  const updateStateValue = (newValue) => {
    setStateValue(newValue);
  };
  const router = createBrowserRouter([
    {
      path: '/', element:
        <Home
          stateValue={stateValue}
          filterCategories = {filterCategories}
        />
    },
    { path: '/AddBlog', element: <AddBlog updateStateValue={updateStateValue} /> },
  ])




  // const [isModalOpen, setModalOpen] = useState(false);
  // const useModal = () => setModalOpen(!isModalOpen);
  // const [isLogedIn, setIsLogedIn] = useState(false)

  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>

  );
}

export default App;

