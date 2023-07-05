import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const handleDateClick = (selected) => {
  const title = prompt("Please enter a new title for your event");
  const calendarApi = selected.view.calendar;
  calendarApi.unselect();

  if (title) {
    calendarApi.addEvent({
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
  }
};

const handleEventClick = (selected) => {
  if (
    window.confirm(
      `Are you sure you want to delete the event '${selected.event.title}'`
    )
  ) {
    selected.event.remove();
  }
};



export default class DemoApp extends React.Component {
  render() {
    return (
      <Box flex="1 1 100%" ml="15px">
      <FullCalendar
        height="75vh"
        plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin ]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        // events={[
        //   { title: 'event 1', date: '2023-06-05' },
        //   { title: 'event 2', date: '2019-05-06' }
        // ]}
      />
      </Box>
    )
  }
  handleDateClick = (arg) => { // bind with an arrow function
    alert(arg.dateStr)
  }
}