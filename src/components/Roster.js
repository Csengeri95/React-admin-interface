import React from "react";
import './Roster.css';
import Product from './Product';
import NewProduct from "./NewProduct";
import  "./NewProduct.css";




// Itt megcsinálom a dobozt amibe az adatokat teszem

class Roster extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
      showNewPerson: false,
        }
        this.handleClick=this.handleClick.bind(this);
       
        
        
    }


  handleClick(event){
    console.log(event);
    switch (event) {
      case "showNewPerson":
        this.setState({ showNewPerson: !this.state.showNewPerson });
        break;
        default:
        
        }
    
  }

  cancelSubmit = () => {
    this.setState({
        showNewPerson: !this.state.showNewPerson,
      });
  };
    


    render(){
        const { showNewPerson } = this.state;
        
      
        return(
            <div className="Roster">
              
                <div className="Roster-header"><h3>A termékek száma: {this.props.participants.length} db</h3> </div>

                <div className="Roster-table">
                    <div className="Roster-table-row">
                        <div className="Roster-table-head">Sorszám</div>
                        <div className="Roster-table-head">Vonalkód</div>
                        <div className="Roster-table-head">Termék neve</div>
                        <div className="Roster-table-head">URL címe</div>
                        <div className="Roster-table-head">Leírása</div>
                        <div className="Roster-table-head">Ára(Ft)</div>
                        <div className="Roster-table-head">Készlet(db)</div>
                        <div className="Roster-table-head">Kezelés</div>
                    </div>
                    {this.props.participants.map((person,index)=>{
                        return <Product appReference={this.props.appReference} key={index} person={person} index={index} delete={this.delete} />
                        
                    })}

                    
                </div>

                <button className="Roster-button" onClick={() => this.handleClick("showNewPerson")}>+ Új termék felvétele</button>

        
           {showNewPerson && < NewProduct appReference={this.props.appReference} cancelSubmit={this.cancelSubmit} />}
           
          
           
    
        

          </div>
        )
    }
}

export default Roster