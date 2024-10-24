import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import bgImg from '../../assets/background.png'
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location'
import { MetoApi } from '../Api/weather'
import { useFonts } from 'expo-font'
import Txt from '../UI/Text'
import MertroBasic from './mertroBasic'
import MetroAdvance from './metroAdvance'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Forcaste from './Forcaste'
import SearchBar from './SearchBar'
const Stack = createNativeStackNavigator()
const theme = { colors: { background: 'transparent' } }

const WeatherCheck = () => {
    const [location, setLocation] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [locationInfo, setLocationInfo] = useState('');
    const [cityValue, setcity] = useState('');
    const [loaded, error] = useFonts({
        'adaptive': require('../../assets/font/Alata-Regular.ttf'),
    });
    useEffect(() => {
        (async () => {
            const { status } = await requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was dined');
                return;
            }
            const location = await getCurrentPositionAsync();
            setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude })
        })()
    }, [])
    useEffect(() => {
        if (location) (async () => {
            const data = await MetoApi.fetchWeatherByCoords(location);
            const city = await MetoApi.fetchCityByCoords(location)
            setcity(city)
            setLocationInfo(data)
        })()
    }, [location]);

    async function getLatLong(city) {
        try{

            const { latitude, longitude } = await MetoApi.fetchLatLongByCity(city?.trim())
            setLocation({ latitude, longitude })
        }catch(e){
            Alert.alert('Aouch!',e)
        }
    }
    return (
        <NavigationContainer theme={theme} >






            <ImageBackground imageStyle={styles.bgStyle} style={styles.image_bg} source={bgImg}>
                {loaded ? <SafeAreaProvider>
                    <SafeAreaView style={styles.root}>
                        <Stack.Navigator anim screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }} initialRouteName='home'>

                            <Stack.Screen name='home' >
                                {() => <>

                                    <View style={styles.meteo_basic}>
                                        {locationInfo && cityValue && <MertroBasic {...locationInfo} city={cityValue} />}
                                    </View>

                                    <View style={styles.searchBar}>
                                        <SearchBar callBack={getLatLong}/>
                                    </View>

                                    <View style={styles.meteo_advance}>
                                        {locationInfo && cityValue && <MetroAdvance {...locationInfo} />}
                                    </View>
                                </>
                                }
                            </Stack.Screen>
                            <Stack.Screen name='forecast'>
                                {() => locationInfo && <Forcaste {...locationInfo} city={cityValue} />}
                            </Stack.Screen>
                        </Stack.Navigator>
                    </SafeAreaView>
                </SafeAreaProvider> : null}
            </ImageBackground>
        </NavigationContainer>
    )
}

export default WeatherCheck

const styles = StyleSheet.create({
    image_bg: {
        flex: 1,
        backgroundColor: "black"
    },
    root: {
        flex: 1
    },
    meteo_basic: { flex: 2 },
    searchBar: { flex: 2, alignItems: "center" },
    meteo_advance: { flex: 1 },

    bgStyle: {
        opacity: 0.5
    }
})