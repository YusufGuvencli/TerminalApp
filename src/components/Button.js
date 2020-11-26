import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as color from '../utils/colors';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonColor: ''
    };
    this.setButtonColor = this.setButtonColor.bind(this);
  }

  setButtonColor(buttonType) {
    switch (buttonType) {
      case 'primary':
        return color.primary
        break;
      case 'info':
        return color.info
        break;
      case 'success':
        return color.success
        break;
      case 'danger':
        return color.danger
        break;
      case 'warning':
        return color.warning
        break;
      default: {
        return color.primary
        break;
      }
    }

  }

  render() {
    const buttonColor = this.setButtonColor(this.props.buttonColor);
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={{ alignItems: 'center', backgroundColor: buttonColor, padding: 10, color: 'white' }}
          onPress={this.props.onPress}
        >
          <Text style={styles.buttonText}>{this.props.buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: '#DDD',
    padding: 10
  },
  buttonText: {
    color: 'white'
  }
});

export default Button;
