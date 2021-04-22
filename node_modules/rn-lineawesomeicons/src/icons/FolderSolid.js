import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFolderSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V15.437l1.719-1.718.281-.313V3H6zm2 2h14v8.406l.281.313L24 15.438V27H8V5zm16 0h2v7.563l-1 1-1-1V5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFolderSolid;
