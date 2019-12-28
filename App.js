/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor='darkgray'></StatusBar>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Icon name="keyboard-arrow-left" size={34} color="#4a5ce0" />
            <Icon name="more-vert" size={34} color="#4a5ce0" />
          </View>

          <View style={{ alignSelf: 'center' }}>
            <View style={styles.profileImage}>
              <Image
                source={require('./assets/profile.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.dm}>
              <Icon name="message" size={24} color="white" />
            </View>

            <View style={styles.add}>
              <FontAwesome name="photo" size={24} color="#4a5ce0" />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>BillyCoding</Text>
            <Text
              style={
                ([styles.text2],
                {
                  fontSize: 14,
                  color: '#AEB5BC',
                  position: 'relative',
                  marginTop: -1,
                  fontFamily: 'Poppins-Bold',
                })
              }>
              Aluno
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium' }}>
                Informática
              </Text>
              <Text
                style={{
                  color: '#AEB5BC',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                }}>
                3ºAno
              </Text>
            </View>
            <View
              style={[
                styles.statsBox,
                { borderColor: '#AEB5BC', borderLeftWidth: 1, borderRightWidth: 1 },
              ]}>
              <Text style={{ fontSize: 15, fontFamily: 'Poppins-Medium' }}>
                Turma
              </Text>
              <Text
                style={{
                  color: '#AEB5BC',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                }}>
                INF3EM
              </Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={{ fontSize: 10, fontFamily: 'Poppins-Medium' }}>
                MyClassPoints
              </Text>
              <Text
                style={{
                  color: '#4a5ce0',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                }}>
                9000
              </Text>
            </View>
          </View>

          <View style={{marginTop: 32, height:400}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('./assets/image4.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('./assets/manuel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('./assets/image4.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('./assets/manuel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>

            <View style={{marginTop: 20, marginBottom: 30}}>
              <Text
                style={[
                  styles.poppins,
                  {alignSelf: 'center', color: '#A5B5DD'},
                ]}>
                © MyClass Services
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 34,
    color: '#000',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },

  profileImage: {
    elevation: 15,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },

  dm: {
    elevation: 20,
    backgroundColor: '#4a5ce0',
    position: 'absolute',
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  add: {
    elevation: 20,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },

  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },

  poppins: {
    fontFamily: 'Poppins-Bold',
  },

  statsBox: {
    alignItems: 'center',
    flex: 1,
  },

  mediaImageContainer: {
    elevation: 20,
    width: 280,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
});

export default App;
