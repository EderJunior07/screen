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
      <StatusBar backgroundColor='#333'></StatusBar>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            {/*<Icon name="keyboard-arrow-left" size={30} color="#4a5ce0" />
            <Icon name="more-vert" size={30} color="#4a5ce0" />*/}
          </View>
          
          <View style={{ alignSelf: 'center' }}>
            <View style={styles.profileImage}>
              <Image
                source={require('./assets/profile2.jpg')}
                style={styles.image}
              />
            </View>
            <View style={styles.dm}>
              <Icon name="share" size={22} color="#444" />
            </View>

            <View style={styles.add}>
              <Icon name="person" size={30} color="gold" />
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
              FullStack Developer
            </Text>
          </View>

          <View style={styles.statsContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.statsBox}>
              <Text style={styles.subtitle}>
                PRO+
              </Text>
              <Text
                style={styles.subvalues}>
                Dados
              </Text>
            </View>
            <View style={[styles.statsBox, styles.separator]}>
              <Text style={styles.subtitle}>
                Habilidade
              </Text>
              <Text
                style={styles.subvalues}>
                Equipe
              </Text>
            </View>
            <View
              style={[
                styles.statsBox,styles.separator,
              ]}>
              <Text style={styles.subtitle}>
                IDE
              </Text>
              <Text
                style={styles.subvalues}>
                VSCode
              </Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.subtitle}>
                Projeto
              </Text>
              <Text
                style={{
                  color: '#ddd',
                  fontFamily: 'Poppins-Bold',
                  fontSize: 18,
                }}>
                MyClass
              </Text>
            </View>
            </ScrollView>
          </View>
          
          <View style={{marginTop: 32, height:300, marginBottom:-60}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('./assets/image1.jpg')}
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
             
            </ScrollView>

            
              </View>

          <View style={{marginTop: 0, marginBottom: 20}}>
              <Text
                style={[
                  styles.poppins,
                  {alignSelf: 'center', color: 'lightgray'},
                ]}>
                by BillyCoding 
              </Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: '#eee',
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
    backgroundColor: 'gold',
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
    backgroundColor: '#444',
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 50,
    height: 50,
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
    width: 110,
    height: 60,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  separator:{ borderColor: '#AEB5BC', borderLeftWidth: 1, borderRightWidth: 1 },

  mediaImageContainer: {
    elevation: 20,
    width: 280,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  subtitle:{ 
    fontSize: 15, 
    fontFamily: 'Poppins-Medium' ,
    color: 'gold'
  },
  subvalues:{
    fontSize: 14,
    color: '#AEB5BC',
    position: 'relative',
    marginTop: -1,
    fontFamily: 'Poppins-Bold',
  },
});

export default App;
