import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBookmark(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 5v23l1.594-1.188L16 21.25l7.406 5.563L25 28V5H7zm2 2h14v17l-6.406-4.813L16 18.75l-.594.438L9 24V7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBookmark;
