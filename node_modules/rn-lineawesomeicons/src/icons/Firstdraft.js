import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFirstdraft(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 4v18h6v-6h6v-6h6V4H7zm14 8v6h-6v6H7v1h9v-6h6v-6h3v-1h-4zm3 3v6h-6v6h-8v1h9v-6h6v-7h-1zm-3 9v4h1v-3h3v-1h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFirstdraft;
