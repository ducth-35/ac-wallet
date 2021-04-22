import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArchiveSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 5v6h1v16h22V11h1V5H4zm2 2h20v2H6V7zm1 4h18v14H7V11zm5.813 2c-.551.05-.958.543-.907 1.094.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H12.812z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArchiveSolid;
