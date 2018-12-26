import './css/SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's go outside.",
    iconName: 'sun'
  },
  winter: {
    text: 'Brrr, it is cold outside.',
    iconName: 'snowflake'
  }
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <div>
        <i className={iconName + ' icon icon-left'} />
        <i className={iconName + ' icon icon-right'} />
      </div>
      <div
        style={{
          textAlign: 'center',
          height: '100vh',
          fontSize: '2em',
          lineHeight: '100vh'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default SeasonDisplay;
