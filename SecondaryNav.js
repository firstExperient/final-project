import react from 'react';
import {Link} from 'react-router-dom'

export default function SecondaryNav(){
    return <div id='secondaryNav'>
         <ul id="s-nav-list">
            <li className='s-nav-item'><Link to="/favorites">מועדפים</Link></li>
            <li className='s-nav-item'><Link to="/whats-new">פוסטים חדשים</Link></li>
            <li className='s-nav-item'><Link to="/most-popular">פוסטים פופולאריים</Link></li>
         </ul>
    </div>
}