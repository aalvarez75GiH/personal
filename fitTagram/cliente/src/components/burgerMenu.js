import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCameraRetro, faBars  } from '@fortawesome/free-solid-svg-icons'

const BurgerMenu = () => {
    return (
        <React.Fragment>
            <li className="Nav__link-margin-right">
                <Link to="/" className="Nav__link">
                    <FontAwesomeIcon icon={faBars} />
                </Link>
            </li>
        </React.Fragment>
    )
}

export default BurgerMenu