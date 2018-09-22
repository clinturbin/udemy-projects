import React from 'react';
import Validation from './validation/validation';

class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        };
    };

    inputChangedHandler = (event) => {
        this.setState({userInput: event.target.value});
    };

    render() {
        return (
            <div>
                <input 
                    type='text'
                    onChange={this.inputChangedHandler}
                    value={this.state.userInput} 
                />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
            </div>
        )
    };
};

export default InputContainer;