import React, { Component } from 'react';
import './App.css';
import Header from "./components/header"
import Jumbotron from "./components/jumbotron"
import images from "./images.json";
import Image from "./components/image"

class App extends Component {

  state = {
    images: images,
    score: 0,
    topScore: 0
  };

  incrementScore = () => {
  
    this.setState({ score: this.state.score + 1 })

    if (this.state.score +1> this.state.topScore) {
      this.setState({topScore: this.state.score + 1})
      console.log(this.state.score)
    }
  };

  resetScore = () => {
    this.setState({ score: 0 })
  };

  
  imageClick = id => {
    console.log(id)
    console.log(this.state.images)
    for (var i = 0; i < this.state.images.length; i++) {
      if (this.state.images[i].id == id) {
        if (this.state.images[i].state == 0) {
          this.state.images[i].state = 1;
          this.incrementScore();
        }
        else {
          this.resetScore();
           this.resetState();
        }
      }
    }
    this.shuffle(this.state.images);
  };

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ images: array })
    console.log(this.state.images)
  }

  resetState=()=>{
    for (var i = 0; i < this.state.images.length; i++){
      this.state.images[i].state = 0;
    }
  }

  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <main class="container">
          <div class="row">
            <Image url={this.state.images[0].image} name={this.state.images[0].name} imageClick={this.imageClick} id={this.state.images[0].id} />
            <Image url={this.state.images[1].image} name={this.state.images[1].name} imageClick={this.imageClick} id={this.state.images[1].id} />
            <Image url={this.state.images[2].image} name={this.state.images[2].name} imageClick={this.imageClick} id={this.state.images[2].id} />
            <Image url={this.state.images[3].image} name={this.state.images[3].name} imageClick={this.imageClick} id={this.state.images[3].id} />
          </div>
          <br />
          <div class="row">
            <Image url={this.state.images[4].image} name={this.state.images[4].name} imageClick={this.imageClick} id={this.state.images[4].id} />
            <Image url={this.state.images[5].image} name={this.state.images[5].name} imageClick={this.imageClick} id={this.state.images[5].id} />
            <Image url={this.state.images[6].image} name={this.state.images[6].name} imageClick={this.imageClick} id={this.state.images[6].id} />
            <Image url={this.state.images[7].image} name={this.state.images[7].name} imageClick={this.imageClick} id={this.state.images[7].id} />
          </div>
          <br />
          <div class="row">
          <Image url={this.state.images[8].image} name={this.state.images[8].name} imageClick={this.imageClick} id={this.state.images[8].id} />
            <Image url={this.state.images[9].image} name={this.state.images[9].name} imageClick={this.imageClick} id={this.state.images[9].id} />
            <Image url={this.state.images[10].image} name={this.state.images[10].name} imageClick={this.imageClick} id={this.state.images[10].id} />
            <Image url={this.state.images[11].image} name={this.state.images[11].name} imageClick={this.imageClick} id={this.state.images[11].id} />
          </div>
          {/* {images.map(image=>(
       <Image url={image.image} name={image.name} />
     ))} */}
        </main>
      </div>
    );
  }
}

export default App;
