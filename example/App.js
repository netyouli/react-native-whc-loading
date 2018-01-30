/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//  Created by WHC on 18/1/29.
//  Copyright © 2017年 WHC. All rights reserved.
//
//  Github <https://github.com/netyouli/SexyJson>
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

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import Loading from 'react-native-whc-loading';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight
              style={[styles.button, {backgroundColor: 'red'}]}
              onPress={() => {
                this.refs.loading1.show();
                setTimeout(() => {
                    this.refs.loading1.close();
                }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 1</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={[styles.button, {backgroundColor: 'gray'}]}
              onPress={() => {
                  this.refs.loading2.show();
                  setTimeout(() => {
                      this.refs.loading2.close();
                  }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 2</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={[styles.button, {backgroundColor: '#f4ea2a'}]}
              onPress={() => {
                  this.refs.loading3.show();
                  setTimeout(() => {
                      this.refs.loading3.close();
                  }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 3</Text>
          </TouchableHighlight>

          <TouchableHighlight
              style={[styles.button, {backgroundColor: '#1296db'}]}
              onPress={() => {
                  this.refs.loading4.show();
                  setTimeout(() => {
                      this.refs.loading4.close();
                  }, 2000);
              }}
          >
              <Text style={styles.text}>loading style 4</Text>
          </TouchableHighlight>

          <Loading ref='loading1'/>
          <Loading ref='loading2'
                   image={require('./images/loading2.png')}/>
          <Loading ref='loading3'
                   image={require('./images/loading3.png')}
                   easing={Loading.EasingType.linear}/>
          <Loading ref='loading4'
                   backgroundColor={'#00000096'}
                   indicatorColor={'#fff'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding:30,
    },
    button: {
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
});
