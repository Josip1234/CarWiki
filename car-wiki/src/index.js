import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Car{
  constructor(name){
    this.brand=name;
  }
  present(){
    return 'I have a '+this.brand;
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

class Model extends Car{
  constructor(name,mod){
    super(name);
    this.model=mod;
  }
  show(){
    return this.present()+', it is a ' + this.model;
  }
}

const myCar = new Car("Ford");
const wcm=new Welcome("This is a page for auto enthusiasts. Similar to wikipedia, but for cars.");
const anothermsg=new Message(<h1>Welcome. I hope you will enjoy in our page.</h1>);

const welcome=<h1>This is a page for auto enthusiasts. Similar to wikipedia, but for cars.</h1>
const message=<p>Welcome. I hope you will enjoy in our page. </p>
const welc=wcm.message

const root = ReactDOM.createRoot(document.getElementById('root'));
const newCar=new Model("Ford","Mustang");

root.render(
  //myCar.brand
   //welc
   //anothermsg.message
   //myCar.present()
   newCar.show()
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
