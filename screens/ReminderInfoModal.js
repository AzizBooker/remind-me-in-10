import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Colors from "../utils/Colors";
export default function ReminderInfoModal({ navigation, route, props }) {
  //TODO  3C Create Placeholder Style for duration,title,and description
  //TODO  4C Replace Placeholder information with text from passed item
  // TODO 5 Set background color based on priorty
  const title=route.params.title
  const description=route.params.description
  const duration=route.params.duration
  const uuid=route.params.uuid
  const priority=route.params.priority
  return (
    <View style={styles.container}>
      <Grid>
        <Row style={styles.rowWrapper} size={5}>
          <Text numberOfLines={1} style={{ ...styles.text, ...styles.title }}>{title}</Text>
        </Row>
        <Row style={styles.rowWrapper} size={60}>
          <Text style={{ ...styles.text, ...styles.duration }}>{duration}</Text>
        </Row>
        <Row style={styles.descriptionRowWrapper} size={35}>
          <View>
            <Text style={{ ...styles.text, ...styles.descTitle }}>
              Description
            </Text>
            <Text style={{ ...styles.text }}>
              {description}
            </Text>
          </View>
        </Row>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.priorityHighBackgroundColor,
    flex: 1,
    padding: 30,
  },
  rowWrapper: {
    justifyContent: "center",
    alignItems:'center'
  },
  descriptionRowWrapper:{
    justifyContent:'center',
    alignItems:"flex-start"
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
    flexWrap:'nowrap',
  },
  duration: {
    fontSize: 112,
  },
  descTitle: {
    fontSize: 20,
    paddingBottom:3,
    fontWeight: "bold",
  },
});
