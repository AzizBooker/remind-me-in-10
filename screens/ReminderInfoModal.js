import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Colors from "../utils/Colors";
export default function ReminderInfoModal({ navigation, route, props }) {
  //TODO  3 Create Placeholder Style for duration,title,and description
  //TODO  4 Replace Placeholder information with text from passed item
  // TODO N/A Set background color based on priorty

  return (
    <View style={styles.container}>
      <Grid>
        <Row style={styles.rowWrapper} size={5}>
          <Text style={{ ...styles.text, ...styles.title }}>Title</Text>
        </Row>
        <Row style={styles.rowWrapper} size={65}>
          <Text style={{ ...styles.text, ...styles.duration }}>10:00</Text>
        </Row>
        <Row size={30}>
          <View>
            <Text style={{ ...styles.text, ...styles.descTitle }}>
              Description
            </Text>
            <Text style={{ ...styles.text }}>
              Lorem ipsum lorem ipsum loremipsum
            </Text>
          </View>
        </Row>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    padding: 40,
  },
  rowWrapper: {
    justifyContent: "center",
    alignItems:'center'
  },
  textWrapper: {
    textAlign: "center",
  },
  text: {
    color: Colors.primary,
    fontSize: 16,
  },
  title: {
    fontSize: 30,
  },
  duration: {
    fontSize: 84,
  },
  descTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
