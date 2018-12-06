import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from "react-native";

export default class NewsItem extends Component {
  render() {
    let  {Item}  = this.props;
    const {description,publishedAt,title,urlToImage}=Item;
    console.log(Item)
    return (
      <View style={styles.articales}>
        <View> 
        < Image style={styles.image} resizeMode="cover"
          source={{ uri: urlToImage }} />
        </View>
        <View style={{position: "absolute", left: 100 }}>
        <View style={{width: 250,marginLeft: 4}}>
          <Text style={styles.articleTitel}>{title}</Text>
        </View>
        <View style={{position: "absolute",buttom: 4 }}>
          <Text style={styles.articleTime}>{publishedAt}</Text>
        </View>
        </View>
      </View>
      );
  }
}



const styles = StyleSheet.create({
  articales: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginLeft: 0,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    padding: 2,
    paddingRight: 5,
    border: "#E5E9F2",
    borderRadius: 4,
        paddingTop:5,
        paddingBottom:5,
        paddingLeft:2

  },
  image: {
    height: 100, width: 100

  }
  ,
  articleDescription: {
    marginLeft: 6,
    flexGrow: 1,
   position: "absolute"
  },
  articleTime: {
    color: "#399DF2",
    fontWeight: "bold",
    position: "absolute",
    bottom: 6,
    fontFamily: "sans-serif",
  }
  ,
  articleTitel: {
    fontFamily: "Playfair Display', serif",
    textTransform: "capitalize",

  }
})

