import styles from './FriendList.module.css';
import FriendListItem  from 'components/FriendListItem/FriendListItem.jsx';

const FriendList = ({friends}) => {
  return (
      <ul>
          {friends.map(item => (
              <li className={styles.item} key={item.id}>
                  <FriendListItem
                  name={item.name}
                  isOnline={item.isOnline}
                  avatar={item.avatar}
                  />
              </li>
          ))}
      </ul>
  );
};

export default FriendList;
