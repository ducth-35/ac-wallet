import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHandPointDown(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 2v5.594l-6.719 6.781-.281.313v.406C3 16.71 4.23 18 5.656 18c1.336 0 2.328-.469 2.969-.938.402-.293.469-.421.625-.625l.75-.187V27c0 1.645 1.355 3 3 3s3-1.355 3-3v-3.563l7.625-1.656A3.016 3.016 0 0026 18.844V2H10zm2 2h12v3H12V4zm-.594 5H24v9.844c0 .476-.313.898-.781 1l-8.438 1.781-.781.188V27c0 .566-.434 1-1 1-.566 0-1-.434-1-1V13.656l-1.25.313-2.25.594-.406.124-.188.344s-.086.18-.437.438c-.352.258-.91.531-1.813.531-.308 0-.48-.172-.562-.594L11.406 9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHandPointDown;
