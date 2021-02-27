import React, { useState } from 'react';
import Card from './Cards/Card';
import arrowRight from '../../../assets/Icons/arrowRight.svg';
import arrowBottom from '../../../assets/Icons/arrowBottom.svg';

const NotificationScreen = () => {
  const [showResultsNotifications, setShowResultsNotifications] = useState(
    false
  );

  const handleClickNotification = () => {
    setShowResultsNotifications((prevState) => !prevState);
  };
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: showResultsNotifications ? 'bold' : '',
        }}
        onClick={handleClickNotification}
      >
        <div>Notifications</div>
        <img
          src={showResultsNotifications ? arrowBottom : arrowRight}
          alt="#"
        />
      </div>
      <Card show={showResultsNotifications} onClick={handleClickNotification} />
    </div>
  );
};

export default NotificationScreen;
