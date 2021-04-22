import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFontSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 6L8 26h2l2.094-6h7.812L22 26h2L17 6h-2zm1 2.844L19.188 18h-6.375L16 8.844z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFontSolid;
