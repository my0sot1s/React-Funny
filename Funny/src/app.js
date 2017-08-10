import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, StatusBar, ListView } from 'react-native'
import Card from './modules/Card';
import Interactable from 'react-native-interactable';
const { height, width } = Dimensions.get("screen")

class BaseApp extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ color: '#ba68c8' }, { color: '#52a43a' }, { color: '#f7aa17' }, { color: '#ef5350' }]),
    };
  }
  renderRow(rowData, sectionId, rowId) {
    return (
      <Interactable.View
        horizontalOnly={true}
        snapPoints={[{ x: 360 }, { x: 0 }, { x: -360 }]}>
        <Card color={rowData.color} key={rowId} />
      </Interactable.View>
    );
  }
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <App>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
          />
        </App>
      </View>
    );
  }
}


const App = props => (
  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 100 + '%', height, backgroundColor: "#525A75" }}>
    {props.children}
  </View>
)
const styles = StyleSheet.create({
  main: {

  }
});
export default BaseApp;
