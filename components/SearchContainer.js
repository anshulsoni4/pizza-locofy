import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SearchContainer = ({
  iconText,
  navigationText,
  navigationIconText,
  navigationSearchText,
  homeZIndex,
  onNavigationmenuHomePress,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("zIndex", homeZIndex),
    };
  }, [homeZIndex]);

  return (
    <View style={[styles.navigationmenuHomeParent, frameViewStyle]}>
      <Pressable
        style={styles.navigationmenuSpaceBlock}
        onPress={onNavigationmenuHomePress}
      >
        <Image style={styles.homeIcon} resizeMode="cover" source={iconText} />
        <Text style={styles.home}>{navigationText}</Text>
      </Pressable>
      <View
        style={[styles.navigationmenuHome1, styles.navigationmenuSpaceBlock]}
      >
        <Image
          style={styles.homeIcon}
          resizeMode="cover"
          source={navigationIconText}
        />
        <Text style={styles.home}>{navigationSearchText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationmenuSpaceBlock: {
    alignItems: "center",
    paddingVertical: Padding.p_smi_5,
    paddingHorizontal: Padding.p_mini,
  },
  homeIcon: {
    width: 24,
    height: 24,
  },
  home: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.sFProTextRegular,
    color: Color.darkgray_100,
    textAlign: "left",
    marginTop: 12,
  },
  navigationmenuHome1: {
    marginLeft: 8,
  },
  navigationmenuHomeParent: {
    flexDirection: "row",
    zIndex: 0,
  },
});

export default SearchContainer;
