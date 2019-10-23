//import Data from './Data';  this was gonna call in employee data
import InputGroup from 'react-bootstrap/InputGroup'
import React, {useState} from 'react';

const employeeProfile = [ 
  {firstName: "helen", lastName: "clarke", numPlate: "wk57 000", permitNum: 244, workPhone: 7800000000},
  {firstName: "hannah", lastName: "ruby", numPlate: "B055 000", permitNum: 300, workPhone: 798000000},
  {firstName: "vanessa", lastName: "tsang", numPlate: "RO65 000", permitNum: 100, workPhone: 76000000}];

const CardList = (props) =>(
  <div>
     {props.profile.map(profile => <Card {...employeeProfile} />)}
    
  </div>
);


class Card extends React.Component {
  render(){
    const profile = employeeProfile[0];//this.props; //employeeProfile data
    return(
      <div className="employee-profile">
        details...
        <div className="info">
          <div className="firstName">{profile.firstName}</div>
          <div className="lastName">{profile.lastName}</div>
          <div className="workEmail">{profile.workEmail}</div>
          <div className="workPhone">{profile.workPhone}</div>
          <div className="workSkype">{profile.workSkype}</div>
          <div className="numPlate">{profile.numPlate}</div>
          <div className="permitNum">{profile.permitNum}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  //firstNameInput = React.createRef();   //tried searching the input bar for firstName. 
  state = {firstName: ''};
  handleSubmit = (event) => {
    event.preventDefault();//prevents page refreshing might not need this
    console.log(
      //this.firstNameInput.current.value
    )
  };
  render () {
    return (
      <form onSubmit={}>
        <input 
          type="text" 
          value={this.state.firstName}
          onChange={event => this.setState({ useName: event.target.value })}
          placeholder='name/reg plate/permit'
          //ref={this.firstName}
          required
          />
        <button>search</button>
        
      </form>
    )
  }
}
//drop down menu input bar just need to work out what part i need and where to put it.
/*<InputGroup className="mb-3">
          <DropdownButton
              as={InputGroup.Prepend}
              variant="outline-secondary"
              title="Dropdown"
              id="input-group-dropdown-1">
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>*/

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      profile: employeeProfile,
    };
  }
  render(){
    
    return (
      <div>
      <div className="header">{this.props.title}</div>
      <Form />
      <CardList profile={this.state.profile}/>
    </div>
    );
  }

}
export default App; 

//
// {/* import React, { useState } from 'react';
// export default function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       Track the Vehicle/Vehicle Owner
//       <br />
//       <br />
//       Here is a button that will track
//       how many times you click it:
//       <br />
//       <br />
//       <button onClick={() => setCount(count + 1)}>{count}</button>
//     </div>
//   ); */}