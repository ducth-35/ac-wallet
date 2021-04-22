import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCodeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18 5l-6 22h2l6-22h-2zM7.937 6.406l-6.75 9L.75 16l.438.594 6.75 9 1.625-1.188L3.25 16l6.313-8.406-1.626-1.188zm16.125 0l-1.625 1.188L28.75 16l-6.313 8.406 1.625 1.188 6.75-9L31.25 16l-.438-.594-6.75-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCodeSolid;
