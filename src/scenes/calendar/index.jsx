import { React, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListTextItem,
    Typography,
    useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

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
                `Are You Sure You Want To Delete The Event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="Full Calendar Interactive Page" />
            <Box>
                <Typography></Typography>
                <List>
                    <ListItem>
                        <ListItemText>
                            <Typography></Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
                <Box>
                    <FullCalendar>
                        
                    </FullCalendar>
                </Box>
        </Box>
    )
  
   
}

export default Calendar