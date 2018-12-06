import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import NewsItem from '../component/itemslist';

export default class NewsList extends Component {
  render() {
    let News1 = this.props.Newsa
    console.log(News1)
    const newsList = News1.map((NewsItemData) => <NewsItem Item={NewsItemData} />)
    return <View style={styles.articaleContainer}>{newsList}</View>
  }
}

const styles = StyleSheet.create({
  articaleContainer: {
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: 2,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: 'rgba(245, 246, 250, 0.8)',
    height: 60,
    flexDirection: 'column',
  },
});
