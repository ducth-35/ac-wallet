import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleDoubleRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9.094 4.781L7.688 6.22 17.468 16l-9.78 9.781 1.406 1.438L20.313 16 9.092 4.781zm7 0L14.687 6.22 24.47 16l-9.782 9.781 1.407 1.438L27.312 16 16.095 4.781z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleDoubleRightSolid;
