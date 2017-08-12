import React, { Component } from 'react';
import {
	Animated,
  View,
	Image
} from 'react-native';
import Images from '../../img/images';

class ProgressiveImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
             thumbnailOpacity: 100, imageOpacity: new Animated.Value(0)
        };
    }

    onLoad() {
				Animated.timing(this.state.imageOpacity, {
						toValue: 1,
						duration: 650
				}).start();

				const wait = new Promise((resolve) => setTimeout(resolve, 50));
        wait.then(() => { this.setState({ thumbnailOpacity: 0 }); });
    }

    render() {
        return (
            <View
            style={[styles.container, this.props.style]}
            width={this.props.style.width}
            height={this.props.style.height}
            backgroundColor={'#ffffff'}
            >
                <Animated.Image
                   style={[
                       {
                           position: 'absolute',
                           opacity: this.state.imageOpacity
                       },
                       this.props.style,
                       this.props.source ? null : { 
                         resizeMode: 'contain',
                         height: '40%',
                         width: '40%'
                       }
                   ]}

                   source={this.props.source ? this.props.source : Images.logo}
                   onLoad={(event) => this.onLoad(event)}
                />
                <Image
                   resizeMode={'contain'}
                   style={[
                       {
                           opacity: this.state.thumbnailOpacity
                       },
                       styles.placeholder
                   ]}
                   source={Images.logo}
                />
            </View>
        );
    }
}

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA'
  },
  placeholder: {
    resizeMode: 'contain',
    backgroundColor: 'transparent',
    height: '40%',
    width: '40%'
  }
};

export { ProgressiveImage };
