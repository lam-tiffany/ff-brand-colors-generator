import './App.css';
import tinycolor from 'tinycolor2';
import React, { Component } from 'react';
import MainGenerator from './components/MainGenerator';
import ContrastChecker from './components/ContrastChecker';
// import Genie from './components/Genie';
class App extends Component {
  state = {
    primary: '#794cff',
    gradientDark: '#480bff',
    copied: false,
    wcagExpand: false,
    sketchExpand: false,
    // paidGenie: false,
    // genieSelections: {
    //   level: {name: "AA", value: "AA"},
    //   backgroundColor: {name: 'ff-white', value: '#ffffff'},
    //   selectedForegroundColor: { name: 'brand-primary-color', value: '#794cff' },
    //   size: {name: "small", value: "small"}
    // }
  }

  handleChangeComplete = (newPrimary) => {
    const newGradientDark = tinycolor(newPrimary.hex).darken(12.8).toString();
    this.setState({
      ...this.state,
      primary: newPrimary,
      gradientDark: newGradientDark,
      copied: false
    });
  }

  handleCopyText = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(this.state.gradientDark);
    this.setState({ ...this.state, copied: true });
  };

  handleExpandToggle = (e, name) => {
    this.setState({ ...this.state, [name]: !this.state[name] });
  }

  // handleReceiveMoney = () => {
  //   this.setState({...this.state, paidGenie: true})
  // }

  // handleGenieMagic = (e) => {
  //   console.log(e.target.value);
  //   this.setState({
  //     ...this.state,
  //     genieSelections: {
  //       ...this.state.genieSelections,
  //       [e.target.name]: {
  //         ...this.state[e.target.name],
  //         value: [e.target.value.value]}
  //     }
  //   })
  // }
  

  render() {
    const { primary, gradientDark, copied, wcagExpand, sketchExpand } = this.state;
    return (
      <div className="App">
        <header>
          <h1>
            Brand Colors Generator  <span role="img" aria-label="artist">🧑🏻‍🎨</span>
          </h1>
          <p>A tool for generating non-primary branded colors required in the FFAI app.</p>
          <hr/>
        </header>
        <main>
          <MainGenerator
            primary={primary}
            gradientDark={gradientDark}
            copied={copied}
            handleChangeComplete={this.handleChangeComplete}
            handleCopyText={this.handleCopyText} />
          <hr />
          <ContrastChecker
            primary={primary}
            gradientDark={gradientDark}
            copied={copied}
            wcagExpand={wcagExpand}
            sketchExpand={sketchExpand}
            handleChangeComplete={this.handleChangeComplete}
            handleCopyText={this.handleCopyText}
            handleExpandToggle={this.handleExpandToggle} />
          {/* <hr />
          <Genie
            primary={primary}
            gradientDark={gradientDark}
            genieSelections={genieSelections}
            paidGenie={paidGenie}
            handleReceiveMoney={this.handleReceiveMoney}
            handleGenieMagic={this.handleGenieMagic}
          /> */}
          <hr />
        </main>
        <footer>
          <p><small>
            Made with <a className='App-link' href='https://github.com/bgrins/TinyColor' target='_blank' rel="noreferrer" title='TinyColor Github repository'>TinyColor</a> and <a className='App-link' href='https://casesandberg.github.io/react-color/' target='_blank' rel="noreferrer" title='React-Color official page'>React-Color</a>.
            <br />
            Inspired by <a className='App-link' href='https://nicothin.pro/lessColourFunctionCalculator/' target='_blank' rel="noreferrer" title='LESS Colour Function Calculator'>LESS Colour Function Calculator</a> and my team's struggles.
          </small></p>
          <iframe src="https://ghbtns.com/github-btn.html?user=lam-tiffany&repo=ff-brand-colors-generator&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="FF Brand Colors Generator GitHub Repository" style={{display: 'block', margin: '0px auto 50px auto'}}></iframe>
        </footer>
      </div>
    );
  }
}

export default App;
