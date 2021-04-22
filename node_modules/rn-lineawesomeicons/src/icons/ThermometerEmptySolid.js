import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgThermometerEmptySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 5v11c-1.738 1.05-3 2.828-3 5 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.172-1.262-3.95-3-5v-1h2v-2h-2v-2h2V9h-2V7h2V5h-8zm2 2h2v10.063l.594.28A3.986 3.986 0 0120 21c0 2.219-1.781 4-4 4-2.219 0-4-1.781-4-4 0-1.648.996-3.04 2.406-3.656l.594-.282V7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgThermometerEmptySolid;
