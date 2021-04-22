import React, { useEffect, useState } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';

import { NavMenuHeader } from '@/components';
import { useAppContext } from '@/hooks';

import styles from './styles';

export const HomeScreen = () => {
  const { getCoinRates, getUserWallets } = useAppContext();

  const [isRefreshing, setIsRefreshing] = useState(false);

  const data = [
    { id: 'EquityValue' },
    { id: 'BuySell' },
    { id: 'Transfer' },
    { id: 'Wallet' },
    // { id: 'Features' },
    // { id: 'Banner' },
    // { id: 'Knowledge' },
  ];

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 500);
  }, []);

  const getData = async () => {
    await getCoinRates();
    await getUserWallets();

    setIsRefreshing(false);
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getData();
  };

  const renderItems = ({ item, index }) => {
    const Comp = require('./elements')[`${item.id}`];
    return <Comp />;
  };

  return (
    <View style={styles.container}>
      <NavMenuHeader containerStyle={styles.navHeader} />
      <FlatList
        style={styles.list}
        data={data}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor={'#fff'}
          />
        }
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
