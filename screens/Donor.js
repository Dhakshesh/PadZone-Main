import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions,TextInput, TouchableOpacity, ImageBackground} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import db from "../config";
import firebase from "firebase";
export default class DonorScreen extends React.Component{
constructor(){
    super()
    this.state={
        name:'',
        phonenumber:'',
        address:'',
        amount:'',
        user:'donor'
    }
}
adddonor=async()=>{
 db.collection("transactions").add({
  name:this.state.name,
  phonenumber:this.state.phonenumber,
  address:this.state.address,
  amount:this.state.amount,
  user:this.state.user,
  
    
      date: firebase.firestore.Timestamp.now().toDate(),
      
    });}
render(){
return(<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/menstrual.jpeg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Donor Screen</Text>
                    </View>
						<View style={styles.fieldsContainer}>
						<TextInput
                style={[styles.routeCard,styles.routeText]}
                onChangeText={name => this.setState({ name })}
                placeholder={"Name"}
                placeholderTextColor="black"
              />
			  <TextInput
                     style={[styles.routeCard,styles.routeText]}
                onChangeText={phonenumber => this.setState({ phonenumber })}
                placeholder={"Phone Number"}
                keyboardType={'numeric'}
                placeholderTextColor="black"
              />
			  <TextInput
                style={[
                  styles.routeCard,
                  styles.routeText,
                  
                ]}
                onChangeText={address => this.setState({ address })}
                placeholder={"Address"}
                multiline={true}
                numberOfLines={4}
                placeholderTextColor="black"

              />
			  <TextInput
                     style={[styles.routeCard,styles.routeText]}
                onChangeText={amount => this.setState({ amount })}
                placeholder={"Amount"}
                placeholderTextColor="black"
              />
			  <TouchableOpacity      style={[styles.routeCard,styles.routeButton]}
              onPress={() =>
                this.adddonor()}>
              <Image source={require("../assets/receive.png")} style={styles.iconImage}></Image>
			  </TouchableOpacity>
			  </View>
              </ImageBackground>
						</View>
						)
}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white"
	},
	fieldsContainer: {
    flex: 0.85
  },
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 35
	},
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
	inputFont: {
    height: RFValue(40),
	marginTop: RFValue(10),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
	appTitle: {
		flex: 0.7,
	},
	appIcon: {
		flex: 0.3,
		justifyContent: "center",
		alignItems: "center"
	},
	iconImage: {
		width: "100%",
		height: "100%",
		resizeMode: "contain"
	},
	appTitleTextContainer: {
		flex: 0.7,
		justifyContent: "center",
		backgroundColor:'lightblue'
	},
    routeCard: {
        flex: 0.15,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
        fontSize: 20
    },
	routeButton:{
	backgroundColor: "black",
    flex:0.25
    //borderTopRightRadius: 10,
    //borderBottomRightRadius: 10,
	//borderRadius: 20,
    //justifyContent: "center",
    //alignItems: "center"
},
	appTitleText: {
		color:'white',fontSize:20
		}
		}
		)