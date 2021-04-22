import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgImageSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 5v22h28V5H2zm2 2h24v13.906l-5.281-5.312-.719-.719-4.531 4.531-5.75-5.812-.719-.719-7 7V7zm20 2a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm-13 6.719L20.188 25H4v-2.281l7-7zm11 2l6 6V25h-4.969l-4.156-4.188L22 17.72z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgImageSolid;
