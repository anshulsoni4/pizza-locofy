import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GetStarted2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.getStarted2}>
      <View style={styles.rectangleParent}>
        <Pressable
          style={styles.frameChild}
          onPress={() => navigation.navigate("InitialPage")}
        />
        <Image
          style={styles.frameItem}
          resizeMode="cover"
          source={require("../assets/group-31.png")}
        />
        <Text style={styles.getStarted}>Get Started</Text>
        <Image
          style={[
            styles.youngPrettyWomanEatingPizzIcon,
            styles.youngPrettyWomanEatingPizzIconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/youngprettywomaneatingpizzapizzabar-2-1.png")}
        />
        <View
          style={[
            styles.pickUpDeliveryAtYourDoorParent,
            styles.youngPrettyWomanEatingPizzIconPosition,
          ]}
        >
          <Text style={styles.pickUpDelivery}>
            Pick Up Delivery at your door and enjoy
          </Text>
          <Text style={styles.yourFoodAt}>
            Your food at your door step and just click on one step
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  youngPrettyWomanEatingPizzIconPosition: {
    left: 0,
    position: "absolute",
    width: 344,
  },
  frameChild: {
    top: 683,
    left: 28,
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
    width: 287,
    height: 45,
    position: "absolute",
  },
  frameItem: {
    top: 641,
    left: 140,
    width: 63,
    height: 7,
    position: "absolute",
  },
  getStarted: {
    top: 694,
    left: 107,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.white,
    width: 129,
    height: 24,
    textAlign: "center",
    position: "absolute",
  },
  youngPrettyWomanEatingPizzIcon: {
    top: 0,
    borderRadius: 10,
    height: 432,
  },
  pickUpDelivery: {
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.black,
    height: 78,
    textAlign: "center",
    width: 344,
  },
  yourFoodAt: {
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemibold,
    color: Color.gray_100,
    width: 282,
    height: 55,
    marginTop: 19,
    textAlign: "center",
  },
  pickUpDeliveryAtYourDoorParent: {
    top: 469,
    height: 152,
    alignItems: "center",
  },
  rectangleParent: {
    height: 728,
    width: 344,
  },
  getStarted2: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: 57,
    alignItems: "center",
  },
});

export default GetStarted2;
