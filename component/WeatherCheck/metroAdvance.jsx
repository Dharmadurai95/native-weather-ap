import React from 'react'
import { StyleSheet, View } from 'react-native'
import Txt from '../UI/Text';

const MetroAdvance = (props) => {
  const { current_weather:{windspeed},daily:{sunrise,sunset}} = props
  const sunR = sunrise[0].split('T')[1]
  const sunS = sunset[0].split('T')[1]
  return <View style={s.root}>
    <StyleChildren>
      <StyleLabel>{sunR}</StyleLabel>
      <StyleValue>Sunrise</StyleValue>
    </StyleChildren>
    <StyleChildren>
      <StyleLabel>{sunS}</StyleLabel>
      <StyleValue>Sunset</StyleValue>
    </StyleChildren>
    <StyleChildren>
      <StyleLabel>{windspeed} km/h</StyleLabel>
      <StyleValue>Windspeed</StyleValue>
    </StyleChildren>
  </View>
}

export default MetroAdvance;
function StyleChildren({ children }) {
  return <View style={s.container}>{children}</View>
}

function StyleLabel({ children }) {
  return <Txt style={s.label}>
    {children}
  </Txt>
}
function StyleValue({ children }) {
  return <Txt style={s.value}>
    {children}
  </Txt>
}
const s = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    height: 120,
    alignItems: "center",
    backgroundColor: "#0000005c",
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 12,
  },
  container: {
    alignItems: "center"
  },
  label: { fontSize: 15 },
  value: { fontSize: 20 }
})