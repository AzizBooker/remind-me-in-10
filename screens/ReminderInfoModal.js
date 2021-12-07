import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import priorityEnum from "../Enums/priority.enum";
import PriorityEnum from "../Enums/priority.enum";
import Colors from "../utils/Colors";
import {
  AdMobBanner,
  PublisherBanner,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

//TODO App Almost Finshed: Replace Test Id With Own Admob Id

export default function ReminderInfoModal({ navigation, route, props }) {
  
  const updateHeaderBackgroundColor = (navigation, priority) => {
  switch (priority) {
    case PriorityEnum.p3:
      navigation.setOptions({
        headerStyle: {
          backgroundColor: Colors.priorityLowBackgroundColor,
          elevation: 0,
          borderBottomWidth: 0,
        },
      });
      break;
    case PriorityEnum.p2:
      navigation.setOptions({
        headerStyle: {
          backgroundColor: Colors.priorityMedBackgroundColor,
          elevation: 0,
          borderBottomWidth: 0,
        },
      });
      break;
    case PriorityEnum.p1:
      navigation.setOptions({
        headerStyle: {
          backgroundColor: Colors.priorityHighBackgroundColor,
          elevation: 0,
          borderBottomWidth: 0,
        },
      });
      break;
  }
};

  const title = route.params.title;
  const description = route.params.description;
  const duration = route.params.getFormattedTime();
  const uuid = route.params.uuid;
  const priority = route.params.priority;

  useEffect(() => {
    setTestDeviceIDAsync("ca-app-pub-3940256099942544/6300978111");
  }, []);

  //Priority=>Style ;stub
  //Depending on the Priority passed a different styles will be passed ;purpose
  const ChangeStyleOnPriority = () => {
    var navigationOptions={}
    switch (priority) {
      case priorityEnum.p3:
       updateHeaderBackgroundColor(navigation, priority);
        return { backgroundColor: Colors.priorityLowBackgroundColor };
        break;
      case priorityEnum.p2:
        updateHeaderBackgroundColor(navigation, priority);
        return { backgroundColor: Colors.priorityMedBackgroundColor };
        
        break;
      case priorityEnum.p1:
        updateHeaderBackgroundColor(navigation, priority);
        return { backgroundColor: Colors.priorityHighBackgroundColor };
        break;
    }

    // return ({backgroundColor:Colors.priorityLowBackgroundColor})
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ ...styles.modalContainer, ...ChangeStyleOnPriority() }}>
        <Grid>
          <Row style={styles.rowWrapper} size={5}>
            <Text numberOfLines={1} style={{ ...styles.text, ...styles.title }}>
              {title}
            </Text>
          </Row>
          <Row style={styles.rowWrapper} size={65}>
            <Text style={{ ...styles.text, ...styles.duration }}>
              {duration}
            </Text>
          </Row>
          <Row style={styles.descriptionRowWrapper} size={30}>
            <View>
              <Text style={{ ...styles.text, ...styles.descTitle }}>
                Description
              </Text>
              <Text style={{ ...styles.text }}>{description}</Text>
            </View>
          </Row>
        </Grid>
      </View>
      <View>
        <PublisherBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          onDidFailToReceiveAdWithError={this.bannerError}
          onAdMobDispatchAppEvent={this.adMobEvent}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    // backgroundColor: Colors.priorityHighBackgroundColor,
    flex: 1,
    padding: 30,
  },
  adsContainer: {
    backgroundColor: Colors.secondary,
    height: 60,
  },
  rowWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionRowWrapper: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  textWrapper: {
    textAlign: "center",
  },
  text: {
    color: Colors.primary,
    fontSize: 17,
  },
  title: {
    fontSize: 24,
    flexWrap: "nowrap",
  },
  duration: {
    fontSize: 112,
  },
  descTitle: {
    fontSize: 20,
    paddingBottom: 3,
    fontWeight: "bold",
  },
});
