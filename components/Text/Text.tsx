import React from 'react';
import {Text as _Text} from 'react-native';

export default function Text(props : _Text['props']) {
    const {style, ...otherProps} = props;
    return <_Text style={[style, {fontFamily: '"Press Start 2P Regular"'}]} {...otherProps}/>
}