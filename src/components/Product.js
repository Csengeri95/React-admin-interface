import React from "react";
import './Product.css';
import saveConditions from "../utils/SaveConditions";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai";
import { Button, Modal } from "react-bootstrap"


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            show: false,


        }
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this)
        this.deleteConfirm = this.deleteConfirm.bind(this)

    }


    delete(event) {

        this.setState({ show: true })


    }
    deleteConfirm(event) {
        this.props.appReference.state.participants.splice(this.props.index, 1)
        this.props.appReference.forceUpdate()
        this.setState({ show: false })
    }

    edit(event) {
        event.preventDefault();
        const person = {
            barcode: event.target.barcode.value,
            name: event.target.name.value,
            url: event.target.url.value,
            description: event.target.description.value,
            price: event.target.price.value,
            stock: event.target.stock.value
        }

        if (saveConditions(person)) {
            this.setState({ edit: false });
            this.props.appReference.state.participants[this.props.index] = person;
            this.props.appReference.forceUpdate()
        }
    }

    editRender(event) {
        return <form onSubmit={this.edit} className="Roster-table-row">
            <div className="Roster-table-cell">{this.props.index+1}</div>
            <div className="Roster-table-cell"><input name="barcode" defaultValue={this.props.person.barcode} /></div>
            <div className="Roster-table-cell"><input name="name" defaultValue={this.props.person.name} /></div>
            <div className="Roster-table-cell"><input name="url" defaultValue={this.props.person.url} /></div>
            <div className="Roster-table-cell"><input name="description" defaultValue={this.props.person.description} /></div>
            <div className="Roster-table-cell"><input name="price" defaultValue={this.props.person.price} /></div>
            <div className="Roster-table-cell"><input name="stock" defaultValue={this.props.person.stock} /></div>

            <div className="Roster-table-cell">
                <button type="submit" className="Roster-table-check" title="Kész"><AiOutlineCheck /></button>
                <button onClick={() => { this.setState({ edit: false }) }} className="Roster-table-cancel" title="Mégsem"><AiOutlineCloseCircle /></button>
            </div>




        </form>
    }


    render() {

        if (this.state.edit) {
            return this.editRender()
        }

        return (

            <div className="Roster-table-row">
                <div className="Roster-table-cell">{this.props.index + 1}</div>
                <div className="Roster-table-cell">{this.props.person.barcode}</div>
                <div className="Roster-table-cell">{this.props.person.name}</div>
                <div className="Roster-table-cell" >{this.props.person.url}</div>
                <div className="Roster-table-cell">{this.props.person.description}</div>
                <div className="Roster-table-cell">{this.props.person.price}</div>
                <div className="Roster-table-cell">{this.props.person.stock}</div>
                <div className="Roster-table-cell">
                    <button onClick={this.delete} className="Roster-table-delete" title="Törlés"><AiOutlineDelete /></button>
                    <button onClick={() => { this.setState({ edit: true }) }} className="Roster-table-edit" title="Szerkesztés"><AiOutlineEdit /></button>

                </div>


                <Modal show={this.state.show}>
                    <Modal.Body className="text-center fs-4">Biztosan törölni szeretné az adott tételt ?</Modal.Body>
                    <Modal.Footer>
                        <div className=" d-grid gap-2 col-4 mx-auto">
                            <Button onClick={() => { this.setState({ show: false }) }}>Mégsem</Button>
                            <Button className="btn-danger" onClick={this.deleteConfirm}>Törlés</Button>
                        </div>
                    </Modal.Footer>
                </Modal>

            </div>



        )
    }
}



export default Product