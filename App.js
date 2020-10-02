import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput , TouchableOpacity} from 'react-native';
import profile from "./assets/profile.jpg";
import {SimpleLineIcons} from "@expo/vector-icons";
export default function App() {
  return (
    <View style={styles.container}>
         <Image source={profile} style={styles.image} />  

         <View  style={styles.iconContainer}>
           <SimpleLineIcons
           name="user"
           size={20}
           color="white"
           style={styles.icon} />
         </View>
         

    <View style={styles.infoBox}>
      <View style={styles.info}>
        <Text>School</Text>
        <TextInput />
      </View>

      <View style={styles.info}>
        <Text>Email Address</Text>
        <TextInput />
      </View>
      

      <View style={styles.info }>
        <Text style={styles.coloredTittle}>Name</Text>
        <TextInput style={styles.textInput} />
      </View>
      

      <View style={styles.info}>
        <Text  style={styles.coloredTittle}>NickName</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View style={styles.info}>
        <Text  style={styles.coloredTittle}>Emergency Contact</Text>
        <TextInput style={styles.textInput} />
      </View>

        <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>UPDATE PROFILE</Text> 
        </TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  image: {
    width: 150,
    height: 150,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 75,
    marginBottom: 1,
  },

  icon: {
    alignSelf: "center",
    paddingVertical: 6,
  },

  iconContainer: {
    alignSelf: "center",
    height: 35,
    width: 35,
    borderRadius: 20,
    position: "relative",
    top: -80,
    left: 47,
    backgroundColor: "deepskyblue",
  },

  infoBox: {
    marginHorizontal: 50,
  },

  info: {
    marginVertical: 20,
    marginTop: -5,
  },
  coloredTittle: {
    color: "deepskyblue",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "deepskyblue",
    paddingVertical: 18,
    borderRadius: 50,
    marginTop: -10,
  },

  buttonText: {
    color: "white",
    marginHorizontal: 100,
  },

  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 1,
  },
});