import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSitemapSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 5v8h3v2H5v4H2v8h8v-8H7v-2h8v2h-3v8h8v-8h-3v-2h8v2h-3v8h8v-8h-3v-4H17v-2h3V5h-8zm2 2h4v4h-4V7zM4 21h4v4H4v-4zm10 0h4v4h-4v-4zm10 0h4v4h-4v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSitemapSolid;
