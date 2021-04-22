import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMemorySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 7v18h13v-1c0-.555.445-1 1-1 .555 0 1 .445 1 1v1h13V7H2zm2 2h24v9H4V9zm2 2v5h6v-5H6zm7 0v5h6v-5h-6zm7 0v5h6v-5h-6zM8 13h2v1H8v-1zm7 0h2v1h-2v-1zm7 0h2v1h-2v-1zM4 20h24v3h-9.406c-.442-1.11-1.336-2-2.594-2-1.258 0-2.152.89-2.594 2H4v-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMemorySolid;
