import React, {Component} from 'react';
import './post-status-filter.css';

export default class PostStatusFilter extends Component{

    constructor(props){
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Likes'}
        ]
    }

    render(){

        
        const buttons = this.buttons.map(({name, label}) =>{
            const {filter, changeFilter} = this.props;
            const buttonClass = (filter === name)? 'btn-info': 'btn-outline-secondary';
            return(
                <button 
                key={name} 
                type='button' 
                className={`btn ${buttonClass}`}
                onClick = {()=>changeFilter(name)}>{label}</button>
            )
        })

        return(
            
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

