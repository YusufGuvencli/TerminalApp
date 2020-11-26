import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import axios from "axios";

import Login from './src/pages/Login';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

   login() {

    var bodyFormData = new FormData();

    bodyFormData.append('username', 'admin');
    bodyFormData.append('password', '7700067409');

    axios({
      method: 'post',
      url: 'http://192.168.1.43:82/api/login/gettoken',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(function (response) {          
          console.log(response);
      })
      .catch(function (response) {
          console.log(response);
      });
  }

  render() {
    return (
      <Login />      
    );
  }
}
