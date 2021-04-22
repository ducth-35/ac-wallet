import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExclamationSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 4v16h6V4h-6zm2 2h2v12h-2V6zm-2 16v6h6v-6h-6zm2 2h2v2h-2v-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExclamationSolid;
