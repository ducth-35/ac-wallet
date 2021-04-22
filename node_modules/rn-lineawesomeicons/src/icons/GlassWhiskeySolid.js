import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGlassWhiskeySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4.818 7l3.334 20h15.696L27.18 7H4.818zm2.364 2H24.82l-1.666 10H10.67l.33 2h11.82l-.666 4H9.848L7.182 9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGlassWhiskeySolid;
