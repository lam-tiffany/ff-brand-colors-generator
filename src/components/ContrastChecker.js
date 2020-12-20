import React from 'react';
import tinycolor from 'tinycolor2';

const ContrastChecker = (props) => {
  const { foregroundColor, level, fontSize } = props;
  const bgColors = [
    { name: "ff-white", value: "#ffffff" },
    { name: "ff-light-grey", value: "#eeeeee" },
    { name: "ff-alice-blue", value: "#f4f7fb" },
    { name: "ff-grey", value: "#d3d3d3" },
    { name: "ff-dark-grey", value: "#6c6c6c" },
    { name: "ff-black", value: "#000000" },
  ]

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
          return <code style={{ backgroundColor: bg.value, color: foregroundColor }}>{bg.name}: {renderReadability(bg.value, foregroundColor)} {renderGrade(bg.value, foregroundColor)}</code>;
        })}
      </div>
    );
}

export default ContrastChecker;
