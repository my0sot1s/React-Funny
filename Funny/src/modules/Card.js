import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Image, Animated, Easing } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Interactable from 'react-native-interactable';
import { Infor } from './Infor'
import { RenderDetail } from './Detail'
import { RenderMaps } from './Map'
import { Divider, DividerCircle } from './Modules';
const { height, width } = Dimensions.get("screen")

class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      active: false,
    };
  }

  onPress() {
    this.setState({
      collapsed: !this.state.collapsed,
      active: true
    })
  }
  render() {
    this._deltaX = new Animated.Value(0);
    return (
      <View
        style={{
          height: this.state.collapsed ? 0.75 * height : 0.23 * height,
          backgroundColor: '#ffffff',
          width: 0.95 * width,
          borderRadius: 10,
          overflow: 'hidden',
          flexDirection: 'row',
          marginVertical: 5,
        }}>
        <TouchableOpacity onPress={this.onPress.bind(this)} style={{ width: 0.95 * width }} >
          {this.state.collapsed ? <Detail {...this.props} /> : <Infor {...this.props} active={this.state.active} />}
        </TouchableOpacity>
      </View >
    )
  }
}

export default Cards;



class Detail extends Component {
  constructor() {
    super()
    this.state = {
      showMap: true
    };
  }
  changeView() {
    this.setState({ showMap: !this.state.showMap });
  }
  render() {
    return (
      <View style={{ width: 100 + '%', flexDirection: 'column' }}>
        <View style={{
          backgroundColor: '#ef5350', height: 8 + '%', flexDirection: 'row',
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <Icon name="ios-close" color='#ffffff' size={39} style={{ flex: 1, textAlign: 'left', marginLeft: 10 }} />
          <Text style={{ flex: 2, color: '#ffffff', fontSize: 17, textAlign: 'center' }}># 2618-3157</Text>
          <Text style={{ flex: 1, color: '#ffffff', fontSize: 17, textAlign: 'right', marginRight: 10 }}>$25</Text>
        </View>
        {this.state.showMap ? <RenderDetail onPress={this.changeView.bind(this)} /> : <RenderMaps />}
      </View>
    );
  }
}






