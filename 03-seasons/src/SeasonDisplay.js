import React from 'react';

const seasonConfig = {
  summer: {
    seasonName: "Let's go outside.",
    iconName: 'sun'
  },
  winter: {
    seasonName: 'Brrr, it is cold outside.',
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
  const { seasonName, iconName } = seasonConfig[season];

  return (
    <div>
      <div>
        <i
          className={iconName + ' icon'}
          style={{
            display: 'block',
            position: 'absolute',
            top: 50,
            left: 50,
            fontSize: '4em'
          }}
        />
        <i
          className={iconName + ' icon'}
          style={{
            display: 'block',
            position: 'absolute',
            bottom: 50,
            right: 50,
            fontSize: '4em'
          }}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          height: '100vh',
          fontSize: '2em',
          lineHeight: '100vh'
        }}
      >
        {seasonName}
      </div>
    </div>
  );
};

export default SeasonDisplay;
