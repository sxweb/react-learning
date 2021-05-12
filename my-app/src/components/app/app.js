import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css'



export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label:"Going to learn React", important: true, id: 0},
                {label:"it is so good", important: false, id: 1},
                {label:"i need a break", important: false, id: 2},
            ]
        }
        this.maxIndex = 4;
        this.deleteListItem = this.deleteListItem.bind(this);
        this.addListItem = this.addListItem.bind(this);
    }

    deleteListItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            return{
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }
        });
    }

    addListItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxIndex++
        }
        this.setState(({data}) => {
            return{
                data: [...data, newItem]
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppHeader/>
                <div className="d-flex search-panel">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    deleteItem = {this.deleteListItem} />
                <PostAddForm
                    addItem = {this.addListItem}/>
            </div>
        )
    }
}
