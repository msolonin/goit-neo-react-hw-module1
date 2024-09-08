import Profile   from 'components/Profile/Profile.jsx';
import userData from 'data/userData.json';
import FriendList from 'components/FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';
import Heading from 'components/Heading/Heading';

function App() {
  return (
      <>
        <Heading title="Завдання 1. Профіль соціальної мережі" bottom />
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <Heading title="Завдання 2. Список друзів" bottom />
        <FriendList friends={friends} />
        <Heading title="Завдання 3. Історія транзакцій" bottom />
        <TransactionHistory transactions={transactions} />
      </>
  )
}

export default App
