import React, { Component } from 'react'

export default class Time2 extends Component {


state={
    day:new Date().getDay(),
    month:new Date().getMonth(),
    date:new Date().getDate(),
    year:new Date().getFullYear(),
    hour:new Date().getHours(),
    minutes:new Date().getMinutes(),
    seconds:new Date().getSeconds(),

}

counting=()=>{
    this.setState({
        day:new Date().getDay(),
        month:new Date().getMonth(),
        date:new Date().getDate(),
        year:new Date().getFullYear(),
        time:new Date().toLocaleTimeString(),
        hour:new Date().getHours(),
        minutes:new Date().getMinutes(),
        seconds:new Date().getSeconds(),
    })
}

componentDidMount(){
    this.resetTime=setInterval(()=>{
        this.counting();
    },1000)
}


componentWillUnmount(){
    clearInterval(this.resetTime)
}



    render() {
     const months = ["Ιαν","Φεβ","Μαρ","Απρ","Μαϊου","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"];

     const days = ["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"];

        return (
           <span>
               {`${days[this.state.day]} ${this.state.date} ${months[this.state.month]}, ${this.state.hour}:${this.state.minutes}:${this.state.seconds} `}
               </span>
        )
    }
}
