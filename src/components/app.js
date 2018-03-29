import React, {Component} from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import List from './list';
import AddForm from './add_form';
import listData from '../data/todo_items';


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            list: listData
        }

        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(item){
        this.setState({
            list: [...this.state.list, item]
        })
    }

    deleteItem(index){
        const newList = [...this.state.list];

        newList.splice(index, 1);

        this.setState({
            list: newList
        })
    }
    
    render(){
        return(
            <div>
                <div className="container">
                    <h1 className="center">To Do list</h1>
                    <AddForm add={this.addItem}/>
                    <List delete={this.deleteItem} list={this.state.list}/>
                </div>
            </div>
        )
    }
    
};

export default App;
