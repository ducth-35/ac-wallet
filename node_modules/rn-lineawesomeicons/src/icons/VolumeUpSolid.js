import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVolumeUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 3.594L15.281 5.28 9.562 11H5v10h4.563l5.718 5.719L17 28.406V3.594zm6.813 4.594l-1.407 1.406a8.942 8.942 0 010 12.687l1.407 1.438c4.28-4.282 4.28-11.25 0-15.532zM15 8.438v15.124l-4.281-4.28-.313-.282H7v-6h3.406l.313-.281L15 8.438zm5.906 2.656L19.5 12.5c1.91 1.91 1.902 5.074-.031 7.094L20.937 21c2.665-2.781 2.657-7.219-.03-9.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVolumeUpSolid;
