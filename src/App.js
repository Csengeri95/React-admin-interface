import React from "react"
import './App.css';
//import NewPerson from "./components/NewPerson";
import Roster from './components/Roster';




class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      participants:[{
        barcode:1515,
        name:"Danone",
        url:"https://www.pexels.com/hu-hu/foto/elelmiszer-desszert-edesseg-finom-874163/",
        description:"5% zsírtartalmú",
        price:400,
        stock:"5"
      }]
    }
  }


  componentDidMount(){
    const participants=localStorage.getItem("admin_interface")
  if(localStorage.getItem("admin_interface")!==null){
    const obj_participants=JSON.parse(participants);
    this.setState({participants:obj_participants})
  }
  
  }
  
  componentDidUpdate(){
    
    localStorage.setItem("admin_interface",JSON.stringify( this.state.participants))
    
  }



  render(){
    return(
      <div className="App bg-white">

        <div className="App-header">
          <h2>Admin felület</h2>
        </div>
        <Roster appReference={this} participants={this.state.participants} />
        
          
          
        
        

      </div>
    )
  }
}

export default App;
