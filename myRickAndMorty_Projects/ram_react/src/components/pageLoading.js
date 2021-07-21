
import React from 'react'

const PageLoading = ({ loadingMessage }) => {
    return(
    <div class="ui active dimmer">
        <div class="ui text loader">{loadingMessage}</div>
    </div>
)

}

PageLoading.defaultProps = {
    message: 'Loading...'
}

export default PageLoading