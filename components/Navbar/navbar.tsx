import React from 'react'
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    StatusBar
  } from 'react-native';
  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Navbar: React.FC = () => {
    
    return(
        <View style={styles.headerView}>
            <View style={{ flexDirection: 'row'}}>
                <Icon name="account-outline" size={50} style={{ flexDirection: 'row'}}/>
                <Icon name="plus" size={50} style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerView: {
        height: StatusBar.currentHeight,
        padding: 20,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        }
    })

export default Navbar