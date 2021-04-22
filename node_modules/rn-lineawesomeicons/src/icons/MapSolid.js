import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMapSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M28 4.469l-1.406.625-6.625 2.843-7.625-2.875-.375-.125-.375.157-7 3-.594.25V27.53l1.406-.625 6.625-2.843 7.625 2.875.375.125.375-.157 7-3 .594-.25V4.47zM13 7.437l6 2.25v14.876l-6-2.25V7.438zM11 7.5v14.844L6 24.5V9.656L11 7.5zm15 0v14.844L21 24.5V9.656L26 7.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMapSolid;
