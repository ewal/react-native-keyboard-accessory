import React, { Component } from "react";

import { StyleSheet, View, TextInput, Button, ScrollView, Text } from "react-native";

import { KeyboardAccessoryView } from "../react-native-keyboard-accessory";

class StackedExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Button
            title="Go to Navigation Example"
            onPress={() => {
              this.props.navigation.navigate("NavigationViewExample");
            }}
          />
        </ScrollView>
        <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
          {({ isKeyboardVisible }) => (
            <View>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Write your message"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                multiline={true}
              />
              {isKeyboardVisible && (
                <Button
                  style={styles.textInputButton}
                  title="Send"
                  onPress={() => {}}
                />
              )}
            </View>
            <View style={styles.subView}>
              <Button
                style={styles.textInputButton}
                title="Action 1"
                onPress={() => {}}
              />
              <Button
                style={styles.textInputButton}
                title="Action 2"
                onPress={() => {}}
              />
              </View>
            </View>
          )}
        </KeyboardAccessoryView>
      </View>
    );
  }
}

StackedExample.navigationOptions = {
  title: "Stacked Example",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
  subView: {
    flexDirection: "row"
  },
});

export default StackedExample;
