import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStepForwardSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M22 5v10.5l-.438-.313-13-9L7 5.095v21.812l1.563-1.093 13-9L22 16.5V27h2V5h-2zM9 8.906L19.25 16 9 23.094V8.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStepForwardSolid;
