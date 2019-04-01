import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';
import TVShowImage from '../components/tvshow_image';

export default class TVShowDetailScreen extends React.Component {
    render() {
        const show = this.props.navigation.getParam('show', {})
        return (
            <ScrollView contentContainerStyle={{ padding: 16 }}>

                <TVShowImage image={show.image} size={170} />

                <Text style={styles.mainTitle}>{show.name}</Text>
                <HTML
                    html={show.summary}
                    tagsStyles={{ p: { textAlign: 'justify', fontSize: 17 } }}
                />

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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    mainTitle: {
        fontWeight: '500',
        fontSize: 22,
        marginTop: 16,
        marginBottom: 12
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