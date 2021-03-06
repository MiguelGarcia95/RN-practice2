import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {authLogout} from '../../store/actions';

class SideDrawer extends Component {
  render() {
    return(
      <View style={[styles.container, {width: Dimensions.get("window").width * 0.8}]}>
        <TouchableOpacity onPress={this.props.onAuthLogout} >
          <View style={styles.drawerItem}>
            <Icon 
              style={styles.drawerItemIcon} 
              name={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'} 
              size={30} 
              color='#888'
            />
            <Text>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
    backgroundColor: 'white'
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcon: {
    marginRight: 10,
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAuthLogout: () => dispatch(authLogout())
  }
}

export default connect(null, mapDispatchToProps)(SideDrawer); 