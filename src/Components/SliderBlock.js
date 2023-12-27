import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import nextArrow from '../images/Next.png';
import prevArrow from '../images/Prev.png';
import BlogCard from './BlogCard';

import './SliderBlock.css'

const SliderBlock = (props) => {

    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide] = useState(3);

    useEffect(() => {
        if (sliderRef.current.props.children.length <= 3) {
            setNoWayNext(true)
        }
    }, []);

    const [noWayPrev, setNoWayPrev] = useState(true);
    const [noWayNext, setNoWayNext] = useState(false);


    const handleNext = () => {
        if (currentSlide == sliderRef.current.props.children.length - 1) {
            setNoWayNext(true)
        }
        if (currentSlide < sliderRef.current.props.children.length) {
            setCurrentSlide(prev => {
                return (prev + 1)
            })
            sliderRef.current.slickNext();
            setNoWayPrev(false)
        }
    };

    const handlePrev = () => {
        if (currentSlide <= 4) {
            setNoWayPrev(true)
        }
        if (currentSlide > 3) {
            setCurrentSlide(prev => {
                return (prev - 1)
            })
            sliderRef.current.slickPrev();
            setNoWayNext(false)
        }
    };

    const settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: false,
    };


    return (
<div className='slider'>
                <div className='slider-header'>
                    <h2> მსგავსი სტატიები  </h2>
                    <div className='arrows'>
                        <div onClick={handlePrev} className={`prevArrow ${noWayPrev ? 'noWay' : ''}`}>
                            <img src={prevArrow} />
                        </div>
                        <div onClick={handleNext} className={`nextArrow ${noWayNext ? 'noWay' : ''}`}>
                            <img src={nextArrow} />
                        </div>
                    </div>

                </div>
                <div className='slide'>
                    <Slider ref={sliderRef} {...settings}>
                        {props.data.map(blog => (
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
                    </Slider>
                </div>
            </div>
    )
}

export default SliderBlock;
