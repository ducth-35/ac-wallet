import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSave(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V9.594l-.281-.313-4-4L22.406 5H5zm2 2h3v6h12V7.437l3 3V25h-2v-9H9v9H7V7zm5 0h4v2h2V7h2v4h-8V7zm-1 11h10v7H11v-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSave;
