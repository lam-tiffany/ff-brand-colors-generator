import './App.css';
import tinycolor from 'tinycolor2';
import React, { Component } from 'react';
import { BlockPicker, SketchPicker } from 'react-color';
import Color from './components/Color';
import ContrastChecker from './components/ContrastChecker';

class App extends Component {
  state = {
    primary: '#794cff',
    gradientDark: '#480bff',
    copied: false,
    wcagExpand: false,
    sketchExpand: false
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
          <section>
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
              <label>
                2) Preview and copy the hex code of your <code>gradient-dark</code>
                <Color bgColor={gradientDark} />
              </label>
              <input className='text-area' type="text" id="gradient-dark" name="gradient-dark" value={gradientDark} />
              <input className='btn' type="submit" value={!copied ? 'Copy' : 'Copied!'} onClick={this.handleCopyText} disabled={copied ? true : false}/> 
            </form>
              <p>3) You're all set! 🥳 See you again next time.</p>
          </section>
          <hr />
          <section>
            <h2>Color contrast checker 🔍</h2>
            <p>Ensure that the new <code>gradient-dark</code> color combinations meet <span className='App-link' onClick={(e) => this.handleExpandToggle(e, 'wcagExpand')} title='Web Content Accessibility Guidelines (Version 2.0)'>WCAG guidelines</span>.
           
            {wcagExpand && <blockquote cite="https://webaim.org/resources/contrastchecker/"><small>
            WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.<br /> 
            Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger. <br /> For more details, please visit <a className='App-link' href='https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef' target='_blank' rel="noreferrer" title='Web Content Accessibility Guidelines (Version 2.0)'>Web Content Accessibility Guidelines (Version 2.0)</a>.</small></blockquote>}
              
              <br />Or <span className='App-link' onClick={(e) => this.handleExpandToggle(e, 'sketchExpand')} title='Sketch Picker'>click here</span> to pick a new <code>gradient-dark</code> color of your choice.</p>
            {sketchExpand &&
              <form className='sketch-gradient'>
                <SketchPicker color={gradientDark} onChangeComplete={this.handleChangeComplete} />
                <input className='text-area' type="text" id="gradient-dark" name="gradient-dark" value={gradientDark} />  
                <input className='btn' type="submit" value={!copied ? 'Copy' : 'Copied!'} onClick={this.handleCopyText} disabled={copied ? true : false} /> 
                <hr/>
              </form>
            }
            
            <h3>Level AA, size small:</h3>
            <ContrastChecker
              foregroundColor={gradientDark}
              level='AA'
              fontSize='small' />
            <h3>Level AA, size large:</h3>
            <ContrastChecker
              foregroundColor={gradientDark}
              level='AA'
              fontSize='large' />
            <h3>Level AAA, size small:</h3>
            <ContrastChecker
              foregroundColor={gradientDark}
              level='AAA'
              fontSize='small' />
            <h3>Level AAA, size large:</h3>
            <ContrastChecker
              foregroundColor={gradientDark}
              level='AAA'
              fontSize='large' />
            
          </section>
          <hr/>
        </main>
        <footer>
          <p><small>
            Made with <a className='App-link' href='https://github.com/bgrins/TinyColor' target='_blank' rel="noreferrer" title='TinyColor Github repository'>TinyColor</a> and <a className='App-link' href='https://casesandberg.github.io/react-color/' target='_blank' rel="noreferrer" title='React-Color official page'>React-Color</a>.
            <br />
            Inspired by <a className='App-link' href='https://nicothin.pro/lessColourFunctionCalculator/' target='_blank' rel="noreferrer" title='LESS Colour Function Calculator'>LESS Colour Function Calculator</a> and my teammates' struggles.
          </small></p>
          <iframe src="https://ghbtns.com/github-btn.html?user=lam-tiffany&repo=ff-brand-colors-generator&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="FF Brand Colors Generator GitHub Repository" style={{display: 'block', margin: '0px auto 50px auto'}}></iframe>
        </footer>
      </div>
    );
  }
}

export default App;
