import './App.css';
import tinycolor from 'tinycolor2';
import React, { Component } from 'react';
import { BlockPicker } from 'react-color';
import Color from './components/Color';

class App extends Component {
  state = {
    primary: '#794CFF',
    gradientDark: '#480BFF',
    copied: false
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
  

  render() {
    const { primary, gradientDark, copied } = this.state;
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
          <form>
            <label>1) Select or input hex code of your <code>brand-primary-color</code></label>
              <BlockPicker
                  color={primary}
                  colors={['#794CFF', '#005DAA', '#BF9E66', '#3498DB', '#ED0722', '#54b848', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8' ]}
                  triangle='hide'
                  onChangeComplete={this.handleChangeComplete}
              />
          </form>
          <form>
            <label>2) Preview and copy the hex code of your <code>gradient-dark</code><Color color={gradientDark} /></label>
            <input className='text-area' type="text" id="gradient-dark" name="gradient-dark" value={gradientDark} />
            <input className='btn' type="submit" value={!copied ? 'Copy' : 'Copied!'} onClick={this.handleCopyText} disabled={copied ? true : false}/> 
          </form>
          <p>3) You're all set! 🥳 See you again next time.</p>
          <hr />
        </main>
        <footer>
          <p><small>
            Made with <a className='App-link' href='https://github.com/bgrins/TinyColor' target='_blank' rel="noreferrer" title='TinyColor Github repository'>TinyColor</a> and <a className='App-link' href='https://casesandberg.github.io/react-color/' target='_blank' rel="noreferrer" title='React-Color official page'>React-Color</a>.
            <br />
            Inspired by <a className='App-link' href='https://nicothin.pro/lessColourFunctionCalculator/' target='_blank' rel="noreferrer" title='LESS Colour Function Calculator'>LESS Colour Function Calculator</a> and my teammates' struggles.
          </small></p>
          <iframe src="https://ghbtns.com/github-btn.html?user=lam-tiffany&repo=ff-brand-colors-generator&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
        </footer>
      </div>
    );
  }
  
}

export default App;
