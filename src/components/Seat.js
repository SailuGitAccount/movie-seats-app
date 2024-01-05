import React from 'react';

const Seat = ({ seatId, isSelected, onClick }) => {
  return (
    <div
      className={`seat ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {seatId}
    </div>
  );
};

export default Seat;