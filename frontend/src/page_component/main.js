import React,{Component} from 'react'
import blackpink from './blackpink.jpg'
export class main extends Component{
    constructor(){
        super();
        this.CallAPI = this.CallAPI.bind(this);
    }

    async CallAPI(a){
        try{
            const data = {
                param1: 1,
                param2: 2
            };
            const response = await fetch("http://service1:5000/service1/plus",{
                method:"POST",
                headers:{ "Content-Type":"application/json"},
                body: JSON.stringify(data)
            });
            console.log(response)
        } catch(error){
            console.log("Call API failed ",error)
        }

        return 1;
    }

    render(){
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Here are 4 buttons</h1>
                <div style={{textAlign:'center'}}>
                    <button style={buttonStyle} onClick={this.CallAPI}>1</button>
                    <button style={buttonStyle}>2</button>
                    <button style={buttonStyle}>3</button>
                    <button style={buttonStyle}>4</button>
                </div>

                <h1 style={{textAlign:'center'}}>....and here is BLACKPINK</h1>

                <div style={{display: "flex",justifyContent: 'center',alignItems: 'center'}}>
                    <img src={blackpink} alt='' style={{height:'400px'}}/>
                    
                </div>
                
                
            </div>
    
        );

    }
    
}
const buttonStyle = {
    textAlign: "center",
    margin: "10px"
}
export default main;