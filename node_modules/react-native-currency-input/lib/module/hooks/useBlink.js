import * as React from 'react';
export default (blinkProps => {
  const {
    blinkRate = 500
  } = blinkProps || {};
  const [visible, setVisible] = React.useState(true);
  const interval = React.useRef();
  React.useEffect(() => {
    interval.current = setInterval(() => {
      setVisible(prevVisible => !prevVisible);
    }, blinkRate);
    return () => {
      interval.current && clearInterval(interval.current);
    };
  }, [blinkRate]);
  return visible;
});
//# sourceMappingURL=useBlink.js.map