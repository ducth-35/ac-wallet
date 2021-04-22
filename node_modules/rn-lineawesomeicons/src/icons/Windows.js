import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWindows(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M27 5L5 7.992v16.016L27 27V5zm-2 2.29V15H15V8.65l10-1.36zM13 8.921V15H7V9.738l6-.816zM7 17h6v6.078l-6-.816V17zm8 0h10v7.71l-10-1.36V17z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWindows;
