import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgYandexInternational(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M20.8 1l-5.6 16.2-5-13.2H7l7 18.6V31h3v-9.9L24 1h-3.2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgYandexInternational;
