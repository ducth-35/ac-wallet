import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFilterSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 4v2.344l.219.281L13 16.344V28l1.594-1.188 4-3L19 23.5v-7.156l7.781-9.719.219-.281V4H5zm2.281 2H24.72l-7.188 9H14.47L7.28 6zM15 17h2v5.5L15 24v-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFilterSolid;
