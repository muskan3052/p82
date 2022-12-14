import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from "react-native-responsive-fontsize"

export default class PostCard extends component {
render() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.authorContainer}>
          <View style={styles.authorImageContainer}>
            <Image 
            source={require("profile_img.png")} 
            style={styles.profileImage}/>
          </View>
          <View style={styles.authorNameContainer}>
            <Text>style={styles.authorNameText} {this.props.post.author}</Text>
         </View>
        </View>
        <Image 
            source={require("post.jpeg")} 
            style={styles.postImage}/>
        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>
            {this.props.post.caption}
          </Text>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.likeButton}>
            <Ionicons name={"heart"} size={RFValue(30)} color={"white"}></Ionicons>
          < Text style={styles.likeText}>12k</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },

  authorContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },

  authorImageContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },

  authorNameContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },

  captionContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20)
  },
  
  postImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  authorNameText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  captionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});