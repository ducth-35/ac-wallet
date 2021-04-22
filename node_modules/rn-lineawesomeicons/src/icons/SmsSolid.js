import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSmsSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 5v20h5v5.094l1.625-1.313L13.344 25H30V5H2zm2 2h24v16H12.656l-.281.219L9 25.906V23H4V7zm4 5v2h16v-2H8zm0 4v2h12v-2H8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSmsSolid;
