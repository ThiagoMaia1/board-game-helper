import React from 'react';
import GameItem from '../../models/item';
import { Image, StyleProp, View, ViewStyle } from 'react-native';

function ItemImage({item, style} : {item : GameItem, style ?: StyleProp<ViewStyle>}) {
    return <View style={style}>
        <Image style={{
            flex: 1,
            width: undefined,
            height: undefined,
            resizeMode: 'contain'
        }} 
        source={item.imageRequired}/>
    </View>
}

export default ItemImage;
