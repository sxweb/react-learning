import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css'



const App = ()=>{

    const data = [
        {label:"Going to learn React", important: true, id: 'dljl'},
        {label:"it is so good", important: false, id: 'sfne'},
        {label:"i need a break", important: false, id: 'rnfdl'},
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="d-flex search-panel">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </div>
    )
}

export default App;