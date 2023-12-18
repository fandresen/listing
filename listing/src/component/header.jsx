import {Component} from 'react';
import './header.css'

   class Header extends Component{
 render() {

   return(
       <nav className=" navbar navbar-expand-lg navbar-light headerBg pt-3 pb-3 fixed-top">
        <a href="#" className='navbar-brand ms-5'>Listing</a>
        <ul className='navbar-nav  ms-auto me-5'>
            <li className='nav-item me-5'> <a href="#cat" className='nav-link'>CAT</a></li>
            <li className='nav-item me-5'> <a href="#legume" className='nav-link'>LEGUME</a></li>
            <li className='nav-item me-5'> <a href="#user" className='nav-link'>USERS</a></li>
        </ul>
         
       </nav>

)
}
}
export {Header}