import React from 'react';
import tinycolor from 'tinycolor2';
import { bgColors } from '../constants';

const WcagChecker = (props) => {
  const { foregroundColor, level, fontSize } = props;

  const renderReadability = (background, foreground) => {
    return tinycolor.readability(background, foreground).toFixed(5);
  }

  const renderGrade = (background, foreground) => {
    const passed = tinycolor.isReadable(background, foreground, { level: level, size: fontSize });
    return <span className={passed ? 'pass-text' : 'fail-text'}>{passed ? "Pass" : "Fail"}</span>;
  }

    return (
      <div>
        {bgColors.map((bg, i) => {
          return <code style={{ backgroundColor: bg.value, color: foregroundColor }} key={i}>{bg.name}: {renderReadability(bg.value, foregroundColor)} {renderGrade(bg.value, foregroundColor)}</code>;
        })}
      </div>
    );
}

export default WcagChecker;
