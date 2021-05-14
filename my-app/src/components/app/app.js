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
                {label:"Going to learn React", important: true, like: false, id: 'dljl'},
                {label:"it is so good", important: false, like: false, id: 'sfne'},
                {label:"i need a break", important: false, like: false, id: 'rnfdl'},
            ]
        }
        this.deleteListItem = this.deleteListItem.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant(id){
        console.log('important');
    }

    onLike(id){
        this.setState(({data}) =>{
            const index = data.findIndex((item) => item.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like}
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return{
                data:newArray
            }
        })
    }

    deleteListItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            return{
                data: [...data.slice(0, index), ...data.slice(index + 1)]
            }
        });
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
                    deleteItem = {this.deleteListItem}
                    onImportant = {this.onImportant}
                    onLike = {this.onLike} />
                <PostAddForm/>
            </div>
        )
    }
}
