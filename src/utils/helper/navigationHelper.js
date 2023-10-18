export const resetToGivenScreen = (navigation, screenName) => {
  navigation.reset({
    index: 0,
    routes: [
      {
        name: screenName,
      },
    ],
  });
};

export const navigateToGivenScreen = (navigation, screenName) =>
  navigation.navigate(screenName);

export const navigateToGivenScreenWithParams = (
  navigation,
  screenName,
  params,
) => navigation.navigate(screenName, params);

export const checkAndGoBack = navigation => {
  if (navigation.canGoBack()) {
    navigation.goBack();
  }
};
