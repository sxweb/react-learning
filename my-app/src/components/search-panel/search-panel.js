import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.updateSearch = this.updateSearch.bind(this);
    }
    
    updateSearch(e){
        const term = e.target.value;
        this.setState({term});
        this.props.updateSearch(term);
    }

    render(){
        return(
            <input
                className="form-control search-input"
                type="text"
                placeholder="search something"
                onChange = {this.updateSearch}
            />    
        )
    }
}

