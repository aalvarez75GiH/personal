import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCameraRetro  } from '@fortawesome/free-solid-svg-icons'
import { faCompass, faUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import useEsMobil from '../hooks/useEsMobil'
import BurgerMenu from './burgerMenu'


const Nav = ({ user }) => {
    const esMobil = useEsMobil()
    
    return (
    <nav className="Nav">
        <ul className="Nav__links">
        { esMobil && (
            <BurgerMenu/>
        )}
        
        { !esMobil && (
            <li>
                <Link to="/" className="Nav__link">
                    FitTagram
                </Link>
            </li>
         
        )}
        { (user && !esMobil) && <AuthenticatedIcons user={ user }/> }  
        </ul>
    </nav>
    
)
}

const AuthenticatedIcons = ({user}) => {
    return (
        <React.Fragment>
            <li className="Nav__link-push">
                <Link to="/upload" className="Nav__link">
                    <FontAwesomeIcon className="Nav__icon" icon={faCameraRetro}/>
                </Link>
            
            </li>
            <li className="Nav__link-margin-left">
                <Link to="/explore" className="Nav__link">
                    <FontAwesomeIcon className="Nav__icon" icon={faCompass}/>
                </Link>
            </li>
            <li className="Nav__link-margin-left">
                <Link to={`/profile/${user.username}`} className="Nav__link">
                    <FontAwesomeIcon className="Nav__icon" icon={faUser}/>
                </Link>
            </li>

        </React.Fragment>
    )
}
export default Nav