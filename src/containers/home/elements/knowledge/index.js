import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import { useAppContext, useTranslation } from '@/hooks';
import { BG_MOCK_KNOWLEDGE_1, BG_MOCK_KNOWLEDGE_2 } from '@/common';

import styles from './styles';

export const Knowledge = () => {
  const { t } = useTranslation();

  const [listData, setListData] = useState([]);

  const mock = [
    {
      id: '1',
      thumbnail: BG_MOCK_KNOWLEDGE_1,
      content: 'How to buy BTC safely with the best price',
    },
    {
      id: '2',
      thumbnail: BG_MOCK_KNOWLEDGE_2,
      content: 'How to buy BTC safely with the best price',
    },
  ];

  const renderKnowledgeItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.thumbnail}
          source={item.thumbnail}
          resizeMode="contain"
        />
        <View style={styles.contentContainer}>
          <Text style={styles.content} numberOfLines={2} ellipsizeMode="tail">
            {item.content}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('knowledge')}</Text>
      <FlatList
        style={styles.list}
        data={mock}
        horizontal={true}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={renderKnowledgeItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
