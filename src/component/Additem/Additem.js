import React, {Component} from "react";         
import "./Additem.css"

class AddItems extends Component{
    state= {
        name:"",
        age: ''
    }

    handleChange= (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const nameValue = e.target.name.value;
        const ageValue = e.target.age.value;
        
        if (nameValue === "" || ageValue === "") {
          return false;
        } else {
          this.props.addItem({ name: nameValue, age: ageValue });
          this.setState({
            name: nameValue,
            age: ageValue
          });
        }
      };
      
      

render(){
        return(

                <div>
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter name.." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter age.." id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type="submit" value="Add" />
                    </form>
                </div>
        )

}
}

export default  AddItems;