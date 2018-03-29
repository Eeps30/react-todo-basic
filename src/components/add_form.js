import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            newItem: '',
            newDetails: ''
        }
    }

    handleAddItem(e){
        e.preventDefault();

        console.log('New Item to Add: ', this.state);

        const {newItem, newDetails} = this.state;

        this.props.add({title: newItem, details: newDetails});

        this.setState({
            newItem: '',
            newDetails: ''
        })
    }
    
    
    render(){

        const { newItem, newDetails } = this.state;

        return (
            <form className="row" onSubmit={this.handleAddItem.bind(this)}>
                <div className="col s6">
                    <label>Title</label>
                    <input type="text" value={newItem} onChange={ e => this.setState({newItem: e.target.value}) }/>
                </div>
                <div className="col s6">
                    <label>Details</label>
                    <input type="text" value={newDetails} onChange={ e => this.setState({newDetails: e.target.value}) }/>
                </div>
                <div className="center">
                    <button className="btn grey-blue">Add Item</button>
                </div>
            </form>
        )
    }
}

export default AddItem