import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStickyNote(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h15.406l.313-.281 6-6 .281-.313V5H5zm2 2h18v12h-6v6H7V7zm14 14h2.563L21 23.563V21z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStickyNote;
