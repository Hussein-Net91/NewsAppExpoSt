import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from "react-native"

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      serachValue: "iraq"

    }
  }
  search(value) {
    if (value.trim() != "") {
      this.setState({
        serachValue: value
      })
       this.props.searchFunction(value)
    console.log(value)
    }
    else {
      this.setState({
        serachValue: ""
      })
    }
   
  }
  render() {
    return (<View style={styles.SearchContainer}>
      <TextInput placeholder="Search Input" style={styles.SearchInput} onChangeText={this.search.bind(this)}  value={this.state.serachValue} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  SearchContainer: {
    flex: 0.15,
    backgroundColor: "#03a9f4",
    alignItems: "center",
    justifyContent: "center",
    height: 10
  },
  SearchInput: {
    backgroundColor: "#000",
    borderRadius: 20,
    height: 38,
    border: 0,
    width: 250,
    color: "#A9A9A9",
    paddingLeft: 15
  }
})