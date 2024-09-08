import styles from './TransactionHistory.module.css';
import TransactionItem  from 'components/TransactionItem/TransactionItem.jsx';

const TransactionHistory = ({ transactions }) => {
  return (
  <table className={styles.styledTable}>
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </thead>
  <tbody>
      {transactions.map(item => (
          <tr key={item.id}>
              <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
              />
          </tr>
      ))}
  </tbody>
</table>
  );
};

export default TransactionHistory;
