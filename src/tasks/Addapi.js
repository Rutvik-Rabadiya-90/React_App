import axios from 'axios';
import React from 'react';
class Addapi extends React.Component {
    constructor(props){
        super(props);
        this.state={ };
    }
    sendData()
    {
        var myfrom = new FormData();
        myfrom.append("todo_title",this.state.txt1);
        myfrom.append("todo_details",this.state.txt2);
        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myfrom)
        .then(res=>{
            console.log(res);
            if(res.data.flag==="1")
            {
                alert("Record Added" + res.data.message); 
            }else
            {
                alert(res.data.message)
            }
        })
    }
    render() {
        return (
            <>
            Title: <input type='text' onChange={(e)=>this.setState({'txt1':e.target.value})}/>
            Details: <input type='text' onChange={(e)=>this.setState({'txt2':e.target.value})}/>
            <input type='button' value="ClickMe" onClick={this.sendData.bind(this)}/>
            </>
        ); 
    
    }
    
}
export default Addapi;