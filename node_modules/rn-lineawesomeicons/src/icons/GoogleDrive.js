import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGoogleDrive(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.438 5l-.282.469-8 13-.312.5.281.531 4 7 .281.5h17.188l.281-.5 4-7 .281-.531-.312-.5-8-13L20.562 5h-9.125zm2.343 2h5.656l6.782 11h-5.657l-6.78-11zM12 7.906l2.969 4.844L8.03 24.031 5.156 19 12 7.906zm4.156 6.75L18.22 18h-4.125l2.062-3.344zM12.875 20h13.406l-2.875 5H9.781l3.094-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGoogleDrive;
