import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import axios from 'axios';
import {HEADER_MIDTRANS, URL_MIDTRANS} from '../constants';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const [text, onChangeText] = React.useState('');
  const [response, setResponse] = React.useState({});
  const navigation = useNavigation();

  console.log(text);

  const handleOnPress = () => {};

  const snapTranscations = async data => {
    return axios
      .post(URL_MIDTRANS + '/transactions', data, {
        headers: HEADER_MIDTRANS,
        timeout: 30000,
      })
      .then(res => {
        console.log(res.data);
        console.log(res);
        setResponse(res.data);
        navigation.navigate('Midtrans', {data: res.data});
      })
      .catch(err => {
        alert(err);
      });
  };

  const ExampleBayar = () => {
    const date = new Date().getTime();
    const data = {
      transaction_details: {
        order_id: 'AKL-STORE-' + date,
        gross_amount: parseInt(text),
      },
      credit_card: {
        secure: true,
      },
    };
    snapTranscations(data);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: '90%',
          marginBottom: 20,
        }}
        placeholder="Type here to translate!"
        onChangeText={onChangeText}
      />
      <Button
        onPress={() => ExampleBayar()}
        title="Submit"
        color="blue"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
