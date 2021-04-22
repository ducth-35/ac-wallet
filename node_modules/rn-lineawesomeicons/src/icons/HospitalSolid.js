import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHospitalSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 3v2h-2v2h2v2h2V7h2V5h-2V3h-2zM6 5v23h9v-3h2v3h9V5h-5v2h3v19h-5v-3h-6v3H8V7h3V5H6zm5 6v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHospitalSolid;
