
//  Created by WHC on 18/1/29.
//  Copyright © 2017年 WHC. All rights reserved.
//
//  Github <https://github.com/netyouli/react-native-whc-loading>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Animated,
    Easing,
    ActivityIndicator,
    Modal,
} from 'react-native';


export default class Loading extends Component {
    static EasingType = Easing;

    static propTypes = {
        image:           PropTypes.any,
        backgroundColor: PropTypes.string,
        borderRadius:    PropTypes.number,
        size:            PropTypes.number,
        imageSize:       PropTypes.number,
        indicatorColor:  PropTypes.string,
        easing:          PropTypes.func,
        loading:         PropTypes.bool,
    };

    static defaultProps = {
        image:            null,
        backgroundColor:  '#ffffffF2',
        borderRadius:     5,
        size:             70,
        imageSize:        40,
        indicatorColor:   'gray',
        easing:           Easing.ease,
        loading:          null,
    };


    constructor(props) {
        super(props);
        this.doingAnimation = false;
        this.easing = Easing.ease;
        this.state = {
            rotate_value: new Animated.Value(0),
            show: false,
            startAnimation: false,
        };
    }

    _startAnimation = () => {
        this.doingAnimation = true;
        this.state.rotate_value.setValue(0);
        Animated.timing(this.state.rotate_value, {
            toValue: 1,
            duration: 1000,
            easing: Easing.out(this.easing),
        }).start(() => {
            if (this.state.startAnimation) {
                this._startAnimation();
            }
        });
    };

    /**
     * show loading
     * @param isShow
     */
    show(isShow = true) {
        if (isShow) {
            this.setState((state) => {
                state.show = true;
                state.startAnimation = true;
                return state;
            });
            !this.doingAnimation && this._startAnimation();
        }else {
            this.close();
        }
    }

    /**
     * hide loading
     */
    close() {
        this.doingAnimation = false;
        this.setState((state) => {
            state.show = false;
            state.startAnimation = false;
            return state;
        });
    }

    render() {
        const {
            image           = null,
            backgroundColor = '#ffffffF2',
            borderRadius    = 5,
            size            = 70,
            imageSize       = 40,
            indicatorColor  = 'gray',
            easing          = Easing.ease,
            loading         = null,
        } = this.props;
        this.easing = easing;

        let {show} = this.state;
        if (loading != null) {
            show = loading;
        }
        return (
            <Modal transparent = {true}
                   visible = {show}>
                <View style = {styles.loadingView}>
                    <View style = {[styles.loading, {
                        backgroundColor: backgroundColor,
                        borderRadius: borderRadius,
                        width: size,
                        height: size,
                    }]}>
                        {
                            image ?
                                <Animated.Image
                                    style = {{
                                        width: imageSize,
                                        height: imageSize,
                                        transform: [
                                            {
                                                rotateZ: this.state.rotate_value.interpolate({
                                                    inputRange: [0,1],
                                                    outputRange: ['0deg', '360deg'],
                                                }),
                                            },
                                        ],
                                    }}
                                    source = {image}/> :
                                <ActivityIndicator
                                    size = {'large'}
                                    color = {indicatorColor}
                                    animating = {true}/>
                        }
                    </View>
                </View>
            </Modal>
        );
    }
}


const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        backgroundColor: '#00000033',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const EasingType = Loading.EasingType;
