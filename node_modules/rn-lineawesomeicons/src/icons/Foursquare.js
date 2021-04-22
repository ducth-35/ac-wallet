import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFoursquare(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 5c-1.094 0-2 .906-2 2v18.719c0 .508.36.972.781 1.125.414.148.985.027 1.313-.344l6.312-7.5h3.438a2.03 2.03 0 001.968-1.625l1.938-10C23.984 6.16 23.02 5 21.781 5H10zm0 2h11.781L21 11h-6.531a.48.48 0 00-.469.469v1.062c0 .25.219.469.469.469h6.156l-.781 4h-3.938a.999.999 0 00-.781.344L10 23.5V7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFoursquare;
