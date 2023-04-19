import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Car{
  constructor(name){
    this.brand=name;
  }
}

class Welcome{
  constructor(msg){
    this.message=msg;
  }
}
class Message{
  constructor(mess){
    this.message=mess;
  }
}

const myCar = new Car("Ford");
const wcm=new Welcome("This is a page for auto enthusiasts. Similar to wikipedia, but for cars.");
const anothermsg=new Message(<h1>Welcome. I hope you will enjoy in our page.</h1>);

const welcome=<h1>This is a page for auto enthusiasts. Similar to wikipedia, but for cars.</h1>
const message=<p>Welcome. I hope you will enjoy in our page. </p>
const welc=wcm.message

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  //myCar.brand
   //welc
   //anothermsg.message
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
