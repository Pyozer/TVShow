import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TVShowImage from '../components/tvshow_image';

export default class TVShowDetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    };

    render() {
        const show = this.props.navigation.getParam('show', {})
        return (
            <View style={styles.container}>

                <TVShowImage image={show.image} size={170} />

                <Text style={styles.mainTitle}>{show.name}</Text>
                <Text style={styles.summary}>{show.summary}</Text>

                <View style={styles.infoContainer}>
                    <View style={styles.infoContainerColumn}>
                        <Text style={styles.title}>Status :</Text>
                        <Text style={styles.text}>{show.status}</Text>

                        <Text style={styles.title}>Genres :</Text>
                        {show.genres.map((genre, i) => <Text style={styles.text} key={i}>{genre}</Text>)}
                    </View>

                    <View style={styles.infoContainerColumn}>
                        <Text style={styles.title}>Language :</Text>
                        <Text style={styles.text}>{show.language}</Text>

                        <Text style={styles.title}>Type :</Text>
                        <Text style={styles.text}>{show.type}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        flexDirection: 'column'
    },
    mainTitle: {
        fontWeight: '500',
        fontSize: 22,
        marginTop: 16
    },
    summary: {
        fontWeight: '300',
        fontSize: 18,
        marginTop: 16,
        textAlign: 'justify'
    },
    infoContainer: {
        marginTop: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoContainerColumn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    text: {
        fontWeight: '300',
        fontSize: 16,
        marginBottom: 16
    },
    title: {
        fontWeight: '500',
        fontSize: 16,
        marginBottom: 8,
    },
});