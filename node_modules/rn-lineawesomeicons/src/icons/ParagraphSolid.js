import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgParagraphSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 5c-3.3 0-6 2.7-6 6s2.7 6 6 6h4v10h2V7h2v20h2V7h2V5H12zm0 2h4v8h-4c-2.219 0-4-1.781-4-4 0-2.219 1.781-4 4-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgParagraphSolid;
