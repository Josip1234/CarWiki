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
    manufacturerName=()=>this.brand;
}

class Model extends Car{
  constructor(name,mod){
    super(name);
    this.model=mod;
  }
  show(){
    return this.present()+', it is a ' + this.model;
  }
  modelName=()=>this.model;
  carInformation=(model) => "Can you tell me manufacturer of this model?" + this.model+" Manufacturer of that model is "+this.manufacturerName();
}


class Welcome{
  constructor(msges){
    this.message=msges;
  }
  welcomeWagon(){
     return this.message;
  }

  dateAndTime=()=>{
    return "20.04.2023. 21:29";
  }
}
class Message extends Welcome{
  constructor(msg,mess){
    super(msg);
    this.messag=mess;
  }
  showMessage(){
return this.welcomeWagon()+' '+this.messag;
  }
  spacingBetweenLines=function(){
  return <br/>;
}
messageSentAt=()=>"20.04.2023. 21:31";

}

class User{
  constructor(nickname,dateOfBirth){
    this.nick=nickname;
    this.dofb=dateOfBirth;
  }
  updateNickname=update=>"Do you really want to change your nickname?"+update;
}



const myCar = new Car("Ford");
const wcm=new Welcome("This is a page for auto enthusiasts. Similar to wikipedia, but for cars.");
const anothermsg=new Message(<h1>Welcome. I hope you will enjoy in our page.</h1>);

const welcome=<h1>This is a page for auto enthusiasts. Similar to wikipedia, but for cars.</h1>
const message=<p>Welcome. I hope you will enjoy in our page. </p>
const welc=wcm.message

const root = ReactDOM.createRoot(document.getElementById('root'));
const newCar=new Model("Ford","Mustang");


const welco=new Welcome("This is a page for auto enthusiasts. Similar to wikipedia, but for cars.");
const newMessage= new Message("This is a page for auto enthusiasts. Similar to wikipedia, but for cars.","Welcome. I hope you will enjoy in our page.");

const newModel=new Model("Mercedes-benz","Slr Mclaren");

const user = new User("Jobo","05.11.1992.")

root.render(
  //myCar.brand
   //welc
   //anothermsg.message
   //myCar.present()
   //newCar.show()
   //newMessage.showMessage()
   //newMessage.spacingBetweenLines
   //wcm.dateAndTime()
   //newMessage.messageSentAt()
   //newModel.carInformation(newModel.modelName())
   user.updateNickname("Yes")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
