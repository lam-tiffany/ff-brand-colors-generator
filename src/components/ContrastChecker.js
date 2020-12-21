import React from 'react';
import WcagChecker from './WcagChecker';
import { SketchPicker } from 'react-color';

const ContrastChecker = (props) => {

    const { gradientDark, wcagExpand, sketchExpand, copied, handleChangeComplete, handleCopyText, handleExpandToggle } = props;
    return (
      <section>
            <h2>Color Contrast Checker 🔍</h2>
            <p>Ensure that the new <code>gradient-dark</code> color combinations meet <span className='App-link' onClick={(e) => handleExpandToggle(e, 'wcagExpand')} title='Web Content Accessibility Guidelines (Version 2.0)'>WCAG guidelines</span>.
           
            {wcagExpand && <blockquote cite="https://webaim.org/resources/contrastchecker/"><small>
            WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.<br /> 
            Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger. <br /> For more details, please visit <a className='App-link' href='https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef' target='_blank' rel="noreferrer" title='Web Content Accessibility Guidelines (Version 2.0)'>Web Content Accessibility Guidelines (Version 2.0)</a>.</small></blockquote>}
              
              <br />Or <span className='App-link' onClick={(e) => handleExpandToggle(e, 'sketchExpand')} title='Sketch Picker'>click here</span> to pick a new <code>gradient-dark</code> color of your choice.</p>
            {sketchExpand &&
              <form className='sketch-gradient'>
                <SketchPicker color={gradientDark} onChangeComplete={handleChangeComplete} />
                <input className='text-area' type="text" id="gradient-dark" name="gradient-dark" value={gradientDark} />  
                <input className='btn' type="submit" value={!copied ? 'Copy' : 'Copied!'} onClick={handleCopyText} disabled={copied ? true : false} /> 
                <hr/>
              </form>
            }
            
            <h3>Level AA, size small:</h3>
          <WcagChecker
              foregroundColor={gradientDark}
              level='AA'
              fontSize='small' />
            <h3>Level AA, size large:</h3>
            <WcagChecker
              foregroundColor={gradientDark}
              level='AA'
              fontSize='large' />
            <h3>Level AAA, size small:</h3>
            <WcagChecker
              foregroundColor={gradientDark}
              level='AAA'
              fontSize='small' />
            <h3>Level AAA, size large:</h3>
            <WcagChecker
              foregroundColor={gradientDark}
              level='AAA'
              fontSize='large' />
          </section>
    );
}

export default ContrastChecker;
