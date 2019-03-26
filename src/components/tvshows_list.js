import React from 'react'
import { View, ActivityIndicator, Text, FlatList } from 'react-native'
import TVShowResult from './tvshow_result'
import Centered from './centered';

export default class TVShowsList extends React.Component {
    _isMounted = false

    constructor(props) {
        super(props)
        this.state = { isLoading: true }
    }

    componentDidMount() {
        this._isMounted = true
        this.fetchTvShows()
    }

    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {
            this.fetchTvShows();
        }
      }

    componentWillUnmount() {
        this._isMounted = false
    }

    fetchTvShows = () => {
        
        fetch('http://api.tvmaze.com/search/shows?q=' + this.props.search)
            .then((response) => response.json())
            .then((responseJson) => {
                if (!this._isMounted) return
                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading)
            return (
                <Centered>
                    <ActivityIndicator style={{flex: 1}} size={50} />
                </Centered>
            )

        return (
            <FlatList
                style={{ flex: 1, paddingTop: 10 }}
                data={this.state.dataSource}
                renderItem={({ item }) => <TVShowResult show={item.show} />}
                keyExtractor={(_, index) => `${index}`}
            />
        );
    }
}