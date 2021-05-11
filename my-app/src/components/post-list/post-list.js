import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts, deleteItem})=>{

    const elements = posts.map((element) =>{
        
        const {id, ...itemProps} = element;
        
        return(
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemProps}
                    deleteItem={()=>deleteItem(id)}
                    /*label = {element.label}
                    important = {element.important}*/
                />
            </li>
        )
    });

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;