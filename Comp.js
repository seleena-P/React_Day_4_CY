import React from 'react'
export default class Change extends Component{
    constructor(props){
        super(props)
        this.state={
            message:"Class time"
        }
    }
    Buttonchange=()=>{
        this.setState({
            message:"Lunch time"
        })
    }
    render(){
        return(
            <div>
                <button onClick={Buttonchange}>Bell</button>
            </div>
        )
    }
}

