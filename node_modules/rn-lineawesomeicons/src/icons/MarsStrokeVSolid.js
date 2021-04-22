import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMarsStrokeVSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 1.594l-.719.687-6 6L10.72 9.72 15 5.438V10h-3v2h3v2.063c-3.934.5-7 3.87-7 7.937 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-4.066-3.066-7.438-7-7.938V12h3v-2h-3V5.437l4.281 4.282L22.72 8.28l-6-6L16 1.594zM16 16c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMarsStrokeVSolid;
