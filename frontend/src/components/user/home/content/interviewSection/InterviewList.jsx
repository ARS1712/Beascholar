import React from 'react';
import InterviewCard from './InterviewCard';

const InterviewList = () => {
  const interviews = [
    { date: '28 Feb', time: '15:00' },
    { date: '28 Feb', time: '15:00' },
    // ... add more interviews attribute here
  ];

  const listStyle = {
    margin: '20px',
  };

  return (
    <div style={listStyle}>
      {interviews.map((interview, index) => (
        <InterviewCard key={index} date={interview.date} time={interview.time} />
      ))}
    </div>
  );
};

export default InterviewList;
