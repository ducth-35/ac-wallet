import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSdCardSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9.5 5l-.313.406L6 9.656V27h19V5H9.5zm1 2H23v18H8V10.344L10.5 7zM13 9v4h2V9h-2zm3 0v4h2V9h-2zm3 0v4h2V9h-2zm-9 1v4h2v-4h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSdCardSolid;
