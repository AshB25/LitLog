import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useSelector } from 'react-redux';

// import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

export default function Calendar() {
  const goals = useSelector((store) => store.goals);
  // formatting the goals to match calendar events
  const events = goals.map((goal) => ({
    title: goal.book_title,
    date: goal.deadline,
  }));

  return (
    <div class="calendar">
      {/* <div>{JSON.stringify(goals)}</div> */}
      <FullCalendar
        class="calendar"
        events={events}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </div>
  );
}
// import { Calendar } from '@fullcalendar/core';
// import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

// document.addEventListener('DOMContentLoaded', function() {
//   let draggableEl = document.getElementById('mydraggable');
//   let calendarEl = document.getElementById('mycalendar');

//   let calendar = new Calendar(calendarEl, {
//     plugins: [ interactionPlugin ],
//     droppable: true
//   });
//   calendar.render();

//   let draggable = new Draggable(draggableEl);

//   // when you're done...
//   draggable.destroy();
// });
