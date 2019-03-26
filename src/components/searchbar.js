import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class SearchBar extends Component {
    render() {
        return (
            <TextInput
                onChangeText={this.props.onSearch}
                style={styles.inputText}
                placeholder="Search"
                placeholderTextColor="#444"
                
            />
        )
    }
}

const styles = StyleSheet.create({
    inputText: {
        backgroundColor: '#FAFAFA',
        padding: 14,
        marginBottom: 12
    }
})
