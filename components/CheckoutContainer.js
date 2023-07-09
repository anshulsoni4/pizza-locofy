import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CheckoutContainer = ({
  checkoutButtonText,
  propTop,
  propLeft,
  onGroupPressablePress,
}) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Pressable
      style={[styles.cartInner, groupPressableStyle]}
      onPress={onGroupPressablePress}
    >
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <View style={styles.groupPosition}>
            <View style={[styles.groupChild, styles.groupPosition]} />
          </View>
          <Text style={styles.checkout}>{checkoutButtonText}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    left: 0,
    top: 0,
    height: 45,
    width: 181,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.red_100,
    shadowColor: "#ed8e92",
    shadowOffset: {
      width: 5,
      height: 9,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  checkout: {
    top: 11,
    left: 32,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
    textAlign: "center",
    width: 117,
    height: 24,
    position: "absolute",
  },
  cartInner: {
    top: 671,
    left: 167,
    height: 45,
    width: 181,
    position: "absolute",
  },
});

export default CheckoutContainer;
