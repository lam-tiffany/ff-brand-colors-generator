import React from 'react';
import Color from './Color';
import { BlockPicker } from 'react-color';

const MainGenerator = (props) => {

    const { primary, gradientDark, copied, handleChangeComplete, handleCopyText } = props;
    return (
      <section>
            <form>
              <label>1) Select or input hex code of your <code>brand-primary-color</code></label>
                <BlockPicker
                    color={primary}
                    colors={['#794CFF', '#005DAA', '#BF9E66', '#3498DB', '#ED0722', '#54b848', '#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8' ]}
                    triangle='hide'
                    onChangeComplete={handleChangeComplete}
                />
            </form>
            <form>
              <label>
                2) Preview and copy the hex code of your <code>gradient-dark</code>
                <Color bgColor={gradientDark} />
              </label>
              <input className='text-area' type="text" id="gradient-dark" name="gradient-dark" value={gradientDark} />
              <input className='btn' type="submit" value={!copied ? 'Copy' : 'Copied!'} onClick={handleCopyText} disabled={copied ? true : false}/> 
            </form>
              <p>3) You're all set! 🥳 See you again next time.</p>
          </section>
    );
}

export default MainGenerator;
