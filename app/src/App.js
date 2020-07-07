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
    if(this.state.score + 1 > this.state.scoreToBeat){
      this.setState({scoreToBeat: this.state.scoreToBeat +1});
    }
    if (this.state.score + 1 === this.state.maxScore){
      this.setState({score: this.state.score +1, message: "You win!!!", messageType: "Correct"});
    }
    else{
      this.setState({score: this.state.score + 1, message:"You guessed correctly keep it going!", messageType: "Correct"});
    }
  }

  incorrectChoice = () => {
    this.setState({score: 0, message: "You guessed incorrectly...TRY AGAIN!"})
    const updateChars = this.state.character.map(
      char => char.isClicked === (true) ?
      {...char, isClicked: false} :
      char);
    return updateChars;
  }

  randomChars = (char) =>{
    var reset = false;
    const characters = this.state.character.map(index => {
      if(index.name === char){
        if(index.isClicked === false){
          this.correctChoice();
          return {...index, isClicked: true}
        }
        else{
          reset = true;
          return {...index, isClicked: false}
        }
      }
      return index;
    });

    if(reset){
      this.setState({
        character: this.mix(this.incorrectChoice()),
        messageType: "incorrect"
      });
    }
    else {
      this.setState({
        character: this.mix(this.winnerReset(characters))
      });
    }
  }

  createChars = () => {
    return  this.state.character.map((characters) => 
      <Characters 
        photo={characters.image}
        name={characters.name}
        id = {characters.id}
        onClick = {this.randomChars}
      />
    );
  }

  winnerReset = (char) => {
    if(this.state.score + 1 === this.state.maxScore){
      this.setState({score: 0, topScore: 0})
      const updatedChar = char.map(
        index => 
        (true) ? 
        {...index, isClicked: false} :
        index)
        return updatedChar;
    }
    else{
      return char;
    }
  }

  mix = (arr) =>{
    let randomIndex;
    let tempVal;

    for (var i = 0; i < arr.length; i++){
      randomIndex = Math.floor(Math.random() * arr.length);

      tempVal = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = tempVal;
    }
    return arr;
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
        <div className="container">
          {this.createChars()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;