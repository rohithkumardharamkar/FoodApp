import React from "react"
class UserClass extends React.Component
{
    constructor(props)
    {
        super(props)
        
        this.state={
            "c1":0,
            "c2":0
        }
        
    }
    componentDidMount()
    {
        console.log("child component did mount");
        
    }
    render()
    {
        console.log("child render");
        
        let {c1,c2}=this.state
        return(
            <div>
                <h2>Name : {this.props.name}</h2>
                <h3>Roll Number :{this.props.age}</h3>
                <h3>Age : {this.props.clg}</h3>
                <h3>count1 : {c1}</h3>
                <h3>count2 : {c2}</h3>
                <button onClick={()=>{this.setState({c1:this.state.c1+1,c2:this.state.c2+2})}}>Click here</button>
            </div>
        )

    }
}
export default UserClass
