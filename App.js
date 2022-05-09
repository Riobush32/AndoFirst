import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'salmon'}} />
      <Text>Hello World</Text>
      <Photo />
      <Text>Hello World</Text>
      <Home />
      <Text>Hello World</Text>
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
    </View>
  );
};

const Home = () => {
  return <Text>This Is Home Component!</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/arch'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text> This Is Class Component!!</Text>;
  }
}

export default App;
