import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{
    
    

    render(){
        
        const {label, deleteItem, onLike, onImportant, like, important} = this.props;
        let classNames = 'app-list-item d-flex justify-content-between';
        if(important){
            classNames += ' important';
        }

        if(like){
            classNames += ' like';
        }

        return(
            <div className={classNames}>
                <span
                onClick = {onLike}
                className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={deleteItem}>
                            <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

