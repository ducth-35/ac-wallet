import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCarBatterySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 6v2h4V6H8zm12 0v2h4V6h-4zM4 9v18h24V9H4zm2 2h20v14H6V11zm14 4v2h-2v2h2v2h2v-2h2v-2h-2v-2h-2zM8 17v2h6v-2H8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCarBatterySolid;
