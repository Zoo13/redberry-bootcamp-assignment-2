import './BlogCard.css';
import arrowIcon from '../images/Arrow.png'
import walp from '../images/walpaper.png'
import logo from '../images/unsplash_01_igFr7hd4.png'

const BlogCard = (props) => {
    return (
        <div className='blog-card'>
            <div className='blog-img'>
                <img src={walp} />
            </div>
            <div className='Blog-body'>
                <h4> {props.author} </h4>
                <h6> {props.publish_date} </h6>
                <h2> {props.title} </h2>
                <div className='categories'>
                    {props.categories.map(each =>
                        <li
                            key={each.id}
                            style={{ backgroundColor: each.background_color, color: each.text_color }}
                        >{each.name}</li>
                    )}
                </div>
                <div className='description' >
                    <p> {props.description}</p>
                </div>
                <div className='see-more'>
                    სრულად ნახვა <img src={arrowIcon} alt="Arrow Icon" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard;