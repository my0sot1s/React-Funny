import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import { Divider, DividerCircle } from './Modules';

export const RenderMaps = props => (

  <View style={styles.main}>
    <Image source={require("../img/bg-map.png")}
      style={styles.map}
      resizeMode='cover' />
    <View style={styles.infoWrapper}>
      <View style={styles.infoPerWrapper}>
        <View style={styles.infoList}>
          <View style={styles.infoItem}>
            <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" }}
              resizeMode="cover" style={styles.infoAva} />
            <View style={styles.infoFrom}>
              <View style={{ height: 40 + '%' }}>
                <Text style={{ fontSize: 19, color: '#3B424A' }}>Edward Norton</Text>
              </View>
              <View style={styles.infoTo}>
                <Text style={{ height: 60 + '%', flexDirection: 'row', color: "#8C9093", fontSize: 14 }}>
                  W 90th St, New York, NY 1025
          </Text>
              </View>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" }}
              resizeMode="cover" style={styles.infoAva} />
            <View style={styles.infoFrom}>
              <View style={{ height: 40 + '%' }}>
                <Text style={{ fontSize: 19, color: '#3B424A' }}>Edward Norton</Text>
              </View>
              <View style={styles.infoTo}>
                <Text style={{ height: 60 + '%', flexDirection: 'row', color: "#8C9093", fontSize: 14 }}>
                  46th Ave, Woodside, NY 11101
          </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <DividerCircle color={'#ef5350'} height={55} />
        </View>
      </View>
      <Divider flex={0.03} />

      <Text style={styles.timeStart} > 60 min 00 sec</Text>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ fontSize: 14, color: '#3B424A', textAlign: 'center' }}>START</Text>
      </TouchableOpacity>
    </View>
  </View >
)

const styles = StyleSheet.create({
  main: {
    flexDirection: "column", height: 92 + '%'
  },
  map: {
    height: 40 + '%', width: 100 + '%'
  },

  infoWrapper: {
    flexDirection: 'column', height: 60 + '%', marginHorizontal: 10
  },
  infoPerWrapper: {
    flexDirection: 'row', marginVertical: 15, height: 40 + '%'
  },
  infoList: {
    flexDirection: 'column', flex: 9
  },

  infoItem: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 50 + '%'
  },
  infoAva: { flex: 1, borderRadius: 10, height: 80 + '%', alignSelf: 'flex-start' },
  infoFrom: { flex: 5, flexDirection: 'column', marginLeft: 10 },
  infoTo: { height: 60 + '%', flexDirection: 'row' },
  timeStart: { color: "#A4ADAD", fontSize: 25, textAlign: 'center', marginVertical: 10 },
  btn: { borderRadius: 10, height: 18 + '%', backgroundColor: '#ef5350', justifyContent: 'center' }
})