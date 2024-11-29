import React from 'react';
import Table from './components/Table';
import './styles/main.css';

function App() {
  const dummyData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));

  return (
    <div className="App">
      <h1>Pagination Demo</h1>
      <Table data={dummyData} />
    </div>
  );
}

export default App;