import React, { Component } from 'react'
import { View } from "react-native"
import { Constants } from "expo"
import Header from "../component/Header"
import SearchBar from "../component/SearchBar"
import NewsList from "../component/NewsList"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  searchMain(serachvalue){
    fetch(`https://newsapi.org/v2/everything?q=${serachvalue}&sortBy=publishedAt&apiKey=159ab043c8be4a0d9f4f385a853ef619`)
      .then((responce) => {
        return responce.json();
      }).then((data) => {
        console.log(data.articles)
        this.setState({
          news: data.articles
        })
      }).catch((err) => {
      })
  }
  componentDidMount() {
    this.searchMain("iraq")
    
  }
  updateParent(data){
    this.setState({news:data})
  }
  render() {
    return (<View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
      <Header />
      <SearchBar searchFunction={this.searchMain.bind(this)} />
      <NewsList Newsa={this.state.news} />
    </View>);
  }
}

