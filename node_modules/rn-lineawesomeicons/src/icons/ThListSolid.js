import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgThListSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 6v20h24V6H4zm2 2h5v4H6V8zm7 0h13v4H13V8zm-7 6h5v4H6v-4zm7 0h13v4H13v-4zm-7 6h5v4H6v-4zm7 0h13v4H13v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgThListSolid;
