import React, {Component} from "react";
import NavTabs from "./components/NavTabs/NavTabs";
import Banner from "./components/Banner/Banner";
import images from "./images.json"

import ImageCard from "./components/Wrapper/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper/Wrapper";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: images,
    score: 0,
    totalScore: 0,
    guessedArr: [],
    resultMessage: ""
  };

  // Generating an array in random from 0-11
  displayRandomImage(originalArr) {
    var randomArrIndex = [];
    var randomArrResult = [];
    while(randomArrIndex.length < 12){
      var r = Math.floor(Math.random() * 12);
      if(randomArrIndex.indexOf(r) === -1) randomArrIndex.push(r);
    }

    randomArrIndex.map((index)=>randomArrResult.push(originalArr[index]))
    return randomArrResult
  }

  // function to handle the guess has been guessed before or not by checking the array guessedArr
  handleGuessed(alt) {
    if (this.state.guessedArr.includes(parseInt(alt))) {
      return true
    } else {
      return false
    }
  }

  // function to see if the user has won
  handleWin() {
    if (this.state.guessedArr.length === 12) {
      this.setState({
        resultMessage: "You Win!",
        totalScore: this.state.totalScore + 1,
        score: 0,
        guessedArr: []
      })
    }
  }

  // Handle OnChange click
  handleClick = event => {
    const {alt} = event.target;
    // If you have guessed this Image
    if (this.handleGuessed(alt)){
      this.setState({
        images: this.displayRandomImage(this.state.images),
        resultMessage: "Wrong! You have guessed this already."
      }); 
    // else You have NOT guessed this Image yet
    } else {
      var newGuessArr = this.state.guessedArr
      newGuessArr.push(parseInt(alt))

      this.setState({
        score: newGuessArr.length,
        guessedArr: newGuessArr,
        images: this.displayRandomImage(this.state.images),
        resultMessage: "Correct!"
      })
    }
    this.handleWin()
  }

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <div>
        <NavTabs 
          score={this.state.score}
          resultMessage={this.state.resultMessage}
          totalScore={this.state.totalScore}
        />
        <Banner />
        <Wrapper>
          {
            this.state.images.map(image =>(
              <ImageCard 
                id={image.id}
                key={image.id}
                alt={image.id}
                image={image.image}
                count={this.state.count}
                handleClick={this.handleClick}
              />
            ))
          }

        </Wrapper>
      </div>
    )
  }
}

export default App;

