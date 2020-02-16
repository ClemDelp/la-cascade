import React from "react";

export default function Disponibility() {
  return (
    <div className='center flex justify-center' style={{width: '100%'}}>
      <iframe
        src="http://calendar.google.com/calendar/embed?src=svn6jt10cme9kucd66kc63f7rc%40group.calendar.google.com&ctz=Europe%2FParis"
        style={{border: 0}}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
      />
    </div>
  );
}
