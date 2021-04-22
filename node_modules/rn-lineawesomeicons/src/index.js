import React from 'react';
import * as LineAwesome from './icons';

const RNLineAwesomeIcons = ({icon, height, width, fill, stroke}) => {
  /**
   *This function transform web icon name to react native icon name
   * thanks for reduce action https://stackoverflow.com/a/57685083
   * @param {*} {icon}
   * @returns icon name
   */
  const transformedIconName = icon
    .split('la-')[1]
    .split('-')
    .reduce(
      (accumulatedString, currentWord) =>
        accumulatedString.concat(
          currentWord[0].toUpperCase() + currentWord.slice(1),
        ),
      [],
    )
    .join('');
  let Icon = LineAwesome[transformedIconName];
  /**
   * Some icon names don't match react native icon  component names.I add 'Solid' end of name.
   * @param {*} {transformedIconName}
   * @returns transformedIconName+'Solid'
   */
  if (Icon == undefined) Icon = LineAwesome[transformedIconName + 'Solid'];
  return <Icon height={height} width={width} fill={fill} stroke={stroke} />;
};

export default RNLineAwesomeIcons;
