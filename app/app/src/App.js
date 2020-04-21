import React, {Component} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Characters from './components/Characters';
import Footer from './components/Footer';
import char from './character.json'
import './App.css';

class App extends Component {
  state = {
    score: 0,
    scoreToBeat: 0,
    maxScore: 12,
    message: "Click an image to begin!",
    messageType: "",
    character: char
  }

  correctChoice = () => {
    if(this.state.score + 1 === this.state.maxScore){
      this.setState({score: this.state.score +1, message:"You win!", messageType: "Correct"});
    }
    else if (this.state.score > this.state.scoreToBeat){
      this.setState({scoreToBeat: this.state.scoreToBeat +1})
    }
    else{
      this.setState({score: this.state.score + 1, message:"You guessed correctly keep it going!", messageType: "Correct"});
    }
  }

  incorrectChoice = () => {
    
  }

  createChars = () => {
    return  this.state.character.map((characters) => 
      <Characters 
        photo={characters.image}
        name={characters.name}
        id = {characters.id}
        onClick = {characters.onClick}
      />
    );
  }

  render(){
    return (
      <div>
        <Nav 
          score = {this.state.score}
          scoreToBeat = {this.state.scoreToBeat}
          message = {this.state.message}
          messageType = {this.state.messageType}
        />

        <Header />
        {this.createChars()}
        <Footer />
      </div>
    );
  }
}

export default App;