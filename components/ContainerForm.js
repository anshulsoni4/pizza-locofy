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
const ContainerForm = ({
  cartId,
  cartText,
  cartIconText,
  profileText,
  propZIndex,
  onNavigationmenuHomePress,
  onNavigationmenuHomePress1,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("zIndex", propZIndex),
    };
  }, [propZIndex]);

  return (
    <View style={[styles.navigationmenuHomeParent, frameView1Style]}>
      <Pressable
        style={styles.navigationmenuSpaceBlock}
        onPress={onNavigationmenuHomePress}
      >
        <Image style={styles.cartIcon} resizeMode="cover" source={cartId} />
        <Text style={styles.cart}>{cartText}</Text>
      </Pressable>
      <Pressable
        style={[styles.navigationmenuHome1, styles.navigationmenuSpaceBlock]}
        onPress={onNavigationmenuHomePress1}
      >
        <Image
          style={styles.cartIcon}
          resizeMode="cover"
          source={cartIconText}
        />
        <Text style={styles.cart}>{profileText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationmenuSpaceBlock: {
    alignItems: "center",
    paddingVertical: Padding.p_smi_5,
    paddingHorizontal: Padding.p_mini,
  },
  cartIcon: {
    width: 24,
    height: 24,
  },
  cart: {
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
    zIndex: 1,
  },
});

export default ContainerForm;
