import { Button } from '@mui/material'
import React, { Component } from 'react'

export default class Counterclass extends Component {
    constructor(props){
        super(props)
        this.state={ //state creation
            counter:0 //initial state
        }
    }
  render() {
    return (
      <div>Counterclass
        <p>You clicked {this.state.counter} times</p>
        <Button variant='text' size='small' color='primary' onClick={()=>this.setState({
            counter:this.state.counter+1
        })}>Click me</Button>
      </div>
    )
  }
}
