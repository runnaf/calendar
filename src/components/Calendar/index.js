import moment from 'moment';
import styled from 'styled-components'
import { EventRendering } from '../EventRendering';

const List = styled('ul')`
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
`;

const Item = styled('li')`
        margin: 0 20px 20px 0;
        color: rgb(61, 59, 254);
        flex: 1;
        text-align: center;
`;

const Day = styled('p')`
        border-bottom: 2px solid rgb(61, 59, 254);
        padding: 0;
        font-size: 24px;
`

window.moment = moment;
moment.updateLocale('en', { week : { dow: 1 }});
const startDay = moment().startOf('week').startOf('day');
const endDay = moment().endOf('week').endOf('day');

const day = startDay.clone();
const calendar = []
day.window = day
endDay.window = endDay

while(endDay.isAfter(day)) {
  calendar.push(day.clone().format('MMMM Do dddd'));
  day.add(1, 'day')
}

const Calendar = () => {
  return <List>
    {calendar.map((day, index) => (
      (<Item key = { index }>
        <Day>{ day }</Day>
        <EventRendering />
      </Item>)
    ))}
  </List>
}

export { Calendar }