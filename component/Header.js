import React, { Component } from 'react'
import { View, Image, Text,StyleSheet } from "react-native"

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        < Image style={styles.image} resizeMode="cover" source={require("../assets/logo.png")} />
         <Text style={styles.titel}> This App News</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
headerContainer:{
height:60,
flexDirection: "row",
alignItems: "center",
justifyContent:"center",
backgroundColor:"#0276aa",
fontWeight:"blod"
},
titel:{
marginLeft:50,
fontWeight:"blod"
},
image:{
 height: 49, width: 100
}
})