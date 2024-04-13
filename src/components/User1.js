import React from "react";

class User1 extends React.Component{
  constructor(props) {
    console.log("child2 constructor got called");
    super(props)
  }

  componentDidMount() {
    console.log("child2 component did mount got called");
  }


  render() {
    console.log("child2 render got called");
    return(
      <div className="border border-black w-96 m-2">
      <h1>{this.props.title}</h1>
      <h1>{this.props.hero}</h1>
      </div>
    )
  }
}

export default User1