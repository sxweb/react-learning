import React, {Component} from 'react';
import './post-list-item.css';

export default class PostListItem extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            important: false,
            like: false
        }

        this.changeImportant = this.changeImportant.bind(this);
        this.changeLike = this.changeLike.bind(this);
    }

    changeImportant(){
        this.setState(({important})=>({
            important: !important
        }))
    }

    changeLike(){
        this.setState(({like})=>({
            like: !like
        }))
    }

    render(){
        
        const {label} = this.props;
        const {important, like} = this.state;
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
                onClick = {this.changeLike}
                className="app-list-item-label">
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={this.changeImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    type="button" 
                    className="btn-trash btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

