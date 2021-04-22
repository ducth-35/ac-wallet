import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPollSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm8 3v12h2V10h-2zm-5 4v8h2v-8h-2zm10 2v6h2v-6h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPollSolid;
