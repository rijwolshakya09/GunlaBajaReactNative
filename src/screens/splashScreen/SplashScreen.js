import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logo from '../../assets/logo/dipankarpppng.png';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../styles';
import {navigateToGivenScreen} from '../../utils/helper/navigationHelper';
import {navScreenNames} from '../../constant';

const SplashScreen = () => {
  const animatedValue = useRef(new Animated.Value(-WINDOW_HEIGHT)).current;
  const navigation = useNavigation();

  useEffect(() => {
    const fadeInAnimation = Animated.timing(animatedValue, {
      toValue: 0,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    fadeInAnimation.start(() => {
      // Animation completed, navigate to the home screen
      navigateToGivenScreen(navigation, navScreenNames.NAV_HOME_SCREEN);
    });

    return () => fadeInAnimation.stop(); // Cleanup animation on component unmount
  }, [animatedValue, navigation]);

  const opacity = animatedValue.interpolate({
    inputRange: [-WINDOW_HEIGHT, 0],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, {opacity}]}>
        <Image source={logo} style={styles.logoStyle} resizeMode="contain" />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    height: WINDOW_HEIGHT < 385 ? '50%' : '50%',
    width: WINDOW_WIDTH < 385 ? '100%' : '100%',
  },
});

export default SplashScreen;
