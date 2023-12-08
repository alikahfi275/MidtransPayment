import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const Midtrans = data => {
  const {data: dataMidtrans} = data.route.params;

  return (
    <WebView source={{uri: dataMidtrans.redirect_url}} style={{flex: 1}} />
  );
};

export default Midtrans;

const styles = StyleSheet.create({});
