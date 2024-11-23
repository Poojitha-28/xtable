import React, { useState } from 'react';

const ArticleTable = () => {
  // Sample data
  const initialData = 
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ];
  
  
  // Use useState to manage sorted data
  const [data, setData] = useState(initialData);

  // Function to sort by Date
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date)); // Ascending date order
    setData(sortedData);
  };

  // Function to sort by Views
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => a.views - b.views); // Ascending views order
    setData(sortedData);
  };

  return (
    <div>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <h1>Date and Views Table</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Date</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Views</th>
            <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.date}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.views}</td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
