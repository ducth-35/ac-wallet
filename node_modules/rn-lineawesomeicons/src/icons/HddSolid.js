import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHddSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.219 6L3 18.875V26h26v-7.125L25.781 6H6.22zM7.78 8H24.22l2.5 10H5.28l2.5-10zM5 20h22v4H5v-4zm19 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHddSolid;
