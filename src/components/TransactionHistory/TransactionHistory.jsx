import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
            return (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
            );
            })}
        </tbody>
        </table>
    );
    };
    TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        })
    ),
};

export default TransactionHistory;