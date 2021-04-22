import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFilmSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4v24h24V4H4zm2 2h2v1h2V6h12v1h2V6h2v20h-2v-1h-2v1H10v-1H8v1H6V6zm2 3v2h2V9H8zm14 0v2h2V9h-2zM8 13v2h2v-2H8zm14 0v2h2v-2h-2zM8 17v2h2v-2H8zm14 0v2h2v-2h-2zM8 21v2h2v-2H8zm14 0v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFilmSolid;
