import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCropAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 4v4H4v2h4v14h14v4h2v-4h4v-2H10V4H8zm4 4v2h10v10h2V8H12z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCropAltSolid;
