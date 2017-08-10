import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { Divider, DividerCircle } from './Modules';
const { height, width } = Dimensions.get("screen")

export const Infor = props => (
  <View style={{ flexDirection: 'row', width: 0.95 * width, }}>
    <View style={{ flex: 0.01, flexBasis: 5, backgroundColor: props.color }} />
    <View style={[props.active ? { backgroundColor: props.color } : {}, styles.main]}>
      <Text style={[styles.price, props.active ? { color: '#fff' } : {}]}>
        $45
        </Text>
      <Text style={[styles.time, props.active ? { color: '#fff' } : {}, { fontSize: 14, }]}>
        TODAY
        </Text>
      <Text style={[styles.time, props.active ? { color: '#fff' } : {}, { fontSize: 13, }]}>
        09:30 AM
        </Text>
    </View>
    <Divider />
    <View style={{ flex: 7.59, flexDirection: 'column' }}>
      <View style={styles.center}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <DividerCircle color={props.color} />
        </View>
        <View style={{ flex: 8, marginLeft: 5 }}>
          <Text style={{ color: '#555A5F' }}>W 85th St, New York, NY 1025</Text>
          <Divider flex={0.02} />
          <Text style={{ color: '#555A5F' }}>E 30th Ave, New York, NY 1001</Text>
        </View>
        <View style={{ flex: 0.5 }} />
      </View>
      <View style={styles.detail}>
        <View style={styles.per}>
          <Text style={styles.title}>REQUESTS</Text>
          <Text style={styles.data}>5</Text>
        </View>
        <View style={styles.per}>
          <Text style={styles.title}>PLEDGE</Text>
          <Text style={styles.data}>$150</Text>
        </View>
        <View style={styles.per}>
          <Text style={styles.title}>WEIGHT</Text>
          <Text style={styles.data}>Light</Text>
        </View>
      </View>
    </View>
  </View >
)

const styles = StyleSheet.create({
  main: { flex: 2.4, flexDirection: 'column', alignItems: 'center' },
  price: {
    position: 'relative', top: 10 + '%', fontSize: 25,
    backgroundColor: 'transparent', textAlign: 'center', color: '#555A5F', fontWeight: 'bold', fontFamily: "Helvetica"
  },
  time: {
    position: 'relative', top: 45 + '%',
    backgroundColor: 'transparent', textAlign: 'left', color: '#9A9E9E', marginLeft: 10
  },
  center: { height: 55 + '%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  detail: { height: 45 + '%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20 },
  per: { flex: 3, flexDirection: 'column' },
  title: { color: '#B5B5B5', fontSize: 14, },
  data: { color: '#ADADAD', fontWeight: 'bold', fontSize: 15, }
})