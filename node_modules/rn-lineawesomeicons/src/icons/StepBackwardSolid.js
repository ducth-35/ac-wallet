import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStepBackwardSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 5v22h2V16.5l.438.313 13 9L25 26.905V5.094l-1.563 1.093-13 9L10 15.5V5H8zm15 3.906v14.188L12.75 16 23 8.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStepBackwardSolid;
