'use strict';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
import Dimensions from 'Dimensions';

import ParallaxScrollView from 'react-native-parallax-scroll-view';

class Fretboard extends Component {
  render(){
    var frets = [];
    var i = 1;

    while (i<12) {
      frets.push((
        <View style={{ flexDirection: 'row' }} key={'fret' + i.toString()}>

          <View style={{ flex:1 }}></View>

          <View style={stylesApp.fret}>

            <Text>{i}</Text>

          </View>

          <View style={{ flex:1 }}></View>

        </View>));

      i = i + 1;
    }

    return (
      <ParallaxScrollView
      backgroundColor="black"
      contentBackgroundColor="black"
      parallaxHeaderHeight={400}

      renderForeground={() => (
       <View style={stylesApp.headView}>

        <View></View>

        <Image style={stylesApp.headBackground} source={ require('./assets/head.png') }/>

        <View></View>

       </View>
      )}>

      <View style={{ height: 1252, alignItems : 'center' }}>

          <View style={{ flexDirection: 'row' }}>

            <View></View>

            <Image style={stylesApp.airFret} source={ require('./assets/brigde.png') }/>

            <View></View>

          </View>

          {frets}

      </View>

    </ParallaxScrollView>

    )
  }
}


export default class Refarmony extends Component {

  render() {
    let textElem = React.createElement(Text, [], ['Hello world']);
    return (
      <View style={stylesBack.bigContainer}>

        <View style={stylesBack.headContainer}>

          <Text style={stylesBack.titled}>
            este es el titulo!
          </Text>

        </View>

        <View style={stylesBack.fretboardContainer}>

        <Fretboard></Fretboard>

        </View>

        <View style={stylesBack.footContainer}>

          <Text style={stylesBack.footed}>
            Este texto abajo!
          </Text>
          
        </View>

      </View>

    );
  }
}

let stylesApp = StyleSheet.create({
  headBackground: {
    flex: 1,
    height: 400,
    resizeMode: 'stretch', // or 'stretch'
  },
  airFretContainer: {
    flex: 1,
    flexDirection: 'row',
    resizeMode: 'cover', // or 'stretch'
  },
  airFret: {
    height: 104,
    flex: 1,
    resizeMode: 'stretch', // or 'stretch'
  },
  headView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',

  },
  fret: {
    height: 104,
    flex: 5,
    backgroundColor: '#8A4B08',
    borderBottomWidth: 12,
    borderColor: 'grey',
  },
  air: {
    flex: 1,
    backgroundColor: '#8A4B08',
    borderWidth: 1,
    borderColor: 'blue'
  },})

const stylesBack = StyleSheet.create({
  bigContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  headContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  footContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  fretboardContainer: {
    flex: 10,
    backgroundColor: 'black',
  },
  fretContainer: {
    flex: 1,
  },
  titled: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  footed: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});

AppRegistry.registerComponent('refarmony', () => Refarmony);
