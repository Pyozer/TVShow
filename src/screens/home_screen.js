import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TVShowsList from '../components/tvshows_list'
import SearchBar from '../components/searchbar';
import Centered from '../components/centered';

export default class HomeScreen extends React.Component {
    state = { search: "" }

    onSearch = (search) => {
        this.setState({ search })
    }

    render() {
        const { search } = this.state

        return (
            <View style={styles.container}>
                <SearchBar onSearch={this.onSearch} />
                {search && search.length > 0 ?
                    <TVShowsList style={styles.container} search={search} /> :
                    <Centered><Text>You can search a TV Show</Text></Centered>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
