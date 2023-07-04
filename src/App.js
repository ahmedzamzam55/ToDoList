import React, {Component}  from 'react';
import './App.css';
import Todoitems from './component/todoitem/Todoitem';
import AddItems from './component/Additem/Additem';

class  App extends Component{
  state={
   items: [
    {id:1,name:"hamza",age:22},
    {id:2,name:"mohmed",age:23},
    {id:3,name:"habdo",age:24}
  ]
}
// deleteItem=(id)=>{
  // let items=this.state.items;
  // let i=items.findIndex(item=>item.id===id)
  // items.splice(i,1)
  // this.setState({items:items})
   
  // or
  // let items=this.state.items.filter(item=>{
  //   return item.id !== id
  // })
  // this.setState({items:items})

  // or
  // deleteItem = (id) => {
  //   const updatedItems = this.state.items.map(item => {
  //     if (item.id === id) {
  //       return null; // Returning null will exclude the item from the updated array
  //     }
  //     return item;
  //   });
  
  //   const filteredItems = updatedItems.filter(item => item !== null);
  
  //   this.setState({ items: filteredItems });
  // }
  // or
  deleteItem = (id) => {
    const items = this.state.items;
    const updatedItems = [];
  
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        updatedItems.push(items[i]);
      }
    }
 
    this.setState({ items: updatedItems });

  }
  
  addItem =(item)=>{
    item.id=Math.random()
    let items=this.state.items;
    items.push(item);
    this.setState({items:items})
  }
  


  render(){
  return (
    <div className="App container">
      <h1 className='text-center'>To Do list</h1>
        <Todoitems itemss={this.state.items} deleteItem={this.deleteItem}/>
        <AddItems  addItem={this.addItem}/>
    </div>
  );
}
}

export default App;
