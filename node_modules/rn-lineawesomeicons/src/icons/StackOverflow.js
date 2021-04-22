import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStackOverflow(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19.594 2.844l-1.625 1.125 5.593 8.219 1.625-1.126-5.593-8.218zM15.375 6.53l-1.313 1.5 7.5 6.5 1.313-1.5-7.5-6.5zm-3 4.375l-.906 1.781 8.844 4.5.906-1.78-8.844-4.5zm-1.719 4.531l-.437 1.938 9.656 2.281.438-1.937-9.657-2.282zM6 18v11h18V18h-2v9H8v-9H6zm4.094 1.688l-.125 2 9.906.562.125-2-9.906-.563zM10 23v2h9.938v-2H10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStackOverflow;
