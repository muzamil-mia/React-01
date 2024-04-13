import React from "react";

class User extends React.Component{
  constructor(props) {
    console.log("child1 constructor got called");
    super(props)
    this.state = {
      count1: 0,
      count2: 1
    }
  }

  componentDidMount() {
    console.log("child1 component did mount got called");
  }

  componentDidUpdate(){
    console.log("child1 component didupdate got called");
  }


  render() {
    console.log("child1 render got called");
    return(
      <div className="border border-red-500 w-96 m-2">
      <h1>{this.props.user}</h1>
      <h1>{this.props.id}</h1>
      <button className="border border-black p-2" onClick={() => {this.setState({
        count1: this.state.count1 + 1,
        count2: this.state.count2+1
      })}}>update count</button>
      <h1>{this.state.count1}</h1>
      </div>
    )
  }
}

export default User