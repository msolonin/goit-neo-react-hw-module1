import styles from './FriendListItem.module.css';
const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
          <div className={styles.friendAvatar}>
              <img src={avatar} alt="Avatar" width="48"/>
              <p>{name}</p>
              <p className = {isOnline ? styles.online : styles.offline}>{isOnline? 'Online' : 'Offline'}</p>
          </div>
  );
};

export default FriendListItem;
