import React, { useState, useEffect } from 'react';

const TotalWithdrawFund = () => {
    const [data, setData] = useState([
        { id: 'FCTC00001', name: 'FCTCTOKEN', fundValue: '0.00', reason: 'Withdrawal', time: '2024-07-29 10:00 AM', status: 'Pending' },
        { id: 'FCTC1804271', name: 'FCTC00002', fundValue: '0.00', reason: 'Withdrawal', time: '2024-07-29 11:00 AM', status: 'Pending' }
        // Add more data here
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 15;
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        displayTable(currentPage, searchTerm);
    }, [currentPage, searchTerm]);

    const displayTable = (page, searchTerm) => {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = '';

        const filteredData = data.filter(item =>
            item.id.includes(searchTerm) ||
            item.name.includes(searchTerm) ||
            item.fundValue.includes(searchTerm) ||
            item.reason.includes(searchTerm) ||
            item.time.includes(searchTerm) ||
            item.status.includes(searchTerm)
        );

        const start = (page - 1) * rowsPerPage;
        const end = page * rowsPerPage;
        const paginatedData = filteredData.slice(start, end);

        paginatedData.forEach((row, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${start + index + 1}</td>
                <td>${row.id}</td>
                <td>${row.name}</td>
                <td>${row.fundValue}</td>
                <td>${row.reason}</td>
                <td>${row.time}</td>
                <td>${row.status}</td>
            `;
            tableBody.appendChild(tr);
        });

        updatePagination(filteredData.length);
    };

    const updatePagination = (totalRows) => {
        const totalPages = Math.ceil(totalRows / rowsPerPage);
        document.getElementById('first-page').classList.toggle('disabled', currentPage === 1);
        document.getElementById('previous-page').classList.toggle('disabled', currentPage === 1);
        document.getElementById('next-page').classList.toggle('disabled', currentPage === totalPages);
        document.getElementById('last-page').classList.toggle('disabled', currentPage === totalPages);
    };

    const handleSearch = () => {
        setSearchTerm(document.getElementById('search-input').value);
        setCurrentPage(1);
    };

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div
            style={{
                fontFamily: 'Arial, sans-serif',
                backgroundImage: 'url("web eg - 02.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                margin: 0,
                padding: 0,
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px',
            }}
        >
            <div
                style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    marginBottom: '20px',
                    padding: '20px',
                }}
            >
                <h3 style={{ margin: 0, fontSize: '1.5em' }}>Total Withdrawal Fund</h3>
                <p id="total-withdrawal-fund" style={{ fontSize: '2em', margin: '10px 0 0' }}>$10,000.00</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search"
                    onKeyUp={handleKeyUp}
                    style={{
                        flex: 1,
                        padding: '10px',
                        fontSize: '1em',
                        border: '1px solid #ccc',
                        borderRadius: '4px 0 0 4px',
                        outline: 'none',
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1em',
                        border: 'none',
                        backgroundColor: '#6c63ff',
                        color: 'white',
                        cursor: 'pointer',
                        borderRadius: '0 4px 4px 0',
                    }}
                >
                    Search
                </button>
            </div>
            <table
                id="data-table"
                style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    background: 'rgba(255, 255, 255, 0.1)',
                    marginTop: '20px',
                }}
            >
                <thead>
                    <tr>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>S.No</th>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>Member Id</th>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>Member Name</th>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>Fund Value</th>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>Reason</th>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>Time</th>
                        <th style={{ padding: '10px', textAlign: 'left', background: 'rgba(255, 255, 255, 0.3)' }}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data will be inserted here by JavaScript */}
                </tbody>
            </table>
            <ul
                className="pagination"
                id="pagination"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    padding: 0,
                    margin: '20px 0 0',
                }}
            >
                <li style={{ margin: '0 5px' }}>
                    <a
                        href="#"
                        id="first-page"
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#f1f1f1',
                            border: '1px solid #ccc',
                            textDecoration: 'none',
                            color: '#333',
                        }}
                    >
                        First
                    </a>
                </li>
                <li style={{ margin: '0 5px' }}>
                    <a
                        href="#"
                        id="previous-page"
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#f1f1f1',
                            border: '1px solid #ccc',
                            textDecoration: 'none',
                            color: '#333',
                        }}
                    >
                        Previous
                    </a>
                </li>
                <li style={{ margin: '0 5px' }}>
                    <a
                        href="#"
                        id="next-page"
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#f1f1f1',
                            border: '1px solid #ccc',
                            textDecoration: 'none',
                            color: '#333',
                        }}
                    >
                        Next
                    </a>
                </li>
                <li style={{ margin: '0 5px' }}>
                    <a
                        href="#"
                        id="last-page"
                        style={{
                            padding: '10px 15px',
                            backgroundColor: '#f1f1f1',
                            border: '1px solid #ccc',
                            textDecoration: 'none',
                            color: '#333',
                        }}
                    >
                        Last
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default TotalWithdrawFund;
