import { useNavigation } from "@react-navigation/native";
import React, { useRef, useEffect, useMemo } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import Colors from "../../assets/Colors";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

function HomeScreen({}) {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions("window");
  const snapPoints = React.useMemo(() => ["20%", "100%"], []);

  const bottomSheet = useRef();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });

    bottomSheet.current.show();
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Pressable
        style={{
          position: "absolute",
          right: 10,
          bottom: 10,
          zIndex: 1,
        }}
        onPress={() => {
          navigation.navigate("Check");
        }}
      >
        <Image
          source={require("../../assets/identificationIcon.png")}
          resizeMode="cover"
          style={{ height: RFPercentage(10), width: RFPercentage(10) }}
        />
      </Pressable>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
        <View style={styles.bottomsheet}>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "gowun-bold",
                fontSize: 30,
                marginBottom: 10,
                letterSpacing: 3,
              }}
            >
              알려드립니다
            </Text>
            <View style={{ alignItems: "flex-start" }}>
              <Text
                style={{
                  fontFamily: "gowun-regular",
                  fontSize: 15,
                  letterSpacing: 1,
                }}
              >
                현재 사용하시는 숭실밥집 어플리케이션은{"\n"}베타테스트 중입니다
                {"\n"}
                베타 서비스 중에는 사용이 불안정할 수 있습니다{"\n"}
                양해부탁드립니다
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              opacity: 1,
            }}
          >
            <Image
              source={require("../../assets/horseIcon2.png")}
              style={{ width: "40%", height: "90%" }}
            />
            <View
              style={{
                borderWidth: 2,
                padding: 20,
                borderRadius: 20,
                borderColor: "blue",
                backgroundColor: Colors.basicColor.gray,
              }}
            >
              <Text style={{ fontFamily: "gowun-regular", fontSize: 15 }}>
                곧 이벤트가 진행됩니다!
              </Text>
            </View>
          </View>
        </View>
      </BottomSheet>
      <Pressable
        style={styles.upperContainer}
        onPress={() => {
          console.log("routtlete");
          navigation.navigate("RouletteScreen", { category: "밥집 정하기" });
        }}
      >
        <Text
          style={{
            fontFamily: "gowun-bold",
            fontSize: 50,
            letterSpacing: 13,
          }}
        >
          숭실밥집
        </Text>
      </Pressable>

      <View style={styles.middleContainer}></View>
      <View style={styles.lowerContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "한식" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>한식</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "일식" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 25 }]}>일식/중식</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "양식" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>양식</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "아시안" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>아시안</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "테이크아웃" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 23 }]}>테이크아웃</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "술집" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>술집</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "치킨/피자" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 25 }]}>치킨/피자</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  styles.itemContainer,
                  { backgroundColor: Colors.basicColor.magenta },
                ]
              : [styles.itemContainer]
          }
          onPress={() => {
            navigation.navigate("StoreList", { category: "카페" });
          }}
        >
          <Text style={[styles.normalText, { fontSize: 30 }]}>카페</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  upperContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: Colors.basicColor.magenta,
  },
  middleContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
  },
  lowerContainer: {
    flex: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingTop: 10,
  },
  //
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "42%",
    height: "20%",
    backgroundColor: Colors.basicColor.magentaTrans2,
    borderRadius: 20,
    margin: "1%",
    borderWidth: 0.5,
    borderColor: Colors.basicColor.magenta,
  },
  bottomsheet: {
    flex: 1,
  },
  //
  normalText: {
    fontFamily: "gowun-regular",
    fontSize: 20,
  },
});
