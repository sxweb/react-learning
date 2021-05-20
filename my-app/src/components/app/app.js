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
            ],
            term: ''
        }
        this.deleteListItem = this.deleteListItem.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.addItem = this.addItem.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }
    updateSearch(term){
        this.setState({term});
    }
    onImportant(id){
        this.setState(({data}) =>{
            const index = data.findIndex((item) => item.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important}
            const newArray = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return{
                data:newArray
            }
        })
    }

    searchPost(items, term){
        if(term.length === 0){
            return items;
        }
        return items.filter((item) =>{
            return item.label.indexOf(term) > -1;
        })
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

    addItem(body){
        const newItem = {label: body, important: false, like: false, id: this.state.data.length + 1}
        this.setState(({data}) =>{
            const newArray = [...data, newItem];
            return {data: newArray}
        })
    }

    render(){
        const {data, term} = this.state;
        const liked = data.filter(item => item.like === true).length,
            allPosts = data.length;
        const visiblePosts = this.searchPost(data, term);
        return (
            
            <div className="app">
                <AppHeader
                liked = {liked}
                allPosts = {allPosts}/>
                <div className="d-flex search-panel">
                    <SearchPanel
                    updateSearch = {this.updateSearch}/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={visiblePosts}
                    deleteItem = {this.deleteListItem}
                    onImportant = {this.onImportant}
                    onLike = {this.onLike} />
                <PostAddForm
                    addItem = {this.addItem}/>
            </div>
        )
    }
}
