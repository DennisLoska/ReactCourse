import React from 'react';

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const content =
    season === 'winter' ? 'Brrr, it is cold.' : 'Let uss go outside.';
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <div>
        <i
          className={icon + ' icon'}
          style={{
            display: 'block',
            position: 'absolute',
            top: 50,
            left: 50,
            fontSize: '4em'
          }}
        />
        <i
          className={icon + ' icon'}
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
        {content}
      </div>
    </div>
  );
};

export default SeasonDisplay;
