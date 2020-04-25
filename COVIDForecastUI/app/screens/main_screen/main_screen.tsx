import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  createAppContainer,
  SafeAreaView,
  ThemeContext,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
  Icon,
} from "@ui-kitten/components";

import { CurrentCases } from "../../components/current_cases/current_cases";
import { currentLocation, currentState } from "../../../App";
import { UnsplashWidget } from "../../components/unsplash_widget/unsplash_widget";
import { SevenDayForecast } from "../../components/seven_day_forecast/seven_day_forecast";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class MainScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <StatusBar />
        <ScrollView
          contentContainerStyle={{alignItems: "center"}}
          style={{ height: deviceHeight, width: deviceWidth }}
        >
          <UnsplashWidget />
          <CurrentCases />
          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              marginLeft: 12.5,
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <Icon style={styles.icon} name="pin-outline" />
            <Text style={{ letterSpacing: 2 }}>
              {currentState.toUpperCase()}
            </Text>
          </View>
          <View style={{height: 25}} />
          <SevenDayForecast />
        </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
});
