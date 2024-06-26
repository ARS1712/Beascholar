import React from 'react';
import DocumentCard from './DocumentCard';

const DocumentList = () => {
  const documents = [
    { date: '28 Feb', time: '15:00' },
    { date: '28 Feb', time: '15:00' },
    // ... add more documents date & time attribute here, or other attribute
  ];

  const listStyle = {
    margin: '20px',
  };

  return (
    <div style={listStyle}>
      {documents.map((document, index) => (
        <DocumentCard key={index} date={document.date} time={document.time} />
      ))}
    </div>
  );
};

export default DocumentList;