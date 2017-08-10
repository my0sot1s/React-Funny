
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

export const Divider = (props) => (
  <View style={[{ flex: props.flex ? props.flex : 0.01 }, stylesDivider.main]}>
    <View style={stylesDivider.divider} />
  </View>
)

const stylesDivider = StyleSheet.create({
  main: {
    justifyContent: 'center', margin: 2
  },
  divider: {
    backgroundColor: '#ECECEC', height: 90 + '%'
  }
})
export const DividerCircle = (props) => (
  <View style={stylesDividerCircle.main}>
    <View style={[{ borderColor: props.color }, stylesDividerCircle.cicle]} />
    <View style={[stylesDividerCircle.dottedWrapper, { height: props.height ? props.height : 25 }]}>
      <View style={[{ height: props.height ? props.height : 25, borderColor: props.color }, stylesDividerCircle.dot]} />
    </View>
    <View style={[{ borderColor: props.color }, stylesDividerCircle.cicle]} />
  </View>
)

const stylesDividerCircle = StyleSheet.create({
  main: {
    flexDirection: 'column', justifyContent: 'center'
  },
  cicle: {
    height: 8, width: 8, borderRadius: 4, borderWidth: 1.5
  },
  dottedWrapper: {
    width: 8, justifyContent: 'center', alignItems: 'center'
  },
  dot: {
    width: 1, borderWidth: 1, borderStyle: 'dashed'
  }
})