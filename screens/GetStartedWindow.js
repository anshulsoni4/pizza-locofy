import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const GetStartedWindow = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStartedWindow}>
      <Image
        style={styles.getStartedWindowChild}
        resizeMode="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <View
        style={[styles.youngPrettyWomanEatingPizzParent, styles.youngLayout]}
      >
        <Image
          style={[
            styles.youngPrettyWomanEatingPizzIcon,
            styles.getDeliveredAtPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/youngprettywomaneatingpizzapizzabar-1-1.png")}
        />
        <View style={styles.getDeliveredAtYourDoorSteParent}>
          <Text style={[styles.getDeliveredAt, styles.nextFlexBox]}>
            Get Delivered at your door step
          </Text>
          <Text style={[styles.yourFoodAt, styles.nextFlexBox]}>
            Your food at your door step and just click on one step
          </Text>
        </View>
        <Pressable
          style={styles.frameChild}
          onPress={() => navigation.navigate("GetStarted2")}
        />
        <View style={[styles.frameItem, styles.framePosition]} />
        <Image
          style={[styles.frameInner, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  youngLayout: {
    width: 335,
    position: "absolute",
  },
  getDeliveredAtPosition: {
    left: 0,
    top: 0,
  },
  nextFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  framePosition: {
    top: 636,
    height: 7,
    position: "absolute",
  },
  getStartedWindowChild: {
    top: 698,
    left: 219,
    height: 7,
    width: 7,
    position: "absolute",
  },
  youngPrettyWomanEatingPizzIcon: {
    borderRadius: Border.br_5xs,
    height: 429,
    width: 335,
    position: "absolute",
  },
  getDeliveredAt: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    height: 78,
    width: 319,
    left: 0,
    top: 0,
  },
  yourFoodAt: {
    top: 98,
    left: 24,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.gray_100,
    width: 280,
    height: 55,
  },
  getDeliveredAtYourDoorSteParent: {
    top: 465,
    left: 6,
    height: 153,
    width: 319,
    position: "absolute",
  },
  frameChild: {
    top: 678,
    left: 22,
    borderRadius: Border.br_9xs,
    shadowColor: "#ed8e92",
    shadowOffset: {
      width: 5,
      height: 9,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
    width: 287,
    height: 45,
    backgroundColor: Color.red_100,
    position: "absolute",
  },
  frameItem: {
    left: 135,
    borderRadius: 12,
    width: 37,
    backgroundColor: Color.red_100,
  },
  frameInner: {
    left: 179,
    width: 7,
    top: 636,
  },
  next: {
    top: 689,
    left: 115,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
    width: 101,
    height: 24,
  },
  youngPrettyWomanEatingPizzParent: {
    top: 62,
    left: 29,
    height: 723,
  },
  getStartedWindow: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GetStartedWindow;
