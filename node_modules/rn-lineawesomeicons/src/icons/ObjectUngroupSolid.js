import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgObjectUngroupSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v4h1v10H5v4h4v-1h2v2h-1v4h4v-1h10v1h4v-4h-1V14h1v-4h-4v1h-2V9h1V5h-4v1H9V5H5zm4 3h10v1h1v10h-1v1H9v-1H8V9h1V8zm13 5h2v1h1v10h-1v1H14v-1h-1v-2h6v1h4v-4h-1v-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgObjectUngroupSolid;
