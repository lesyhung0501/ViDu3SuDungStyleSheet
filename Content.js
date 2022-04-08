

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Content = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text>Content</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text>Content</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text>Content</Text>
      </View>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    box: {
        width: 70,
        height: 70,
        textAlign: 'center',
        
    },
    box1: {
        backgroundColor: 'red',
        
    },
    box2: {
        backgroundColor: 'yellow',
       
    },
    box3: {
        backgroundColor: 'green',
        
    }
})