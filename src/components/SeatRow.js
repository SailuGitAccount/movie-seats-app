import React from 'react';
import Seat from './Seat';
import { Grid } from '@mui/material';

const SeatRow = ({ row, numColumns, selectedSeats, onSeatClick }) => {
  return (
    <Grid container item justifyContent="center" spacing={1}>
      {[...Array(numColumns).keys()].map(col => {
        const seatId = `${row}-${col + 1}`;
        const isSelected = selectedSeats.includes(seatId);
        return (
          <Grid item key={seatId}>
            <Seat
              seatId={seatId}
              isSelected={isSelected}
              onClick={() => onSeatClick(row, col + 1)}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SeatRow;