import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgInboxSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7.156 5L7 5.844l-2 13V27h22v-8.156l-2-13L24.844 5H7.156zm1.719 2h14.25l1.688 11H18v1c0 1.117-.883 2-2 2s-2-.883-2-2v-1H7.187L8.876 7zM7 20h5.188c.453 1.71 1.964 3 3.812 3 1.848 0 3.36-1.29 3.813-3H25v5H7v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgInboxSolid;
