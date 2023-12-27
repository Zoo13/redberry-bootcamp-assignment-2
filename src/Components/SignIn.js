
import "./SignIn.css"
import xMark from '../images/X.png'
import Circle from '../images/tick-circle.png'
import { useState } from "react"
const SignIn = (props) => {

    const [logIn , setLogIn ] = useState(false)

    if(logIn == false) {
        return (
            <div className="SignIn-Window">
                <h1>შესვლა</h1>
                <img src={xMark} onClick={props.closeModal} className="xMark" />
                <div>
                    <h5>ელ-ფოსტა</h5>
                    <input  placeholder="Example@redberry.ge"/> 
                </div>
                <button > შესვლა </button>
            </div>
        )
    }else {
        return (
            <div className="SignIn-Window signed">
                <img src={xMark} onClick={props.closeModal} className="xMark"/>
                <div className="signed">
                    <img src={Circle} className="circle"/>
                    <h2>წარმატებული ავტორიზაცია</h2>
                    <button onClick={props.closeModal}> კარგი </button>
                </div>
            </div>
        )
    }

}

export default SignIn;