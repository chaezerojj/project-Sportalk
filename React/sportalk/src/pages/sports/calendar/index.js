import React, { useState } from 'react';
import './Calendar.css';
import { kboSchedule } from './kboSchedule';

const schedule = [{kboSchedule}];

const Calendar = () => {
  const currentYear = 2024; 

  const [currentMonth, setCurrentMonth] = useState(7); 

  const handleMonthChange = (event) => {
    setCurrentMonth(parseInt(event.target.value));
  };

  const renderDays = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const startDayOfWeek = firstDayOfMonth.getDay(); 
    
    let dayCounter = 1;
    const weeks = [];

    
    for (let i = 0; i < 6; i++) {
      const days = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDayOfWeek) || dayCounter > daysInMonth) {
          days.push(
            <div key={`${i}-${j}`} className="empty-day"></div>
          );
        } else {
          const dayEvents = kboSchedule.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getMonth() + 1 === currentMonth && eventDate.getDate() === dayCounter;
          });
          days.push(
            <div key={`${i}-${j}`} className="day">
              <div className="date">{dayCounter}</div>
              {dayEvents.map((event, index) => (
                <div key={index} className="event">
                  {event.team1} vs {event.team2}
                </div>
              ))}
            </div>
          );
          dayCounter++;
        }
      }
      weeks.push(<div key={i} className="week">{days}</div>);
      if (dayCounter > daysInMonth) break;
    }

    return weeks;
  };

  return (
    <div className="calendar">
      <div className="header">
        <span className="year">{currentYear}년</span>
        <select
          value={currentMonth}
          onChange={handleMonthChange}
          className="month-select"
        >
          {Array.from({ length: 12 }, (_, index) => index + 1).map((month) => (
            <option key={month} value={month}>{month}월</option>
          ))}
        </select>
      </div>
      <div className="calendar-grid">
        <div className="week">
          <div className="week-day">일</div>
          <div className="week-day">월</div>
          <div className="week-day">화</div>
          <div className="week-day">수</div>
          <div className="week-day">목</div>
          <div className="week-day">금</div>
          <div className="week-day">토</div>
        </div>
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
