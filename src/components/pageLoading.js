import React, { Component } from 'react'
import '../components/styles/pageLoading.css'
import Loader from './loader'

class PageLoading extends Component {
    render() {
        return (
            <div className="pageLoading">
                <Loader />
            </div>
        )
    }
}

export default PageLoading
