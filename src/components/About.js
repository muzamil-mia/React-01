// import { Component } from "react";

import UserContext from "../utils/UserContext";

// export default function About() {
//   return(
//     <>
//       <h2>This is about</h2>

//     </>
//   )
// }
import { Component } from "react";
import User from "./User";
import User1 from "./User1";

class About extends Component {
  constructor(props) {
    console.log("parentconstructor got called");
    console.log(props);
    super(props);
    this.state = {
      count1: 0,
      count2: 1
    }
  }
  componentDidMount() {
    console.log("parent component didmount got called");
  }

  componentDidUpdate() {
    console.log("parent component didupdate got called");
  }
  componentWillUnmount() {
    console.log("parent componentWillunmount got called ");
  }

  render() {
    console.log("parent render got called");
    return (
      <div>
      <h2>{this.props.name}</h2>
      <h1>Count value: {this.state.count1}</h1>
      <button onClick={() => {this.setState({
        count1: this.state.count1 + 1,
        count2: this.state.count2+1
      })}}>update count</button>
      <User user = {"muzamil hussain"} id = {"10"}/>
      <User1 title = {"3 idiots"} hero = {"Amir khan"}/>
        {/* <UserContext.Consumer>
        //has a callback function which will get the data presenet in UserContext
          {(data) => <h2>{data.loggedInUser}</h2>}
        </UserContext.Consumer> */}
      </div>
    );
  }
}

export default About;
