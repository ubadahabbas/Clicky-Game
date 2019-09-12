import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import images from "./images.json";
import Image from "./components/image";
import Themes from "./themes.json";

class App extends Component {
  state = {
    images: [],
    themes: Themes,
    score: 0,
    topScore: 0,
    player: "",
    page: "theme",
    theme: "",
    level: 0,
    currentlevel: []
  };

  resetGame = ()=>{
    this.setState({
      images: [],
    themes: Themes,
    score: 0,
    topScore: 0,
    player: "",
    page: "theme",
    theme: "",
    level: 0,
    currentlevel: []
    })
  }
  themeClick(theme) {
    this.resetState();
    this.setState({ theme: theme });
    this.levelCall(theme);
    this.setState({ page: "game" });
  }

  imageClick = id => {
  
    let newArr = this.state.currentlevel;
    newArr.forEach(element => {
      if (element.id === id && element.state === 0) {
        element.state = 1;
        this.setState({ score: this.state.score + 1 });
        
        
      } else if (element.id === id && element.state == 1) {
        this.setState({score: 0})
        if (this.state.level > 1) {
          this.state.currentlevel.splice(3);
          this.setState({level: 1})
          
        }
        this.resetState();
      }
     
    });
    this.shuffle(newArr)
  };

  levelCall = theme => {
    if (this.state.level == 0) {
      images.forEach(element => {
        if (element.theme == theme) {
          this.setState({ currentlevel: element.images.slice(0, 3) });
          this.resetState();
        }
      });
      this.setState({ level: 1 });
    } else if (this.state.level == 1 ) {
      images.forEach(element => {
        if (element.theme == theme) {
          let array = element.images.slice(0, 6);
          this.setState({ currentlevel: array });
          this.resetState();
         
          this.setState({ level: 2 });
        }
      });
    } else if (this.state.level == 2) {
      images.forEach(element => {
        if (element.theme == theme) {
          let array = element.images.slice(0, 9);
          this.setState({ currentlevel: array });
          this.resetState();
          this.setState({ level: 3 });
        }
      });
    } else if (this.state.level == 3) {
      images.forEach(element => {
        if (element.theme == theme) {
          let array = element.images.slice(0, 12);
          this.setState({ currentlevel: array });
          this.resetState();
          this.setState({ level: "Game Ended" });
        }
      });
    }
  };

 

  resetScore = () => {
    this.setState({ score: 0 });
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    this.setState({ currentlevel: array });
  
    if (this.state.score + 1 == 3 && this.state.level == 1) {
      this.levelCall(this.state.theme);
    } else if (this.state.score + 1 == 9 && this.state.level == 2) {
      this.levelCall(this.state.theme);
    } else if (this.state.score + 1 == 18 && this.state.level == 3) {
      this.levelCall(this.state.theme);
    }
  };

  resetState = () => {
    for (var i = 0; i < this.state.currentlevel.length; i++) {
      this.state.currentlevel[i].state = 0;
    }
  };

  render() {
    let count = -1;
    let key = 0;
    return (
      <div>
        {this.state.page == "game" ? (
          <div className="game-outerdiv">
            <div className="score-div text-center"> {this.state.score}</div>
            <div className="game-div">
              <div className="container">
                {this.state.level > 0 ? (
                  <div className="row">
                    {this.state.currentlevel.map(element => {
                      count++;
                      return (
                        <div className="col" key={count}>
                          <div onClick={() => this.imageClick(element.id)}>
                            <Image
                              url={element.image}
                              name={element.name}
                              imageClick={this.imageClick}
                              id={element.id}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="bottom-div row">
              <div className="col level">Level: {this.state.level}</div>
              <div className="col button">
                <button onClick={() => this.resetGame()}>Reset</button>
              </div>
            </div>
          </div>
        ) : this.state.page == "theme" ? (
          <div className="launch-div">
            <div className="container">
              <div>
                <div className="text-center">Select Theme</div>
                <div className="container">
                  <div className="row">
                    {this.state.themes.map(theme => {
                      key++;
                      return (
                        <div className="col" key={key}>
                          <div onClick={() => this.themeClick(theme.name)}>
                            <Image
                              className="theme-div"
                              theme="Harry-Potter"
                              url={theme.image}
                              name={theme.name}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
