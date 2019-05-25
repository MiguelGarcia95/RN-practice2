import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeadingText = props => (
  <Text style={styles.textHeading}>Please Log In</Text>
)


const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: 'bold'
  },
})