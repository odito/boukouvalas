import React, { Component } from 'react'

export default class Time extends Component {

state={
    time:new Date().toLocaleString(),
}


componentDidMount(){
    this.clock=setInterval(()=>{
        this.count();
    },1000)
}

componentWillUnmount(){
    clearInterval(this.clock);
}

count=()=>{
    this.setState({
        time:new Date().toLocaleString()
    })
}

    render() {
        return (
            <div>
                {this.state.time}
            </div>
        )
    }
}

