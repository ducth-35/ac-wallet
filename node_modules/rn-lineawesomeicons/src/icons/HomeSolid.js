import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHomeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2.594l-.719.687-13 13L3.72 17.72 5 16.437V28h9V18h4v10h9V16.437l1.281 1.282 1.438-1.438-13-13L16 2.594zm0 2.844l9 9V26h-5V16h-8v10H7V14.437l9-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHomeSolid;
