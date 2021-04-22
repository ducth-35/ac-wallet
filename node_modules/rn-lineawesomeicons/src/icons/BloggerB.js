import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBloggerB(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 7a6 6 0 00-6 6v7a6 6 0 006 6h7a6 6 0 006-6v-5a1 1 0 00-1-1h-1a1 1 0 01-1-1 6 6 0 00-6-6h-4zm0 5h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1zm0 7h7c.55 0 1 .45 1 1s-.45 1-1 1h-7c-.55 0-1-.45-1-1s.45-1 1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBloggerB;
