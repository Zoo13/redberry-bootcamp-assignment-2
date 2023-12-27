import './MainBlog.css'
import walp from '../images/walpaper.png'

import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogCard from '../Components/BlogCard';

import nextArrow from '../images/Next.png';
import prevArrow from '../images/Prev.png';
import backArrow from '../images/Back.png'

const MainBlog = (props) => {
console.log(props)
    // const sliderRef = useRef();
    // const [currentSlide, setCurrentSlide] = useState(3);

    // useEffect(() => {
    //     if (sliderRef.current.props.children.length <= 3) {
    //         setNoWayNext(true)
    //     }
    // }, []);

    // const [noWayPrev, setNoWayPrev] = useState(true);
    // const [noWayNext, setNoWayNext] = useState(false);


    // const handleNext = () => {
    //     if (currentSlide == sliderRef.current.props.children.length - 1) {
    //         setNoWayNext(true)
    //     }
    //     if (currentSlide < sliderRef.current.props.children.length) {
    //         setCurrentSlide(prev => {
    //             return (prev + 1)
    //         })
    //         sliderRef.current.slickNext();
    //         setNoWayPrev(false)
    //     }
    // };

    // const handlePrev = () => {
    //     if (currentSlide <= 4) {
    //         setNoWayPrev(true)
    //     }
    //     if (currentSlide > 3) {
    //         setCurrentSlide(prev => {
    //             return (prev - 1)
    //         })
    //         sliderRef.current.slickPrev();
    //         setNoWayNext(false)
    //     }
    // };

    // const settings = {
    //     infinite: false,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     draggable: false,
    // };

    return (
        <div className='main-blog-page'>
            <div className='Main-blog'>
                <div className='back-arrow'>
                    <img src={backArrow} />
                </div>
                <div className='Main-blog-img'>
                    <img src={walp} />
                </div>
                <div className='Main-Blog-body'>
                    <h4> ლილე კვარაცხელია </h4>
                    <h6> გამოქვეყნების თარიღი </h6>
                    <h2> მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია </h2>
                    <div className='Main-blog-categories'>
                        
                    </div>
                    <div className='Main-blog-description' >
                        <p> 6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა.
                            რა თქმა უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი შეაჯიბრონ ერთმანეთს.
                            აქვე საგულისხმოა, რომ როგორც ბერნის მეცნიერები განმარტავენ, ექსპერიმენტს საფუძვლად არა ყველის გაუმჯობესებული წარმოება, არამედ კულტურული საკითხები დაედო. მათი თქმით, ადამიანებს უყვართ ყველი და მუსიკა, ამიტომაც საინტერესოა ამ ორის კავშირის დანახვა.</p>
                    </div>
                </div>
            </div>
            {/* <div className='slider'>
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
            </div> */}

        </div>
    )
}


export default MainBlog;