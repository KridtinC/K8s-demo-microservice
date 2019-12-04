import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
export class main extends Component {
    constructor() {
        super();
        this.state = {
            param1: 0,
            param2: 0,
            operation: '',
            result: 0
        };
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSelect = (event) => {
        this.setState({
            operation: event
        });
        console.log(this.state)
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
            const response = await fetch('http://192.168.99.92:31123/gateway/' + this.state.operation, {
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
                <h1 style={{ textAlign: 'center', margin: '30px' }}>Kubernetes Demo</h1>
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <form>
                        <div class="form-group">
                            <label>Parameter 1</label>
                            <input
                                class="form-control"
                                type="text"
                                name="param1"
                                placeholder="Param1"
                                value={this.state.param1}
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>


                    <form>
                        <div class="form-group">
                            <label>Parameter 2</label>
                            <input
                                class="form-control"
                                type="text"
                                name="param2"
                                placeholder="Param2"
                                value={this.state.param2}
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>
                    <Dropdown onSelect={this.handleSelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {this.state.operation == '' ? 'Select Operation' : this.state.operation}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="plus">Plus</Dropdown.Item>
                            <Dropdown.Item eventKey="minus">Minus</Dropdown.Item>
                            <Dropdown.Item eventKey="multiply">Multiply</Dropdown.Item>
                            <Dropdown.Item eventKey="divide">Divide</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <button value="Send" onClick={this.publish} class="btn btn-primary" style={{ margin: '30px' }}>Publish</button>

                    <p>Result = {this.state.result}</p>
                </div>
            </div>

        );

    }

}

export default main;