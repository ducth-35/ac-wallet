import React from 'react';
import { View, TextInput, Image } from 'react-native';

import { Colors } from '@/themes';

import styles from './styles';

export const IconInput = ({
  containerStyle,
  icon,
  placeholder,
  onChangeText,
  ...otherInputProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.row}>
        <Image style={styles.icon} source={icon} resizeMode="contain" />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor={Colors.GREY}
          clearButtonMode="while-editing"
          {...otherInputProps}
        />
      </View>

      <View style={styles.line} />
    </View>
  );
};
