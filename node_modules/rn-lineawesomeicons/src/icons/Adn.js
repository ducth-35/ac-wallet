import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAdn(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm0 3.938l-6.594 9.906H11l1.531-2.313h6.938l1.562 2.313h1.594L16 9.937zm0 2.406l2.844 4.25h-5.688L16 12.344z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAdn;
