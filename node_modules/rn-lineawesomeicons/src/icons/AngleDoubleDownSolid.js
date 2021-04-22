import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngleDoubleDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5.219 6.688L3.78 8.094 16 20.313l12.219-12.22-1.438-1.405L16 17.468 5.219 6.689zm0 7L3.78 15.094 16 27.313l12.219-12.22-1.438-1.405L16 24.468 5.219 13.689z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngleDoubleDownSolid;
