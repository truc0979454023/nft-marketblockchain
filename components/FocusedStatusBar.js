import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusBar = (props) => {

    const IsFocused = useIsFocused();

    return IsFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FocusedStatusBar