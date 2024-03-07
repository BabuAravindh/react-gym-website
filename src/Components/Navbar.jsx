import './Navbar.css'
import logo from '../images/logo.png'
import {Link,NavLink} from 'react-router-dom'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
const Navbar = () => {
    const[isNAvShowing,setIsNavShowing] = useState(false);



  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='logo' onClick={()=> setIsNavShowing(false)}>
                <img src={logo} alt="Nav logo" />
            </Link>
            <ul className={`nav_links ${isNAvShowing ? `show_nav` : 'hide_nav'}`}>
                {
                    links.map(({name,path},index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}
                                onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNAvShowing ? <MdOutlineClose/> : <FaBars/>
                }
               
            </button>
        </div>
    </nav>
  )
}

export default Navbar
