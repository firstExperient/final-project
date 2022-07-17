import react from 'react';
import {Link} from 'react-router-dom'

export default function MainNav(){
    return <div id='mainNav'>
        <Link to="/search"> <button id="searchBtn">חיפוש</button></Link>
         <span>name</span>
         <Link to="/sign-up"><button id="signUpBtn">sign up</button></Link>
         <Link to="/create-post"><button id="createPostBtn">פוסט חדש</button></Link>
    </div>
}