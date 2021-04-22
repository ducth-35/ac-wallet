import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUndoSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12.781 5.281l-8 8-.687.719.687.719 8 8 1.438-1.438L7.938 15H21c2.754 0 5 2.246 5 5v7h2v-7c0-3.844-3.156-7-7-7H7.937l6.282-6.281L12.78 5.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUndoSolid;
