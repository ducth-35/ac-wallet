import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleDoubleLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.906 4.781L4.687 16l11.22 11.219 1.405-1.438L7.533 16l9.78-9.781-1.406-1.438zm7 0L11.688 16l11.218 11.219 1.407-1.438L14.53 16l9.781-9.781-1.406-1.438z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleDoubleLeftSolid;
