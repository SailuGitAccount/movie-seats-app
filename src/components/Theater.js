import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import SeatRow from './SeatRow';
import '../styles.css';

const numRows = 5;
const numColumns = 8;
const totalSeats=numRows*numColumns;

const MovieTheater = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const availableSeats=totalSeats-selectedSeats.length;

  const handleSeatClick = (row, col) => {
    const seatId = `${row}-${col}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const renderSeatRows = () => {
    const seatRows = [];
    for (let row = 1; row <= numRows; row++) {
      seatRows.push(
        <SeatRow
          key={row}
          row={row}
          numColumns={numColumns}
          selectedSeats={selectedSeats}
          onSeatClick={handleSeatClick}
        />
      );
    }
    return seatRows;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>
        Movie Theater Seat Availability
      </Typography>
      <Typography variant="h6" gutterBottom style={{ marginTop: '0px' }}>
        Please select a seat from the available seats below:
      </Typography>
      <Grid container item justifyContent="center" spacing={2} style={{ marginTop: '5px' }}>
        {renderSeatRows()}
      </Grid>
      <Grid container item justifyContent="center" spacing={2} style={{ marginTop: '20px' }}>
        <div>
            <span className='square'></span>
            Total Seats - {totalSeats}
        </div>
      </Grid>
      <Grid container item spacing={2} justifyContent="center" style={{ marginTop: '5px'}}>
        <Grid container item spacing={2} justifyContent="center" style={{ marginTop: '10px' }}>   
            <span className='square' style={{'backgroundColor': '#bad1f1','marginRight': '20px'}}></span> 
            Selected Seats  - {selectedSeats.length>0?selectedSeats.join(', '):`00`}
        </Grid>
        <Grid container item spacing={2} justifyContent="center" style={{ marginTop: '10px'}}>
            <span className='square' style={{'backgroundColor': '#fb9e61','marginRight': '20px'}}></span>
            <span>Available Seats - {availableSeats}</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MovieTheater;
