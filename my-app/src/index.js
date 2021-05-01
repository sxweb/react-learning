import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './components/app'
import reportWebVitals from './reportWebVitals';
import './index.css';
//import './components/post-list-item/post-list-item.css';

class Person extends Component{

    constructor(props) {
        super(props);
        this.state = {
            years: 36
        }
        this.nextYear = this.nextYear.bind(this);
    }

    nextYear(){
        this.setState(state=>({
            years: ++state.years
        }))
    }

    render(){
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return(
            <>
                <button onClick={this.nextYear}>++</button>
                <h1>My name is {name}, surname - {surname}, years - {years}</h1>
                <a href={link}>Profile</a>
            </>
        )
    }
}

/*
function Person({name, surname, link}){
    return(
        <>
            <h1>My name is {name}, surname - {surname}</h1>
            <a href={link}>Profile</a>
        </>
    )
}
*/

const PersonList = ()=>{
    return(
        <>
            <Person name="Yuriy" surname="Vozhagov" link="google.com" />
            <Person name="Ann" surname="Jason" link="google.com" />
            <Person name="John" surname="Smith" link="google.com" />
        </>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <PersonList />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
