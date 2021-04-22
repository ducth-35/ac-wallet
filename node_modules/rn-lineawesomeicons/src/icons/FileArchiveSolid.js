import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileArchiveSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V3H6zm2 2h7v1h2V5h7v22H8V5zm7 2v2h2V7h-2zm0 3v2h2v-2h-2zm0 3v2.188c-1.156.417-2 1.519-2 2.812 0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.293-.844-2.395-2-2.813V13h-2zm1 4c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileArchiveSolid;
