import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSquareRootAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19.313 6l-.25.656-6.157 16.063-3-6.157L9.625 16H6v2h2.375L12 25.438l.281.562h1.5l.25-.656L20.687 8H26V6h-6.688z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSquareRootAltSolid;
