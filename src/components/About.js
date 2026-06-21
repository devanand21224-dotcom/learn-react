import UserClass from "./UserClass";
import React from "react";

//  const About = () =>{
//     return (
//         <div>
//             <h2>I am about</h2>
//             <UserClass name = {"I am 1st instence from about on class"} location ={"GKP"}  />

//         </div>
//     )
//  }

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor called")
    }


    componentDidMount(){
       console.log("parent mount")
    }


    render() {
        console.log("parent render")
        return (
            <div>
                <h2>I am about</h2>
                <UserClass name={"I am 1st instence from about on class"} location={"GKP"} />
                <UserClass name={"I am 2nd instence from about on class"} location={"Noida"} />
            </div>
        )
    }
}

export default About;



