import react, {Component} from "react"

this.state={
    count:0
}

this.setState((prevState)=>{
    prevState.count+1
   
})
increment{
    this.setState((prevState)=>{
prevState.count+1
    })
}


import React, {Component} from 'react'
class greeting extends Component(){
constructor(props) {
  super(props)

  this.state = {
     isLoading:true
  }
}
Active(){
    this.setState({this.state.isLoading?true:false})
}
render(){
    return(
        <div>
            <div>vishwas{Active}</div>
            <div>lambo</div>
        </div>
    )
}




}

