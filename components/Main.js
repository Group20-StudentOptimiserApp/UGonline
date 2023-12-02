import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../redux/actions/index';
import { font, color } from '../global/styles';

export class Main extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }
  render() {
    const {currentUser} = this.props

    let today = new Date()
    let currentHour = today.getHours()
    let greetings;
    if (currentHour < 12){
        greetings = "Good Morning"
    }else if(currentHour < 16){
        greetings = "Good Afternoon"
    }else{
        greetings = "Good Evening"
    }

    if(currentUser == undefined){
      return(
        <View></View>
      )
    }

    return(
      <View style={styles.container}>
        <Text style={{fontFamily: font.medium, fontSize: 24, color: color.primary}}>{greetings}, {currentUser.name}</Text>
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)


const styles = StyleSheet.create({
    container:{
        backgroundColor: color.background,
        padding: 16,
        flex: 1,
    }
})