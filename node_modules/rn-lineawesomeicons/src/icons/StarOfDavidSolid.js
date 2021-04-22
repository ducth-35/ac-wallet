import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStarOfDavidSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2.063l-.844 1.406L11.781 9H3.312l.907 1.531L7.53 16 4.22 21.469 3.312 23h8.47l3.374 5.531.844 1.407.844-1.407L20.219 23h8.562l-.937-1.531L24.5 16l3.344-5.469L28.78 9H20.22l-3.375-5.531L16 2.063zm0 3.843L17.875 9h-3.75L16 5.906zM6.875 11h3.719l-1.875 3.063L6.875 11zm6.031 0h6.219l3.031 5-3.031 5h-6.219l-3-5 3-5zm8.531 0h3.782l-1.875 3.094L21.437 11zm1.907 6.906L25.219 21h-3.782l1.907-3.094zm-14.625.032L10.594 21H6.875l1.844-3.063zM14.125 23h3.75L16 26.094 14.125 23z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStarOfDavidSolid;
