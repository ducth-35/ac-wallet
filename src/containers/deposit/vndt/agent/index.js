import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  Platform,
} from 'react-native';

import { isEmpty } from 'lodash';

import { TouchableX } from '@/components';
import { useAppContext, useTranslation } from '@/hooks';
import {
  ICO_AGENCY_MA,
  ICO_AGENCY_SA,
  ICO_TELEGRAM,
  ICO_SKYPE,
  ICO_FACEBOOK,
  ICO_ZALO,
  showLoading,
} from '@/common';
import { Colors, actuatedNormalize } from '@/themes';
import { formatCommaNumber } from '@/utils';
import { phonecall, sendEmail, openWeb } from '@/services';

import styles from './styles';

export const AgentScreen = () => {
  const { t } = useTranslation();
  const { getSystemAgencies, systemAgencies } = useAppContext();

  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const isLoading = isEmpty(systemAgencies) ? true : false;

    if (isLoading) {
      showLoading();
    }

    const res = await getSystemAgencies();

    console.log('Get systemAgencies: ', res);

    setIsRefreshing(false);
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getData();
  };

  const renderHeaderItem = () => {
    return (
      <View style={styles.listHeaderContainer}>
        <Text style={styles.headerText}>{t('deposit_agent_message')}</Text>
      </View>
    );
  };

  const onSendEmail = (email) => {
    if (!isEmpty(email)) {
      sendEmail([email], null, null, null, '');
    }
  };

  const onCallToPhoneNumber = (phoneNumber) => {
    if (!isEmpty(phoneNumber)) {
      phonecall(phoneNumber, true);
    }
  };

  const onConnectToTelegram = (telegram) => {
    if (!isEmpty(telegram)) {
      openWeb(`https://t.me/${telegram}`);
    }
  };

  const onConnectToSkype = (skype) => {
    if (!isEmpty(skype)) {
      openWeb(`skype:${skype}?chat`);
    }
  };

  const onConnectToFacebook = (fb) => {
    if (!isEmpty(fb)) {
      const scheme = Platform.select({
        ios: 'fb://profile/',
        android: 'fb://page/',
      });

      openWeb(`${scheme}${fb}`);
    }
  };

  const onConnectToZalo = (zalo) => {
    if (!isEmpty(zalo)) {
      openWeb(`https://zalo.me/${zalo}`);
    }
  };

  const renderAgenciesItem = ({ item, index }) => {
    let logoName = null;

    if (item.name.toLowerCase().includes('ma')) {
      logoName = ICO_AGENCY_MA;
    } else if (item.name.toLowerCase().includes('sa')) {
      logoName = ICO_AGENCY_SA;
    }

    const contact = JSON.parse(item.contact);

    const { email, phone, skype, telegram, facebook } = contact || {};

    return (
      <View
        style={[
          styles.itemContainer,
          { marginTop: index !== 0 ? actuatedNormalize(15) : 0 },
        ]}>
        {logoName && (
          <Image style={styles.logo} source={logoName} resizeMode="contain" />
        )}
        <Text style={styles.name}>{item.name}</Text>
        <View style={[styles.row, { marginTop: 5 }]}>
          <Text style={styles.leftText}>{t('guarantee_amount')}</Text>
          <Text style={[styles.rightText, { color: Colors.RED }]}>
            {formatCommaNumber(item.guaranteeAmount)} VNDT
          </Text>
        </View>

        <View style={[styles.row, { marginTop: 10 }]}>
          <Text style={styles.leftText}>{t('email')}:</Text>
          <TouchableX onPress={() => onSendEmail(email)}>
            <Text style={styles.rightText}>{email}</Text>
          </TouchableX>
        </View>
        <View style={[styles.row, { marginTop: 5 }]}>
          <Text style={styles.leftText}>{t('phone_number')}:</Text>
          <TouchableX onPress={() => onCallToPhoneNumber(phone)}>
            <Text style={styles.rightText}>{phone}</Text>
          </TouchableX>
        </View>

        <View style={[styles.row, { marginTop: 20 }]}>
          <TouchableX onPress={() => onConnectToTelegram(telegram)}>
            <Image
              style={styles.socialIcon}
              source={ICO_TELEGRAM}
              resizeMode="contain"
            />
          </TouchableX>

          <TouchableX
            style={{ marginLeft: 10 }}
            onPress={() => onConnectToSkype(skype)}>
            <Image
              style={styles.socialIcon}
              source={ICO_SKYPE}
              resizeMode="contain"
            />
          </TouchableX>

          <TouchableX
            style={{ marginLeft: 10 }}
            onPress={() => onConnectToFacebook(facebook)}>
            <Image
              style={styles.socialIcon}
              source={ICO_FACEBOOK}
              resizeMode="contain"
            />
          </TouchableX>

          <TouchableX
            style={{ marginLeft: 10 }}
            onPress={() => onConnectToZalo(phone)}>
            <Image
              style={styles.socialIcon}
              source={ICO_ZALO}
              resizeMode="contain"
            />
          </TouchableX>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scrollView}
        data={systemAgencies}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        ListHeaderComponent={renderHeaderItem}
        renderItem={renderAgenciesItem}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={onRefresh}
            tintColor="white"
          />
        }
      />
    </View>
  );
};
