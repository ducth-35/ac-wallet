import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMonumentSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm0 4h-4v2h1.469l-.438 10H10v6H8v2h16v-2h-2v-6h-3.031l-.438-10H20V8h-4zm-.531 2h1.062l.438 10H15.03l.438-10zM12 22h8v4h-8v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMonumentSolid;
