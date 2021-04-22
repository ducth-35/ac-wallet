import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGitlab(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8.383 1.973l-4.305 11.48-.242.652-2.04 5.438L16 29.875l14.203-10.332-2.039-5.438-4.55-12.132-3.731 11.48h-7.766L8.383 1.973zM8.25 8.027l1.766 5.426H6.215L8.25 8.027zm15.5 0l2.035 5.426h-3.8l1.765-5.426zM5.465 15.453h5.2l3.429 10.563-9.89-7.196 1.26-3.367zm7.3 0h6.47L16 25.403l-3.234-9.95zm8.57 0h5.196l1.266 3.367-9.895 7.196 3.434-10.563z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGitlab;
