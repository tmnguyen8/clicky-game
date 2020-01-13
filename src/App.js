import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Banner from "./components/Banner";
import images from "./images.json"

import ImageCard from "./components/ImageCard/ImageCard";
import Wrapper from "./components/Wrapper/Wrapper";
var originalImages = images;

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images: images,
    count: 0
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
  handleClick = () => {
    this.setState({ images: this.displayRandomImage(this.state.images) });
    
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

