import { View, Image, Text } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { CircleButton, RectButton } from './Button'
import { COLORS, SIZS, SHADOWS, assets, SIZES } from '../constants'
import { SubInfo, EthPrice, NFTTitle } from './SubInfo'

const NFTCard = ({ data }) => {
    const navigation = useNavigation();

    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{ width: "100%", height: 200 }}>
                <Image source={data.image}
                    resizeMode="cover"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font
                    }}
                ></Image>
                <CircleButton imgUrl={assets.heart} right={10} top={10} ></CircleButton>
            </View>

            <SubInfo />
            <View
                style={{ width: "100%", padding: SIZES.font }}
            >
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />

                <View style={{
                    marginTop: SIZES.font,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignContent: "center"
                }}>
                    <EthPrice price={data.price} />
                    <RectButton minWidth={120} fotnSize={SIZES.font} handlePress={() => navigation.navigate("Details", { data })} />

                </View>
            </View>
        </View>
    )
}

export default NFTCard