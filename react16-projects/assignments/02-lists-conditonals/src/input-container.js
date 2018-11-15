import React from 'react';
import Validation from './validation/validation';
import Char from './char';

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

    deleteCharacterHandler = (index) => {
        let text = this.state.userInput.split('');
        text.splice(index, 1);
        let updatedText = text.join('');
        this.setState({userInput: updatedText});
    }

    render() {
        let charList = this.state.userInput.split('').map((char, index) => {
            return (<Char 
                character={char} 
                key={index}
                clicked={() => this.deleteCharacterHandler(index)}
            />)
        });

        return (
            <div>
                <input 
                    type='text'
                    onChange={this.inputChangedHandler}
                    value={this.state.userInput} 
                />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                { charList }
            </div>
        )
    };
};

export default InputContainer;