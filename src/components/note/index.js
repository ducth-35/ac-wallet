import React from 'react';
import { View, Text } from 'react-native';

import { useTranslation } from '@/hooks';

import styles from './styles';

export const Note = ({ coinId, containerStyle = {} }) => {
  const { t } = useTranslation();

  const renderVndtNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>{t('vndt_note_1')}</Text>
        <Text style={styles.noteMessage}>{t('vndt_note_2')}</Text>
      </View>
    );
  };

  const renderBTCNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 2)}
        </Text>
      </View>
    );
  };

  const renderETHNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 20)}
        </Text>
      </View>
    );
  };

  const renderXRPNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 20)}
        </Text>
        <Text style={styles.noteMessage}>
          {t('note_2')
            .replace(/#LIMIT/g, 20)
            .replace(/#COIN_ID/g, 'XRP')
            .replace(/#COIN_NAME/g, 'Ripple')}
        </Text>
      </View>
    );
  };

  const renderXLMNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 20)}
        </Text>
        <Text style={styles.noteMessage}>
          {t('note_2')
            .replace(/#LIMIT/g, 3)
            .replace(/#COIN_ID/g, 'XLM')
            .replace(/#COIN_NAME/g, 'Stellar Lumen')}
        </Text>
      </View>
    );
  };

  const renderUSDTNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 2)}
        </Text>
      </View>
    );
  };

  const renderTRXNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 20)}
        </Text>
      </View>
    );
  };

  const renderUSDFNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 20)}
        </Text>
      </View>
    );
  };

  const renderXENGNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 20)}
        </Text>
      </View>
    );
  };

  const renderCENTNote = () => {
    return (
      <View style={[styles.noteContainer, containerStyle]}>
        <Text style={styles.noteTitle}>{t('note')}</Text>
        <Text style={styles.noteMessage}>
          {t('note_1').replace(/#LIMIT/g, 5)}
        </Text>
      </View>
    );
  };

  switch (coinId) {
    case 'vndt':
      return renderVndtNote();
    case 'btc':
      return renderBTCNote();
    case 'eth':
      return renderETHNote();
    case 'xrp':
      return renderXRPNote();
    case 'xlm':
      return renderXLMNote();
    case 'usdt':
      return renderUSDTNote();
    case 'trx':
      return renderTRXNote();
    case 'usdf':
      return renderUSDFNote();
    case 'xeng':
      return renderXENGNote();
    case 'cent':
      return renderCENTNote();
    default:
      return null;
  }
};
