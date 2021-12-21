import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pokemonActions from './actions/pokemons.js';

import PageIndividual from './src/pages/PageIndividual';
import PageMultiple from './src/pages/PageMultiple';

import Footer from './src/components/Footer';
import HeaderComponent from './src/components/HeaderComponent';

const image = { uri: "https://iili.io/7yJVa4.jpgttps://reactjs.org/logo-og.png" };

const App = (props) => {
   //console.log(props)

   return (
      <View style={styles.container}>
         <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
            imageStyle={{ opacity: 0.4 }}>
            <HeaderComponent />

            {
               (props.pokemon) ?
                  <PageIndividual
                  // pokemon={pokemon}
                  // setPokemon={setPokemon}
                  /> :
                  <PageMultiple
                  // setPokemon={setPokemon}
                  />
            }
         </ImageBackground>
         <Footer />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "rgba(0, 0, 255, 0.5)",
   },
   image: {
      flex: 1,
   },
});

const mapStateToProps = state => ({
   pokemon: state.pokemon,
});

const ActionCreators = Object.assign(
   {},
   pokemonActions,
);
const mapDispatchToProps = dispatch => ({
   actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)






// class App extends Component {
//    decrementCount() {
//       let { count, actions } = this.props;
//       count--;
//       actions.changeCount(count);
//    }
//    incrementCount() {
//       let { count, actions } = this.props;
//       count++;
//       actions.changeCount(count);
//    }
//    render() {
//       const { count } = this.props;
//       return (
//          <View styles={styles.container}>
//             <Button
//                title="increment"
//                onPress={() => this.incrementCount()}
//             />
//             <Text style={styles.textCenter}>{count}</Text>
//             <Button
//                title="decrement"
//                onPress={() => this.decrementCount()}
//             />
//          </View>
//       );
//    }
// };


