import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "Make your guess!",
      count: 0,
      guesses: [],
      answer: this.createRandom()
    }
  }


  getInput(input) {
    if(isNaN(input)) {
      this.setState({feedback: "Enter a valid number, please!"});
    }else if(this.state.guesses.indexOf(input) !== -1) {
      this.setState({feedback: "You already guessed that!"});
    }else {
      this.setState({guesses: [...this.state.guesses, input], count: ++this.state.count, feedback: this.checkAnswer(input)});
    }
  }

  createRandom() {
    return Math.floor(Math.random() * 100) + 1;
  }
  newGame() {
    this.setState({feedback: "Make your guess!", count: 0, guesses: [] , answer: this.createRandom()})
  }

  checkAnswer(input) {
    const difference = Math.abs(input - this.state.answer);
    let feedback;
    if(difference === 0 ){
      feedback = "You got it!";
    }else if (difference < 10) {
      feedback = "Hot!";
    }else if (difference < 20) {
      feedback = "Kinda hot";
    }else if (difference < 30) {
      feedback = "Less than warm";
    }else {
      feedback = "Cold";
    }

    return feedback;

  }

  render() {
    // console.log(this.state.answer);
    return (
        <div>
            <Header newGame={()=> this.newGame()}/>
            <GuessSection getInput={input => this.getInput(input)} feedback={this.state.feedback} />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
  }
}
