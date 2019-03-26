import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Centered extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}
