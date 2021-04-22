import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';
import { isArray, sortBy } from 'lodash';

import { NavTitleHeader } from '@/components';
import { useTranslation } from '@/hooks';
import { SUPPORTED_COINS } from '@/common';
import { Colors } from '@/themes';

import { MyAccounts } from './my-accounts';
import { Contacts } from './contacts';
import styles from './styles';

export const AddressBookScreen = () => {
  const { t } = useTranslation();

  const [selectedCoin, setSelectedCoin] = useState('btc');
  const [selectedIndexTab, setSelectedIndexTab] = useState(0);
  const [coins, setCoins] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    let tmpCoins = [...SUPPORTED_COINS];
    const sortedCoins = sortBy(tmpCoins, [
      (o) => {
        return o.order;
      },
    ]);

    setCoins(sortedCoins);
  }, []);

  const headers = [
    { id: 1, title: t('my_accounts') },
    { id: 2, title: t('contacts') },
  ];

  const renderCoinItems = ({ item }) => {
    return (
      <View style={styles.itemContent}>
        <TouchableOpacity
          style={[
            styles.itemContainer,
            {
              backgroundColor:
                selectedCoin === item.id
                  ? 'rgba(100,119,135,0.3)'
                  : 'transparent',
            },
          ]}
          onPress={() => setSelectedCoin(item.id)}>
          <Image style={styles.icon} source={item.icon} resizeMode="contain" />
          <Text style={styles.coinName} numberOfLines={1} >{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onChangeSelectedTab = (index) => {
    setSelectedIndexTab(index);
    if (swiperRef.current) {
      swiperRef.current.scrollToIndex({ index: index });
    }
  };

  const renderHeaderItem = (item, index) => {
    return (
      <TouchableOpacity
        key={`${item.id}-${index}`}
        style={styles.tabHeaderItemContainer}
        onPress={() => onChangeSelectedTab(index)}>
        <Text
          style={[
            styles.tabItemTitle,
            {
              color:
                selectedIndexTab === index
                  ? Colors.WHITE
                  : 'rgba(255,255,255,0.5)',
            },
          ]}>
          {item.title}
        </Text>
        <View
          style={[
            styles.indicatorLine,
            {
              backgroundColor:
                selectedIndexTab === index ? Colors.BLUE : 'transparent',
            },
          ]}
        />
      </TouchableOpacity>
    );
  };

  const renderTabContentItem = (item, index) => {
    return (
      <View style={styles.tabItemcontainer} key={`${item.id}-${index}`}>
        {index === 0 ? (
          <MyAccounts selectedCoin={selectedCoin} />
        ) : (
            <Contacts selectedCoin={selectedCoin} />
          )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavTitleHeader
        containerStyle={styles.navHeader}
        title={t('tab_address_book')}
      />
      <View style={styles.coinsContainer}>
        <FlatList
          style={styles.list}
          data={coins}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={renderCoinItems}
          horizontal={false}
          numColumns={5}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.tabHeader}>
          {headers.map((item, index) => renderHeaderItem(item, index))}
        </View>
        <View style={styles.tabContentContainer}>
          <SwiperFlatList
            ref={swiperRef}
            style={styles.wrapper}
            pagingEnabled
            showsPagination={false}
            threshold={100}
            onChangeIndex={({ index }) => {
              setSelectedIndexTab(index);
            }}>
            {headers.map((item, index) => renderTabContentItem(item, index))}
          </SwiperFlatList>
        </View>
      </View>
    </View>
  );
};
