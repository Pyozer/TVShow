import React from 'react'
import { Image } from 'react-native'

const kDefaultImage = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1.png'

export default class TVShowImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { size, image } = this.props

        let imageUrl = kDefaultImage;
        if (image && image.medium)
            imageUrl = image.medium

        return (
            <Image
                style={{ width: size, height: size, borderRadius: 8 }}
                source={{ uri: imageUrl }}
            />
        )
    }
}
