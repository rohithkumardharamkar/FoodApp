import UserClass from "./userClass"
import React from "react"
class About extends React.Component 
{
    constructor(props)
    {
        super(props)
        console.log("parent constructor");
        
    }
    componentDidMount()
    {
        console.log("parent Component did mount");
        
    }
    render()
    {
        console.log("parent render");
        
        return(<>
            <UserClass name={"raju"} age={"my age is 22"} clg={"siiet"}/>
            <UserClass name={"ram"} age={"my age is 22"} clg={"siiet"}/>

            </>)
    }
}


export default About