import { Component } from "react";
import styled from "styled-components";
import './index.css'

const ItemEvent = styled('li')`
        list-style-type: none;
        padding: 0;
        margin: 0;
        border-bottom: 1px solid rgb(61, 59, 254);
        color: rgb(61, 59, 254);
        font-size: 20px;
        text-align: start;
        margin-bottom: 25px;
`;

const ListEvent = styled('ul')`
        margin: 0;
        padding: 0;
`;

const Field = styled('input')`
        width: 100%;
        font-size: 16px;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid rgb(61, 59, 254);
        margin-bottom: 20px;
`;

const ButtonForm = styled('button')`
        border: none;
        background-color: rgb(255,208,218);
        width: 100%;
        color: rgb(61, 59, 254);
        font-size: 16px;
        font-weight: bold;
        padding: 5px 10px;
        box-sizing: border-box;
        cursor: pointer;
        margin: 0 0 40px 0
`

export class EventRendering extends Component {
  
  state = {
    userEvent: '',
    eventsList: [],
    toDo: true,
  }

  valueInput(value) {
    this.setState({userEvent: value});
  }

  isAdderEvent(eventUser) {
    if (eventUser === "") {return}
    else {
      let EventsArray = this.state.eventsList;
      EventsArray.push(eventUser)

      this.setState({ eventUser: EventsArray,
                      userEvent: ''})
    }
  }
  
  render() {
    return <form onSubmit={(e)=>{e.preventDefault()}}>
      <Field type="text" placeholder="enter an event" onChange={(e)=>{this.valueInput(e.target.value)}} value = { this.state.userEvent }/>
      <ButtonForm type="submit" onClick={()=>{this.isAdderEvent(this.state.userEvent)}}>Add event</ButtonForm>
      <ListEvent>
        {this.state.eventsList.map((eventItem, index) => (
          <ItemEvent toDo = {this.state.toDo} key={ index } onClick = {(e)=>{ e.target.classList.toggle('crossed') }}>{ eventItem }</ItemEvent>
        ))}
      </ListEvent>
    </form>
  }
}