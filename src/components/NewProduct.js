import React from "react";
import './NewProduct.css';
import SaveConditions from "../utils/SaveConditions";





class NewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={};
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const person={
            barcode:event.target.barcode.value,
            name:event.target.name.value,
            url:event.target.url.value,
            description:event.target.description.value,
            price:event.target.price.value,
            stock:event.target.stock.value,

        }

        if(SaveConditions(person)){
            this.props.appReference.setState(prevState=>({
                participants:[...prevState.participants,person]
            }))
        }

        event.target.reset()
    }


    render(){
        
        return(
            <div className="NewProduct bg-secondary">
                <form onSubmit={this.onSubmit}>
                    <label className="NewProduct-label">
                        <div className="NewProduct-title">Vonalkód</div>
                        <input className="NewProduct-input" type="number" name="barcode" placeholder="Vonalkód" autoComplete="off" />
                    </label>

                    <label className="NewProduct-label">
                    <div className="NewProduct-title">Termék neve</div>
                        <input className="NewProduct-input" type="text" name="name" placeholder="Termék neve" autoComplete="off" />
                    </label>

                    <label className="NewProduct-label">
                    <div className="NewProduct-title">URL címe</div>
                        <input className="NewProduct-input" type="text" name="url" placeholder="URL címe" autoComplete="off" />
                    </label>

                    <label className="NewProduct-label">
                    <div className="NewProduct-title">Leírás</div>
                        <input className="NewProduct-input" type="text" name="description" placeholder="Leírás" autoComplete="off" />
                    </label>

                    <label className="NewProduct-label">
                    <div className="NewProduct-title">Ára</div>
                        <input className="NewProduct-input" type="number" name="price" placeholder="Ft" autoComplete="off" />
                    </label>

                    <label className="NewProduct-label">
                    <div className="NewProduct-title">Készlet</div>
                        <input className="NewProduct-input" type="number" name="stock" placeholder="Db" autoComplete="off" />
                    </label>

                    <button type="submit" className="NewProduct-button">Küldés</button>
                    <button type="button" className="NewProduct-button-cancel" onClick={this.props.cancelSubmit}>Mégsem</button>
                    
                </form>
            </div>
        )
    }
}


export default NewProduct