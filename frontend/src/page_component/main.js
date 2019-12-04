import React, { Component } from 'react'
import blackpink from './blackpink.jpg'
export class main extends Component {
    constructor() {
        super();
        this.state = {
            param1: null,
            param2: null,
            operation: null
        };
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    publish = async () => {
        try {
            var url = ''
            console.log('call_api')
            const data = {
                param1: parseInt(this.state.param1),
                param2: parseInt(this.state.param2)
            };
            console.log(data)
            const response = await fetch('http://192.168.99.92:5004/gateway/' + this.state.operation, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const results = await response.json();
            console.log(results)
            this.setState({
                result: results['result']
            })
            console.log(this.state)
        } catch (error) {
            console.log("Call API failed ", error)
        }

        return 1;
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Here are 4 buttons</h1>
                <div style={{ textAlign: 'center' }}>
                    <input
                        type="text"
                        name="param1"
                        placeholder="Param1"
                        value={this.state.param1}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="param2"
                        placeholder="Param2"
                        value={this.state.param2}
                        onChange={this.handleChange}
                    />

                    <input
                        type="text"
                        name="operation"
                        placeholder="operation"
                        value={this.state.operation}
                        onChange={this.handleChange}
                    />

                    <button value="Send" onClick={this.publish}>Publish</button>
                </div>

                {/* <h1 style={{textAlign:'center'}}>....and here is BLACKPINK</h1>

                <div style={{display: "flex",justifyContent: 'center',alignItems: 'center'}}>
                    <img src={blackpink} alt='' style={{height:'400px'}}/>
                    
                </div> */}


            </div>

        );

    }

}
const buttonStyle = {
    textAlign: "center",
    margin: "10px"
}
export default main;