import { StyleSheet } from 'react-native';

import { Colors, actuatedNormalize, FontFamily } from '@/themes';

const styles = StyleSheet.create({
  titleBackcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: actuatedNormalize(20),
  },

  leftBtn: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: actuatedNormalize(60),
  },

  icon: {
    width: actuatedNormalize(20),
    height: actuatedNormalize(20),
  },

  title: {
    flex: 1,
    fontFamily: FontFamily.TitilliumWeb.SemiBold,
    fontSize: actuatedNormalize(24),
    color: Colors.WHITE,
    textAlign: 'center',
    marginRight: actuatedNormalize(20),
  },

  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: actuatedNormalize(20),
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: actuatedNormalize(10),
  },

  avatarContainer: {
    width: actuatedNormalize(60),
    height: actuatedNormalize(60),
    borderRadius: actuatedNormalize(30),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10
  },

  avatar: {
    width: actuatedNormalize(50),
    height: actuatedNormalize(50),
    borderRadius: actuatedNormalize(25),
    backgroundColor: Colors.LIGHT_GREY,
  },

  userInfoContainer: {
    marginLeft: actuatedNormalize(10),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  userTitle: {
    fontFamily: FontFamily.TitilliumWeb.Regular,
    fontSize: actuatedNormalize(15),
    color: Colors.LIGHT_GREY,
  },

  userName: {
    fontFamily: FontFamily.TitilliumWeb.Bold,
    fontSize: actuatedNormalize(15),
    color: Colors.WHITE,
  },

  menuIcon: {
    width: 20,
    height: 14,
  },

  searchIcon: {
    width: 16,
    height: 16,
  },

  notificationIcon: {
    width: 16,
    height: 19,
  },
});

export default styles;
