import React  from 'react'
// import './styles/pageError.css'


const PageError =  ({ errorMessage }) => {
    return (
        <div>
            <h1>{errorMessage}</h1>
        </div>
    )

}
export default PageError