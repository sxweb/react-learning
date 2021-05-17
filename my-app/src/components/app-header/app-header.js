import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts})=>{
    return(
        <div className="app-header d-flex">
            <h1>Yuriy Vozhagov</h1>
            <h2>{allPosts} posts are here, {liked} liked</h2>
        </div>
    )
}

export default AppHeader;