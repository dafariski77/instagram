import React from 'react';
import {Text, View, Image, ScrollView, StyleSheet} from 'react-native';

export default class Feed extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'gray',
              borderBottomWidth: 2,
              padding: 15,
              justifyContent: 'space-between',
              height: 30,
            }}
          /> */}
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                  borderWidth: 4,
                  alignItems: 'center',
                  borderColor: 'purple',
                  padding: 1,
                }}>
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                  }}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginLeft: 10,
                  marginTop: -10,
                  textAlign: 'left',
                  color: 'black',
                }}>
                dafariski77
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: -20,
                  color: 'black',
                }}>
                ...
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              height: 390,
              width: '100%',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              marginTop: 5,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image
                source={require('../images/like.png')}
                style={{height: 24, width: 27}}
              />
              <Image
                source={require('../images/komen.png')}
                style={{height: 25, width: 25, marginLeft: 15}}
              />
              <Image
                source={require('../images/share.png')}
                style={{width: 25, height: 25, marginLeft: 16}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/save.png')}
                style={{
                  height: 25,
                  width: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 15,
            }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>22 Likes</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>username</Text>
              <Text style={{color: 'black', marginLeft: 5}}>Hello</Text>
              <Text style={{color: 'dodgerblue', marginLeft: 5}}>#hello</Text>
            </View>
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                marginTop: 5,
              }}>
              5 MINUTES AGO
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 10,
              paddingRight: 10,
              marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 60 / 2,
                  borderWidth: 4,
                  alignItems: 'center',
                  borderColor: 'purple',
                  padding: 1,
                }}>
                <View
                  style={{
                    backgroundColor: 'grey',
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                  }}
                />
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginLeft: 10,
                  marginTop: -10,
                  textAlign: 'left',
                  color: 'black',
                }}>
                dafariski77
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  marginTop: -20,
                  color: 'black',
                }}>
                ...
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'purple',
              height: 390,
              width: '100%',
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 15,
              marginTop: 5,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
              <Image
                source={require('../images/likePolos.png')}
                style={{height: 24, width: 27}}
              />
              <Image
                source={require('../images/komen.png')}
                style={{height: 25, width: 25, marginLeft: 15}}
              />
              <Image
                source={require('../images/share.png')}
                style={{width: 25, height: 25, marginLeft: 16}}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/save.png')}
                style={{
                  height: 25,
                  width: 20,
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 15,
            }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>22 Likes</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>username</Text>
              <Text style={{color: 'black', marginLeft: 5}}>Hello</Text>
              <Text style={{color: 'dodgerblue', marginLeft: 5}}>#hello</Text>
            </View>
            <Text
              style={{
                color: 'grey',
                fontSize: 10,
                marginTop: 5,
              }}>
              5 MINUTES AGO
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
