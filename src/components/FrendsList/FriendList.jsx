import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FrendsListItem/FriendListItem';
import css from '../FrendsList/FriendList.module.css'

    const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
        {friends.map(friend => {
            return (
            <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />
            );
        })}
        </ul>
    );
    };
    FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number.isRequired,
        })
    ),
    };

    export default FriendList;