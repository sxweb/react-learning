import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function Person({name, surname, link}){
  return(
    <>
      <p>The persons name is {name}, surname - {surname}</p>
      Social link - <a href={link}>{name} {surname}</a>
    </>
  )
}

function PrintPersons(){
  return (
    <>
      <Person name="Yuriy" surname="Vozhagov" link="google.com"/>
      <Person name="Sam" surname="Jason" link="google.com"/>
      <Person name="Ann" surname="Smith" link="google.com"/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <PrintPersons />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
