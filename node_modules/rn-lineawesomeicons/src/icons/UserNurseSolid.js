import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUserNurseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.156 4L10 4.813l-1 5.625V14h.094a7.031 7.031 0 003 4.813C8.527 20.343 6 23.883 6 28h2a7.988 7.988 0 013-6.25v.656l.281.313 4 4 .719.687.719-.687 4-4 .281-.313v-.656A7.988 7.988 0 0124 28h2c0-4.117-2.527-7.656-6.094-9.188a7.031 7.031 0 003-4.812H23v-3.563l-1-5.624L21.844 4H10.156zm1.688 2h8.312L21 10.781V12H11v-1.219L11.844 6zM15 7v1h-1v2h1v1h2v-1h1V8h-1V7h-2zm-3.906 7h9.812A5.001 5.001 0 0116 18a5.001 5.001 0 01-4.906-4zM16 20a8.05 8.05 0 013 .563v1l-3 3-3-3v-1A8.05 8.05 0 0116 20z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUserNurseSolid;
