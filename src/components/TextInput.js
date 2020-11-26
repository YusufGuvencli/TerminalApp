import React, { Component } from 'react';
import { View, TextInput as Input, StyleSheet, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const icon = this.props.icon ? <Icon style={styles.iconStyle} name={this.props.icon} size={25} color="#cd5c5c" /> : null;

    return (    
      <View style={styles.inputSection}>
        {icon}
        <Input
          placeholder={this.props.placeholder}
          style={this.props.style, styles.inputWrapper}
          secureTextEntry={this.props.secureTextEntry}
          autoCapitalize={this.props.autoCapitalize}
          onChangeText={this.props.onChangeText}
          underlineColorAndroid="transparent"
          value={this.props.value}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {   
    alignItems: 'center'
  },
  inputSection: {  
    flexDirection: 'row',
   
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingLeft: 10,
    paddingRight: 10
  },
  inputWrapper: {  
    width: Dimensions.get('window').width,
    fontSize: 16,
  }
})