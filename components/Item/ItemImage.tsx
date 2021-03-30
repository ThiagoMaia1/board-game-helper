import React from 'react';
import { items } from '../../models/item';
import { Image, StyleProp, View, ViewStyle } from 'react-native';

function ItemImage({item, style} : {item : keyof typeof items, style ?: StyleProp<ViewStyle>}) {
    return <View style={style}>
        <Image style={{
            flex: 1,
            width: undefined,
            height: undefined,
            resizeMode: 'contain'
        }} 
        source={require(`../../assets/items/${item}.png`)}/>
    </View>
}

export default ItemImage;
