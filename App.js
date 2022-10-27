import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  boxPurple: {
    backgroundColor: 'purple',
    width: 135,
    height: 135,
  },
  textBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  textSmall: {
    textAlign: 'center',
    fontSize: 11,
    marginTop: -2,
  },
  col: {
    flexDirection: 'column',
  },
});

const Grid = () => {
  return (
    <View
      style={{
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
      }}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxPurple}></View>
    </View>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
            }}>
            <Text
              style={{
                flex: 1,
                color: 'black',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Riski Dafa Setyawan
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              textAlign: 'center',
              marginLeft: 15,
              marginTop: 5,
            }}>
            <View>
              <Image
                source={{
                  uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                }}
                style={{
                  width: 85,
                  height: 85,
                  borderRadius: 85 / 2,
                  borderWidth: 4,
                  borderColor: 'purple',
                }}></Image>
            </View>
            <View style={{width: 90, height: 80, marginTop: 5}}>
              <Text style={styles.textBold}>1,500</Text>
              <Text style={styles.textSmall}>Posts</Text>
            </View>
            <View style={{width: 90, height: 80, marginTop: 5}}>
              <Text style={styles.textBold}>2,500</Text>
              <Text style={styles.textSmall}>Followers</Text>
            </View>
            <View style={{width: 90, height: 80, marginTop: 5}}>
              <Text style={styles.textBold}>500</Text>
              <Text style={styles.textSmall}>Following</Text>
            </View>
          </View>
          <View style={[styles.col, {padding: 15}]}>
            <Text style={[styles.textBold, {textAlign: 'left'}]}>
              Riski Dafa Setyawan
            </Text>
            <Text>Your personal description</Text>
            <Text>Home</Text>
            <Text style={{color: 'dodgerblue'}}>www.website.com</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderTopColor: 'gray',
              borderTopWidth: 2,
              padding: 15,
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('./images/feed.png')}
              style={{
                height: 32,
                width: 32,
                marginLeft: 35,
              }}></Image>
            <Image
              source={require('./images/tag.png')}
              style={{height: 35, width: 35, marginRight: 35}}></Image>
          </View>
          <Grid />
          <Grid />
          <Grid />
        </View>
      </ScrollView>
    );
  }
}
