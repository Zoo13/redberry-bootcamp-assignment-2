
import "./SignIn.css"
import xMark from '../images/X.png'
import Circle from '../images/tick-circle.png'
import { useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";
import info from '../images/info-circle.png'
const SignIn = (props) => {

    const apiUrl = 'https://api.blog.redberryinternship.ge/api';
    const token = '6bbe5233359d1788031683979d1ab9577c7d2cb132abbbc30cdfd018a8636c3f'

    const handlePostRequest = (data) => {
        const postData = {
            'email': data
        }
        // Make a POST request using axios
        const response = axios.post('https://api.blog.redberryinternship.ge/api/login', postData,
            {
                headers: {
                    Authorization: `Bearer bd5ff44711be62294c3a7f9fde0b3230869ed7aa8905822b456cd3e8a8327eab`,
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                if (response.status < 205) {
                    setLogIn(true)
                    setIsvalid(true)
                } else {
                    setLogIn(false)
                    setIsvalid(false)
                }
            })
            .catch(err => {
                setLogIn(false)
                setIsvalid(false)
            });

    };

    const [logIn, setLogIn] = useState(false)

    const [mail, setMail] = useState('');

    const [isValid, setIsvalid] = useState(true)

    const LogIn = () => {
        if (mail.endsWith('@redberry.ge')) {
            handlePostRequest(mail)
        } else {
            setIsvalid(false)
        }

    }


    const validateUser = (element) => {
        setMail(element.target.value)
    }
    const changeStatus = () => {
        props.status()
        props.closeModal()
    }


    if (logIn == false) {
        return (
            <div className="SignIn-Window">
                <h1>შესვლა</h1>
                <img src={xMark} onClick={props.closeModal} className="xMark" />
                <div>
                    <h5>ელ-ფოსტა</h5>
                    <input
                        style={{
                            borderColor: !isValid && '#EA1919',
                            backgroundColor: !isValid && '#FAF2F3'
                        }}
                        placeholder="Example@redberry.ge"
                        onChange={validateUser} />

                        {!isValid  &&                     <div className='error'>
                        <img src={info} />
                        <p>ელ-ფოსტა არ მოიძებნა</p>
                    </div>}

                </div>
                <button onClick={LogIn} > შესვლა </button>
            </div>
        )
    } else {
        return (
            <div className="SignIn-Window signed">
                <img src={xMark} onClick={props.closeModal} className="xMark" />
                <div className="signed">
                    <img src={Circle} className="circle" />
                    <h2>წარმატებული ავტორიზაცია</h2>
                    <button onClick={changeStatus}> კარგი </button>
                </div>
            </div>
        )
    }

}

export default SignIn;