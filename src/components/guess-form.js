import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    return (
        <form onSubmit={e => {e.preventDefault(); this.props.getInput(this.input.value); this.input.value = '';}}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" ref={input => this.input = input} required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
  }
};
