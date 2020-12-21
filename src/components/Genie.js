import React from 'react';
import { bgColors } from '../constants';
import tinycolor from 'tinycolor2';
// import WcagChecker from './WcagChecker';

const Genie = (props) => {

  const { primary, gradientDark, paidGenie, genieSelections, handleReceiveMoney, handleGenieMagic } = props;
  const analogousColors = tinycolor(primary).analogous();
  console.log(analogousColors);

    return (
      <section>
            <h2>Ultimate Genie of Readability 🧞‍♂️</h2>
            <p>Genie says, <br /><em>"I can find you the most readable branded colors. <br /> But don't rub me. My service charge is 3 dollars."</em></p>
        {!paidGenie ? <button className='btn' onClick={handleReceiveMoney}>💰 $3</button> :
          <div>
            <p>✨ ✨ 🔮 ✨ ✨</p>
            <form>
              <label for="color">Choose a WCAG Level of conformance :</label>
              <select name="level" id="level" value={genieSelections.level} onChange={handleGenieMagic}>
                <option value='AA'>AA</option>
                <option value='AAA'>AAA</option>
              </select>
              <br />
              <label for="size">Choose a <code>fontSize</code>:</label>
              <select name="size" id="size" value={genieSelections.size.value} onChange={handleGenieMagic}>
                <option value='small'>small</option>
                <option value='large'>large</option>
              </select>
              <br />
              <label for="backgroundColor">Choose a <code>backgroundColor</code>:</label>
              <select name="backgroundColor" id="backgroundColor" value={genieSelections.backgroundColor.value} onChange={handleGenieMagic}>
                {bgColors.map((bg, i) => {
                  return <option value={bg.value} key={i}>{bg.name}</option>
                })}
              </select>
              <br/>
              <label for="color">I'm looking for the most readable :</label>
              <select name="selectedForegroundColor" id="selectedForegroundColor" value={genieSelections.selectedForegroundColor.value} onChange={handleGenieMagic}>
                <option value={primary}>brand-primary-color</option>
                <option value={gradientDark}>gradient-dark</option>
              </select>
              <br />
            </form>
          </div>}
          </section>
    );
}

export default Genie;
