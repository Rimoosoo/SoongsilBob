import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./src/navigation/RootStack";
import Colors from "./assets/Colors";
import * as SplashScreen from "expo-splash-screen";
import { useLayoutEffect, useState } from "react";
import * as Location from "expo-location";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";

/*
App.js
  어플리케이션 실행 시에 가장 먼저 실행되는 코드
  1. 권한 확인
  2. 사용자 위치 연결
  FIXME:
    1. Expo Location 을 사용해서 위치를 가져오는데
      특정 기기에서 위치를 가져오는 것이 불안정함 - React native 고유 라이브러리 사용해봐야
 */

SplashScreen.preventAutoHideAsync();

function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useLayoutEffect(() => {
    const getLocationAsync = async () => {
      try {
        console.log("권한 체크를 시작합니다");
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") console.log("권한에 이상이 없습니다");
      } catch {
        console.log(errorMsg);
        console.log("위치 권한을 받아오는 것에 문제가 생겼습니다.");
      }
      console.log("위치 데이터를 가져옵니다. ");

      setLocation(
        await Location.getCurrentPositionAsync({
          distanceInterval: 10,
          timeInterval: 20000,
          accuracy: Location.Accuracy.Highest,
        })
      );
      console.log("위치 가져오기 완료\n위치 데이터: ");
      SplashScreen.hideAsync();
    };

    getLocationAsync();
  }, []);

  if (location) {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <View style={styles.upperContainer}>
            <NavigationContainer>
              <RootStack userLocation={{ location }} />
            </NavigationContainer>
          </View>
        </View>
      </PaperProvider>
    );
  } else {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 15 }}>
            사용자 위치 업데이트가 원활하지 않을 때가 있습니다.
          </Text>
          <Text style={{ fontSize: 15 }}>종료 후 재시작해주세요:)</Text>
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 16,
  },
  lowerContainer: {
    flex: 1.3,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: Colors.basicColor.color1Trans1,
  },
  //
});
