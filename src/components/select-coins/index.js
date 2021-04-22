import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import { actuatedNormalize } from '@/themes';

import styles from './styles';

export const SelectCoins = ({ coins, containerStyle, onSelected }) => {
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    if (selectedCoin) {
      onSelected && onSelected(selectedCoin);
    }
  }, [selectedCoin]);

  const renderCoinItems = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={[
            styles.itemContent,
            {
              backgroundColor:
                selectedCoin?.id === item.id
                  ? 'rgba(100,119,135,0.3)'
                  : 'transparent',
            },
          ]}
          onPress={() => setSelectedCoin(item)}>
          <Image style={styles.icon} source={item.icon} resizeMode="contain" />
          <Text style={styles.coinName} numberOfLines={1}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        style={styles.list}
        data={coins}
        numColumns={5}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderCoinItems}
        scrollEnabled={false}
      />
    </View>
  );
};
