
import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider, DividerCircle } from './Modules';


export const RenderDetail = props => (
  <View style={{ flexDirection: "column", height: 92 + '%', }}>
    <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-4.jpg" }}
      resizeMode="cover" style={style.banner} blurRadius={1.3} >
      <View style={[style.detail, { marginLeft: 15 }]}>
        <Text style={style.title}>REQUESTS</Text>
        <Text style={style.info}>5</Text>
      </View>
      <View style={style.detail}>
        <Text style={[style.title, { textAlign: 'center' }]}>PLEDGE</Text>
        <Text style={[style.info, { textAlign: 'center' }]}>$150</Text>
      </View>
      <View style={[style.detail, { marginRight: 15 }]}>
        <Text style={[style.title, { textAlign: 'right' }]}>WEIGHT</Text>
        <Text style={[style.info, { textAlign: 'right' }]}>Light</Text>
      </View>
    </Image>

    <View style={{ flexDirection: 'column', margin: 10, height: 70 + '%' }}>
      <Text style={{ color: '#B5B5B5', fontSize: 11, textAlign: 'left' }}>SENDER</Text>
      <View style={style.basic}>
        <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" }}
          resizeMode="cover" style={style.ava} />
        <View style={{ flex: 5, flexDirection: 'column', marginLeft: 10 }}>
          <View style={{ height: 40 + '%' }}>
            <Text style={{ fontSize: 19, color: '#3B424A' }}>Edward Norton</Text>
          </View>
          <View style={{ height: 60 + '%', flexDirection: 'row' }}>
            <Icon name="ios-star" size={20} color="#ef5350" />
            <Icon name="ios-star" size={20} color="#ef5350" />
            <Icon name="ios-star" size={20} color="#ef5350" />
            <Icon name="ios-star" size={20} color="#ef5350" />
            <Icon name="ios-star-half" size={20} color="#ef5350" />
            <Text style={style.count}> (26)</Text>
          </View>
        </View>
      </View>
      <Divider flex={0.02} />
      <View style={{ flexDirection: 'row', height: 20 + '%' }}>
        <ItemDetail data={{ title: 'FROM', from: 'W 90th St', to: 'New York, NY 10025' }} />
        <ItemDetail data={{ title: 'TO', from: '46th Ave', to: 'Woodside, NY 11101' }} />
      </View>
      <View style={{ flexDirection: 'row', height: 20 + '%' }}>
        <ItemDetail data={{ title: 'DELIVERY DATE', from: '06:30 pm', to: '06:30 pm' }} />
        <ItemDetail data={{ title: 'REQUEST DEADLINE', from: '24 minutes', to: '' }} />
      </View>

      <TouchableOpacity
        onPress={props.onPress}
        style={{ borderRadius: 10, height: 15 + '%', backgroundColor: '#ef5350', marginVertical: 5, justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#3B424A', textAlign: 'center' }}>REQUESTS</Text>
      </TouchableOpacity>
      <Text style={{ color: '#A2A2A5', textAlign: 'center' }}>25 people have sent a request</Text>
    </View>
  </View >
)

const ItemDetail = props => (
  <View style={{ flexDirection: 'column', flex: 1 }}>
    <Text style={{ color: '#B5B5B5', fontSize: 11 }}>{props.data.title}</Text>
    <Text style={{ color: '#4B4D52', fontSize: 18 }}>{props.data.from}</Text>
    <Text style={{ color: '#555A5F', fontSize: 15 }}>{props.data.to}</Text>
  </View>
)


const style = StyleSheet.create({
  banner: {
    height: 22 + '%', flexDirection: 'row', alignItems: 'flex-end',
    justifyContent: 'center', backgroundColor: 'transparent',
    paddingBottom: 10
  },
  detail: {
    flex: 3, flexDirection: 'column',
  },
  title: { color: 'rgba(255, 255, 255, 0.6)', fontSize: 14 },
  info: { color: '#ffffff', fontWeight: 'bold', fontSize: 18, },
  ava: { flex: 1, borderRadius: 10, height: 80 + '%', alignSelf: 'flex-start' },
  basic: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 20 + '%', marginVertical: 5 },
  count: { height: 60 + '%', flexDirection: 'row', color: "#222", fontSize: 16 }
})