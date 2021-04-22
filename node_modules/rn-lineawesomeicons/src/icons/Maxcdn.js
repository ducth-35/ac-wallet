import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMaxcdn(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 6l2 5-3 15h5l3-15h4l-3 15h5l3-15h4l-3 15h5l2.75-13.742C30.395 9.02 27.922 6 24.617 6H5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMaxcdn;
