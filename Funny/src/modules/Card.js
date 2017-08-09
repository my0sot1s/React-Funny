import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const { height, width } = Dimensions.get("screen")


class Cards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    };
  }
  onPress() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <TouchableOpacity style={{
        height: this.state.collapsed ? 0.75 * height : 0.23 * height,
        backgroundColor: '#ffffff',
        width: 0.95 * width,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        marginVertical: 5,
      }} onPress={this.onPress.bind(this)}>
        {this.state.collapsed ? <Detail {...this.props} /> : <Infor {...this.props} />}
      </TouchableOpacity >
    )
  }
}

export default Cards;


const Divider = (props) => (
  <View style={{ flex: props.flex ? props.flex : 0.01, justifyContent: 'center', margin: 2 }}>
    <View style={{ backgroundColor: '#ECECEC', height: 90 + '%' }} />
  </View>
)

const DividerCircle = (props) => (
  <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
    <View style={{ height: 8, width: 8, borderRadius: 4, borderWidth: 1.5, borderColor: props.color }} />
    <View style={{ height: props.height ? props.height : 25, width: 8, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 1, height: props.height ? props.height : 25, borderColor: props.color, borderWidth: 1, borderStyle: 'dashed' }} />
    </View>
    <View style={{ height: 8, width: 8, borderRadius: 4, borderWidth: 1.5, borderColor: props.color }} />
  </View>
)

const Infor = props => (
  <View style={{ flexDirection: 'row', width: 0.95 * width, }}>
    <View style={{ flex: 0.01, flexBasis: 5, backgroundColor: props.color }} />
    <View style={{ flex: 2.4 }}>
      <Text style={{ position: 'relative', top: 15, fontSize: 25, backgroundColor: 'transparent', textAlign: 'center', color: '#555A5F', fontWeight: 'bold', fontFamily: "Helvetica" }}>
        $45
        </Text>
      <Text style={{ position: 'relative', top: 75, fontSize: 14, backgroundColor: 'transparent', textAlign: 'left', color: '#9A9E9E', marginLeft: 10 }}>
        TODAY
        </Text>
      <Text style={{ position: 'relative', top: 75, fontSize: 13, backgroundColor: 'transparent', textAlign: 'left', color: '#606568', marginLeft: 10 }}>
        09:30 AM
        </Text>
    </View>
    <Divider />
    <View style={{ flex: 7.59, flexDirection: 'column' }}>
      <View style={{ height: 55 + '%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <DividerCircle color={props.color} />
        </View>
        <View style={{ flex: 8, marginLeft: 5 }}>
          <Text style={{ color: '#555A5F' }}>W 85th St, New York, NY 1025</Text>
          <Divider />
          <Text style={{ color: '#555A5F' }}>E 30th Ave, New York, NY 1001</Text>
        </View>
        <View style={{ flex: 0.5 }} />
      </View>
      <View style={{ height: 45 + '%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 20 }}>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <Text style={{ color: '#B5B5B5', fontSize: 14, }}>REQUESTS</Text>
          <Text style={{ color: '#ADADAD', fontWeight: 'bold', fontSize: 15, }}>5</Text>
        </View>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <Text style={{ color: '#B5B5B5', fontSize: 14, }}>PLEDGE</Text>
          <Text style={{ color: '#ADADAD', fontWeight: 'bold', fontSize: 15, }}>$150</Text>
        </View>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <Text style={{ color: '#B5B5B5', fontSize: 14, }}>WEIGHT</Text>
          <Text style={{ color: '#ADADAD', fontWeight: 'bold', fontSize: 15, }}>Light</Text>
        </View>
      </View>
    </View>
  </View>
)

const Detail = props => (
  <View style={{ width: 100 + '%', flexDirection: 'column' }}>
    <View style={{
      backgroundColor: '#ef5350', height: 8 + '%', flexDirection: 'row',
      justifyContent: 'space-between', alignItems: 'center',
    }}>
      <Icon name="ios-close" color='#ffffff' size={39} style={{ flex: 1, textAlign: 'left', marginLeft: 10 }} />
      <Text style={{ flex: 1, color: '#ffffff', fontSize: 17, textAlign: 'center' }}># 2618-3157</Text>
      <Text style={{ flex: 1, color: '#ffffff', fontSize: 17, textAlign: 'right', marginRight: 10 }}>$25</Text>
    </View>
    {/* <RenderDetail /> */}
    <RenderMaps />
  </View>
)

const RenderMaps = props => (
  <View style={{ flexDirection: "column", height: 92 + '%' }}>
    <Image source={require("../img/bg-map.png")}
      style={{ height: 40 + '%', width: 100 + '%' }}
      resizeMode='cover' />
    <View style={{ flexDirection: 'column', height: 60 + '%', marginHorizontal: 10 }}>
      <View style={{ flexDirection: 'row', marginVertical: 15, height: 40 + '%' }}>
        <View style={{ flexDirection: 'column', flex: 9 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 50 + '%' }}>
            <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" }}
              resizeMode="cover" style={{ flex: 1, borderRadius: 10, height: 80 + '%', alignSelf: 'flex-start' }} />
            <View style={{ flex: 5, flexDirection: 'column', marginLeft: 10 }}>
              <View style={{ height: 40 + '%' }}>
                <Text style={{ fontSize: 19, color: '#3B424A' }}>Edward Norton</Text>
              </View>
              <View style={{ height: 60 + '%', flexDirection: 'row' }}>
                <Text style={{ height: 60 + '%', flexDirection: 'row', color: "#8C9093", fontSize: 14 }}>
                  W 90th St, New York, NY 1025
          </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 50 + '%', }}>
            <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" }}
              resizeMode="cover" style={{ flex: 1, borderRadius: 10, height: 80 + '%', alignSelf: 'flex-start' }} />
            <View style={{ flex: 5, flexDirection: 'column', marginLeft: 10 }}>
              <View style={{ height: 40 + '%' }}>
                <Text style={{ fontSize: 19, color: '#3B424A' }}>Edward Norton</Text>
              </View>
              <View style={{ height: 60 + '%', flexDirection: 'row' }}>
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

      <Text style={{ color: "#A4ADAD", fontSize: 25, textAlign: 'center', marginVertical: 10 }} > 60 min 00 sec</Text>

      <TouchableOpacity style={{ borderRadius: 10, height: 18 + '%', backgroundColor: '#ef5350', justifyContent: 'center' }}>
        <Text style={{ fontSize: 14, color: '#3B424A', textAlign: 'center' }}>START</Text>
      </TouchableOpacity>
    </View>
  </View >
)

const RenderDetail = props => (
  <View style={{ flexDirection: "column", height: 92 + '%', }}>
    <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-4.jpg" }}
      resizeMode="cover" style={{
        height: 22 + '%', flexDirection: 'row', alignItems: 'flex-end',
        justifyContent: 'center', backgroundColor: 'transparent',
        paddingBottom: 10
      }} blurRadius={1.3} >
      <View style={{ flex: 3, flexDirection: 'column', marginLeft: 15 }}>
        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14 }}>REQUESTS</Text>
        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18 }}>5</Text>
      </View>
      <View style={{ flex: 3, flexDirection: 'column' }}>
        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14, textAlign: 'center' }}>PLEDGE</Text>
        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>$150</Text>
      </View>
      <View style={{ flex: 3, flexDirection: 'column', marginRight: 15 }}>
        <Text style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 14, textAlign: 'right' }}>WEIGHT</Text>
        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 18, textAlign: 'right' }}>Light</Text>
      </View>
    </Image>

    <View style={{ flexDirection: 'column', margin: 10, height: 70 + '%' }}>
      <Text style={{ color: '#B5B5B5', fontSize: 11, textAlign: 'left' }}>SENDER</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 20 + '%', marginVertical: 5 }}>
        <Image source={{ uri: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg" }}
          resizeMode="cover" style={{ flex: 1, borderRadius: 10, height: 80 + '%', alignSelf: 'flex-start' }} />
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
            <Text style={{ height: 60 + '%', flexDirection: 'row', color: "#222", fontSize: 16 }}> (26)</Text>
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

      <TouchableOpacity style={{ borderRadius: 10, height: 15 + '%', backgroundColor: '#ef5350', marginVertical: 5, justifyContent: 'center' }}>
        <Text style={{ fontSize: 16, color: '#3B424A', textAlign: 'center' }}>REQUESTS</Text>
      </TouchableOpacity>
      <Text style={{ color: '#A2A2A5', textAlign: 'center' }}>25 people have sent a request</Text>
    </View>
  </View>
)

const ItemDetail = props => (
  <View style={{ flexDirection: 'column', flex: 1 }}>
    <Text style={{ color: '#B5B5B5', fontSize: 11 }}>{props.data.title}</Text>
    <Text style={{ color: '#4B4D52', fontSize: 18 }}>{props.data.from}</Text>
    <Text style={{ color: '#555A5F', fontSize: 15 }}>{props.data.to}</Text>
  </View>
)