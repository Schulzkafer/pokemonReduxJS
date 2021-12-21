import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import ButtonComponent from './ButtonComponent';

const Filter = (props) => {

   const [text, setText] = useState("");

   return (
      <View>
         <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder={"type name of a pokemon e touch the filter"}
         />
         <ButtonComponent
            execFunction={() => props.filterNames(text)}
         >FILTER
         </ButtonComponent>
      </View>
   )
}

const styles = StyleSheet.create({
   input: {
      height: 40,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "yellow",
      backgroundColor: "#ffff99",
   },
});

export default Filter;