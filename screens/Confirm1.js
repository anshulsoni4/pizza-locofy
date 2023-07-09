import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProfileMenuContainer from "../components/ProfileMenuContainer";
import PaymentMethodsContainer from "../components/PaymentMethodsContainer";
import CheckoutContainer from "../components/CheckoutContainer";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Confirm1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirm}>
      <Text style={styles.checkout}>Checkout</Text>
      <ProfileMenuContainer />
      <Image
        style={[styles.confirmChild, styles.mdibellIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.lamoda2Position]} />
        <Image
          style={[styles.mdibellIcon, styles.mdibellIconLayout]}
          resizeMode="cover"
          source={require("../assets/mdibell.png")}
        />
      </View>
      <View style={styles.nav} />
      <View style={[styles.cardFlagsParent, styles.image4IconPosition]}>
        <View style={styles.cardFlags}>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.cardNumberWrapper}>
          <Text style={styles.cardNumber}>Card number</Text>
        </View>
      </View>
      <Text style={styles.payByBank}>Pay by bank card</Text>
      <View style={styles.parent}>
        <Text style={styles.text}>10.00 $</Text>
        <Image
          style={styles.regularIcons}
          resizeMode="cover"
          source={require("../assets/regularicons.png")}
        />
      </View>
      <Text style={[styles.text1, styles.text1Typo]}>Order 42069</Text>
      <Text style={[styles.lamoda, styles.text1Typo]}>UI Unicorn Store</Text>
      <Text style={[styles.lamoda1, styles.lamodaTypo3]}>Payment Details</Text>
      <View style={styles.lamodaParent}>
        <Text style={[styles.lamoda2, styles.lamodaTypo3]}>{`Location `}</Text>
        <Image
          style={styles.groupItem}
          resizeMode="cover"
          source={require("../assets/group-19.png")}
        />
      </View>
      <Text style={[styles.lamoda3, styles.lamodaTypo2]}>SubTotal</Text>
      <Text style={[styles.lamoda4, styles.lamodaTypo]}>$123.5</Text>
      <Text style={[styles.lamoda5, styles.lamodaTypo]}>$2.10</Text>
      <Text style={[styles.lamoda6, styles.lamodaTypo]}>$125.5</Text>
      <Text style={[styles.lamoda7, styles.lamodaTypo2]}>Delivery Charges</Text>
      <Text style={[styles.lamoda8, styles.lamodaTypo2]}>Final Amount</Text>
      <PaymentMethodsContainer />
      <Image
        style={[styles.image4Icon, styles.image4IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <View style={[styles.confirmItem, styles.lamoda2Position]} />
      <View style={styles.confirmInner} />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-3180.png")}
      />
      <Text style={[styles.lamoda9, styles.lamodaTypo3]}>Order Successful</Text>
      <CheckoutContainer
        checkoutButtonText="Continue"
        propTop={555}
        propLeft={101}
        onGroupPressablePress={() => navigation.navigate("HomePage1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mdibellIconLayout: {
    height: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 26,
    width: 26,
    position: "absolute",
  },
  lamoda2Position: {
    left: 0,
    top: 0,
  },
  image4IconPosition: {
    left: 38,
    position: "absolute",
  },
  text1Typo: {
    color: Color.black7004D4D4D,
    fontSize: FontSize.size_sm,
    top: 258,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  lamodaTypo3: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    color: Color.black,
    position: "absolute",
  },
  lamodaTypo2: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    left: 27,
    color: Color.black7004D4D4D,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  lamodaTypo: {
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.black,
    position: "absolute",
  },
  checkout: {
    top: 68,
    left: 58,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratMedium,
    width: 132,
    height: 41,
    textAlign: "center",
    color: Color.black,
    fontWeight: "500",
    position: "absolute",
  },
  confirmChild: {
    left: 35,
    width: 23,
    top: 76,
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.red_100,
    shadowColor: "rgba(255, 0, 0, 0.41)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 26,
    width: 26,
    position: "absolute",
  },
  mdibellIcon: {
    top: 5,
    left: 5,
    width: 16,
    overflow: "hidden",
  },
  rectangleParent: {
    left: 320,
    top: 76,
  },
  nav: {
    height: "0.12%",
    width: "86.15%",
    top: "51.9%",
    right: "8.21%",
    bottom: "47.99%",
    left: "5.64%",
    backgroundColor: Color.black100E5E5E5,
    position: "absolute",
  },
  rectangle: {
    height: "20%",
    top: "20%",
    right: "0%",
    bottom: "60%",
    left: "0%",
    backgroundColor: Color.black300B3B3B3,
    position: "absolute",
    width: "100%",
  },
  cardFlags: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.black200CCCCCC,
    width: 28,
    height: 20,
    overflow: "hidden",
  },
  cardNumber: {
    fontSize: FontSize.placeholderValue_size,
    fontFamily: FontFamily.hintPlaceholder,
    color: Color.black500808080,
    textAlign: "left",
    lineHeight: 20,
    letterSpacing: 0,
  },
  cardNumberWrapper: {
    marginLeft: 8,
    flexDirection: "row",
  },
  cardFlagsParent: {
    top: 372,
    flexDirection: "row",
  },
  payByBank: {
    marginLeft: -157,
    top: 338,
    left: "50%",
    fontSize: FontSize.hintPlaceholder_size,
    lineHeight: 12,
    color: Color.black600666666,
    width: 304,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    letterSpacing: 0,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_13xl,
    lineHeight: 40,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.black9001A1A1A,
    textAlign: "left",
    fontWeight: "500",
  },
  regularIcons: {
    height: 16,
    marginLeft: 8,
    width: 16,
  },
  parent: {
    top: 282,
    alignItems: "center",
    left: 22,
    flexDirection: "row",
    position: "absolute",
  },
  text1: {
    left: 267,
    textAlign: "right",
  },
  lamoda: {
    left: 22,
    textAlign: "left",
  },
  lamoda1: {
    top: 553,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 27,
  },
  lamoda2: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 82,
    width: 17,
    height: 16,
    top: 0,
    position: "absolute",
  },
  lamodaParent: {
    top: 120,
    left: 36,
    width: 99,
    height: 20,
    position: "absolute",
  },
  lamoda3: {
    top: 612,
  },
  lamoda4: {
    top: 607,
    left: 286,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
  },
  lamoda5: {
    top: 648,
    left: 289,
  },
  lamoda6: {
    top: 685,
    left: 286,
    fontFamily: FontFamily.montserratExtrabold,
    fontWeight: "800",
  },
  lamoda7: {
    top: 653,
  },
  lamoda8: {
    top: 690,
  },
  image4Icon: {
    top: 148,
    borderRadius: Border.br_9xs,
    width: 329,
    height: 105,
  },
  confirmItem: {
    backgroundColor: "rgba(255, 174, 177, 0.7)",
    width: 390,
    height: 845,
    position: "absolute",
  },
  confirmInner: {
    top: 230,
    left: 42,
    borderRadius: Border.br_7xs,
    width: 296,
    height: 415,
    position: "absolute",
    backgroundColor: Color.white,
  },
  groupIcon: {
    top: 300,
    left: 132,
    width: 116,
    height: 112,
    position: "absolute",
  },
  lamoda9: {
    top: 435,
    left: 67,
    fontSize: FontSize.size_9xl,
  },
  confirm: {
    borderRadius: Border.br_13xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default Confirm1;
