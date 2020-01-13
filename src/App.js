import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Banner from "./components/Banner";
import images from "./images.json"

import ImageCard from "./components/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper/Wrapper";

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: images,
    score: 0,
    guessedArr: []
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

  // Handle OnChange click
  handleClick = event => {
    const {alt} = event.target;

    if (this.state.guessedArr.includes(parseInt(alt))){
      console.log('you have guessed this already')
    } else {
      console.log("you have not guessed this yet")
      var newGuessArr = this.state.guessedArr
      newGuessArr.push(parseInt(alt))
      console.log(newGuessArr.length)
      this.setState({
        score: newGuessArr.length,
        guessedArr: newGuessArr
      })
      
    }

    this.setState({ 
      images: this.displayRandomImage(this.state.images),
    });    
    console.log(this.state.score)
    console.log(this.state.guessedArr)
  }

  // Map over this.state.images and render a ImageCard component for each image object
  render() {
    return (
      <div>
        <NavTabs />
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

