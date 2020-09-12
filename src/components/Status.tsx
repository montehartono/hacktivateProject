import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Icon,
  Fab,
  Button
} from "native-base";
import Moment from "moment";
import ThemeColors from "../constants/ThemeColors";

interface MyProps {
  statusItems: Array<any>;
  user: any;
}

export default class Status extends Component <MyProps>{
  render() {
    return (
      <Container>
        <ListItem avatar noBorder>
          <Left>
            <Thumbnail source={{ uri: this.props.user.avatar }} />
          </Left>
          <Body>
            <Text>My status</Text>
            <Text note style={styles.lineHeight}>
              Tap to add status update
            </Text>
          </Body>
        </ListItem>
        <ListItem itemDivider style={{ marginTop: 10 }}>
          <Text>Recent updates</Text>
        </ListItem>
        <List
          dataArray={this.props.statusItems}
          keyExtractor={(item, index) => index + item}
          renderRow={item => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: item.contactAvatar }} />
              </Left>
              <Body>
                <Text>{item.contactName}</Text>
                <Text note style={styles.lineHeight}>
                  {this.getFormatedDate(item.time)}
                </Text>
              </Body>
            </ListItem>
          )}
        />
      </Container>
    );
  }

  getFormatedDate(date: Date) {
    return (
      Moment(date).format("MMMM") +
      " " +
      Moment(date).format("D") +
      ", " +
      Moment(date).format("hh:mm a")
    );
  }
}

const styles = StyleSheet.create({
  lineHeight: {
    height: 21
  },
  fab: {
    backgroundColor: ThemeColors.secondary
  }
});
