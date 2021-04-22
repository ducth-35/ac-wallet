import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHtml5(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5.219 4l.093 1.094 1.75 19.781.063.688.656.187 7.938 2.219.25.062.281-.062 7.938-2.188.656-.187.062-.688 1.782-19.812.093-1.063h-1.093L6.313 4H5.218zm2.187 2l17.188.031-1.625 18L16 25.97 9 24.03 7.406 6zm2.407 3l.656 7.469h8.562l-.281 3.218-2.75.75h-.031l-2.75-.75-.156-2.062h-2.5l.343 3.969L15.97 23H16l5.063-1.406L21.75 14h-9.031l-.219-2.531h9.469L22.187 9H9.813z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHtml5;
