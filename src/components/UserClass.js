import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           userInfo:{
              login:"Dummy",
              avatar_url:"default"
           }

        }
        
    }

   async componentDidMount(){
        const data = await fetch("https://api.github.com/users/devanand21224-dotcom")
        const json = await data.json()
        console.log(json)

        this.setState({
            userInfo:json
        })
    }

    componentDidUpdate(){
        console.log("component did update called")
    }

    componentWillUnmount(){
        console.log("component will unmount called")
    }

    render() {
        const { name, location } = this.props
         const {login,avatar_url} =  this.state.userInfo
         debugger

        return (
            <>
                <h1> I am class based component  {name} ,{location}</h1> 
                <img src={avatar_url}/>
                <p>{login}</p>
            </>


        )
    }
}


export default UserClass;