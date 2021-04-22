import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRedoSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19.219 5.281L17.78 6.72 24.063 13H11c-3.844 0-7 3.156-7 7v7h2v-7c0-2.754 2.246-5 5-5h13.063l-6.282 6.281 1.438 1.438 8-8 .687-.719-.687-.719-8-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRedoSolid;
