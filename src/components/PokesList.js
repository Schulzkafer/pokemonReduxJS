import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PokesList = (props) => {

   return (
      <ScrollView>
         <View style={styles.view}>
            {
               props.filteredPokesCharacteristics.map((poke) => {
                  return (
                     <View
                        key={Math.random()}
                        style={styles.toCenter}
                     >
                        <TouchableOpacity
                           style={styles.touchableOpacity}
                           onPress={() => props.setPokemon(poke)}
                        >
                           <Text style={styles.text}>{poke.name}</Text>

                           <Image
                              style={styles.tinyLogo}
                              source={{
                                 uri: `${poke.sprites.other.home.front_default}`,
                              }}
                           />
                        </TouchableOpacity>

                     </View>
                  )
               })
            }
         </View >
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   toCenter: {
      alignItems: "center",
      padding: 10,
   },
   tinyLogo: {
      width: 65,
      height: 65,
   },
   text: {
      marginBottom: 2,
      fontSize: 15,
      fontWeight: "bold",
      color: "rgb(12, 3, 38)",
   },
   touchableOpacity: {
      alignItems: "center",
      flexWrap: 'wrap',
   },
   view: {
      justifyContent: 'space-evenly',
      flexDirection: "row",
      flexWrap: 'wrap',
      marginBottom: 4,
      padding: 10,
      alignItems: 'center',
   }
});

export default PokesList;