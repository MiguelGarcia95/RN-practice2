import React, {Component} from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';

class PickImage extends Component {
  render() {
    return(
      <View>
        <View style={styles.placeholder}>
          <Image source={this.props.previewImage} style={styles.previewImage} />
        </View> 
        <View style={styles.button}>
          <Button title='pick image' onPress={() => alert('pick image')} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  button: {
    margin: 5,
  }
});

export default PickImage;