import React  from 'react'
import {Link} from 'react-router-dom'
import Badge from '../components/badge'
import '../pages/styles/badgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import DeleteBadgeModal from '../components/deleteBadgeModal'

 
function BadgeDetails (props) {
   
    const badge = props.badge
    console.log(badge)
    return (
        <React.Fragment>
        <div className="badgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={ confLogo } alt=""/>
                        </div>
                        <div className="col-6 badgeDetails__hero-attendant-name">
                            <h1>{badge.firstName}{badge.lastName}</h1>
                        </div>
                    </div>
                </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge 
                        firstName={badge.firstName} 
                        lastName={badge.lastName} 
                        job={badge.jobTitle} 
                        twitter={badge.twitter }
                        email={badge.email}/> 
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <div>
                            <Link className="btn btn-primary mb-4" to={`/badge/${badge.id}/edit`}>Edit</Link>
                        </div>
                        <div>
                            <button onClick={ props.onOpenModal }  className="btn btn-danger">Delete</button>
                            <DeleteBadgeModal
                              isOpen={props.modalIsOpen}
                              onClose={props.onCloseModal}
                              onDeleteBadge={props.onDeleteBadge}
                            />                           
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        </React.Fragment>
       
    )
}

export default BadgeDetails






