import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAffiliatetheme(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12.104 5c-1.867.016-4.728 1.95-7.067 4.955-2.879 3.7-3.89 7.604-2.256 8.74 1.634 1.126 5.303-.962 8.182-4.66 2.879-3.699 3.89-7.602 2.256-8.728-.307-.211-.685-.31-1.115-.307zm17.88 6c-3.8 6.359-9.896 9.542-13.625 7.266-1.284-.786-2.074-2.451-2.365-4.266-1.976 3.66-5.786 6.903-9.994 8 2.681 3.188 6.838 5 11.315 5C23.4 27 29.96 20.378 29.96 12.201c.01-.459.066-.764.023-1.201z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAffiliatetheme;
