import React from 'react'
import { useState } from 'react';
import { Typography } from '@mui/material';
import { Stack, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CounterFunction() {
    const [counter,setCounter] = useState(0)
  function incrementCounter() {
    setCounter(counter+1)
  }
  function decrementCounter() {
    setCounter(counter-1)
  }
  function resetCounter() {
    setCounter(0)
  }
  return (
    <div>
    <Typography variant='h4' gutterBottom>Counter Application</Typography>
       <h1>{counter}</h1>
       <Stack spacing={5} direction='row'>
       <IconButton aria-label='add' color='primary' onClick={incrementCounter}><AddIcon /></IconButton>
       <IconButton aria-label='reduce' color='primary' onClick={decrementCounter}><RemoveIcon /></IconButton>
       <Button variant='contained' color='error' onClick={resetCounter}>Reset</Button>
       </Stack>
       </div>
  )
}

export default CounterFunction