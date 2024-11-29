import React, { useState } from 'react';
import Pagination from './Pagination';

const Table = ({ data, isLoading }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  if (error) {
    return (
      <div className="error-container">
        <h3>Something went wrong</h3>
        <p>{error.message}</p>
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  if (data.length === 0) {
    return (
      <div className="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p>No data available</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      {isLoading ? (
        <div className="loading-spinner" />
      ) : (
        <>
          <table className="modern-table">
            <thead>
              <tr className="table-header">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {getCurrentPageData().map((item) => (
                <tr className="table-row" key={item.id}>
                  <td>#{item.id.toString().padStart(4, '0')}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <span className={`status-badge ${item.id % 2 === 0 ? 'status-active' : 'status-pending'}`}>
                      {item.id % 2 === 0 ? 'Active' : 'Pending'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Table;