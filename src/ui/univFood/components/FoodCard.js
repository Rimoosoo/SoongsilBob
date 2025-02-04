import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NormalText,
  SmallText,
  SmallTitle,
} from "../../../styled/styledComponents";
import { RFPercentage } from "react-native-responsive-fontsize";

function FoodCard({ title, text }) {
  if (text === "") {
    text = "금일 운영 하지 않습니다";
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <SmallTitle style={{ fontSize: 20 }}>{title}</SmallTitle>
      </View>

      <NormalText style={styles.normalText}>{text}</NormalText>
    </View>
  );
}

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "95%",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    marginVertical: RFPercentage(1),
    backgroundColor: "white",
    borderRadius: 20,
  },
  upperContainer: {
    paddingTop: "3%",
    paddingBottom: "3%",
  },
  //
  //
  normalText: {
    letterSpacing: 1,
  },
});
