import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgExternalLinkAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18 5v2h5.563L11.28 19.281l1.438 1.438L25 8.437V14h2V5h-9zM5 9v18h18V14l-2 2v9H7V11h9l2-2H5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgExternalLinkAltSolid;
