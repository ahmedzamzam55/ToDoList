import React from "react";
import "./tTodoitem.css"

const Todoitems=(props)=>{
    const {itemss,deleteItem}= props;
    let lengthj= itemss.length;

    const listItems= lengthj ?(
        itemss.map(item =>{
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
        ) : (
            <div>there is no item to show</div>
        )
    
    return (
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="age  title">Age</span>
                <span className="action title">Action</span>
            </div>
                {listItems}            
        </div>
    )

}
export default Todoitems;