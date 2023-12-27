

import './Blog.css'
import MainBlog from './MainBlog';
import SliderBlock from '../Components/SliderBlock'


const Blog = (props) =>{
    return (
        <div className='blog'>
            <MainBlog data={props.data} />
            <SliderBlock data ={props.data} />
        </div>
    )
}


export default Blog;