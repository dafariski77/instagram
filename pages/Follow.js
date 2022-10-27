import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'dodgerblue',
  },
});

const Row = () => {
  return (
    <View
      style={{
        margin: 20,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 70,
          width: 70,
          borderRadius: 70 / 2,
          backgroundColor: 'purple',
          alignItems: 'center',
        }}>
        <Image
          source={require('../images/user.png')}
          style={{height: 50, width: 50, marginTop: 15}}
        />
      </View>
      <View>
        <Text style={{fontWeight: 'bold'}}>User Name</Text>
        <Text>Name</Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Add</Text>
      </Pressable>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          marginTop: -15,
        }}>
        ...
      </Text>
    </View>
  );
};

export default class Feed extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: '#eaeaea',
              margin: 20,
              marginTop: 30,
              paddingLeft: 15,
              borderRadius: 8,
            }}
          />
        </View>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </ScrollView>
    );
  }
}
