import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgToolboxSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 5c-1.094 0-2 .906-2 2v2H2v18h28V9h-9V7c0-1.094-.906-2-2-2h-6zm0 2h6v2h-6V7zm-9 4h24v5h-4v-1h-4v1h-8v-1H8v1H4v-5zm0 7h4v1h4v-1h8v1h4v-1h4v7H4v-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgToolboxSolid;
