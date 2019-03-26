import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation';
import TVShowImage from './tvshow_image';

class TVShowResult extends Component {
  onPress = () => {
    this.props.navigation.push('TVShowDetails', {
      show: this.props.show,
    })
  }

  render() {
    const { show } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPress}>
        <TVShowImage image={show.image} size={50} />
        <View style={styles.infos}>
          <Text style={styles.title}>{show.name}</Text>
          <Text style={styles.status}>{show.status}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'row'
  },
  infos: {
    flex: 1,
    marginStart: 16
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  subtitle: {
    fontSize: 18,
  },
});

export default withNavigation(TVShowResult)