import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFolderOpenSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 3v24.813l.781.156 12 2.5 1.219.25V28h6V15.437l1.719-1.718.281-.313V3H5zm9.125 2H25v7.563l-1.719 1.718-.281.313V26h-4v-8.906l-.281-.313L17 15.063V5.719L14.125 5zM7 5.281l8 2v8.625l.281.313L17 17.937v10.344L7 26.188V5.28z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFolderOpenSolid;
