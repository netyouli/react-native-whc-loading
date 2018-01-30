# react-native-whc-loading
A react native module to show loading ui, it works on iOS and Android.

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-loading.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-loading/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-loading/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-loading.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-loading)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-whc-loading/master/LICENSE)
[ ![语言 中文](https://img.shields.io/badge/语言-中文-yellow.svg)](https://github.com/netyouli/react-native-whc-loading/blob/master/README.zh.md)



## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm i react-native-whc-loading --save`
* 2.`import Loading from 'react-native-whc-loading'`

## Demo  
* [Example](https://github.com/netyouli/react-native-whc-loading/tree/master/example)

![Screenshots](https://raw.githubusercontent.com/netyouli/react-native-whc-loading/master/example/screenshots/react-native-whc-loading.gif)

## Getting started  

Add `react-native-whc-loading` to your js file.

`import Loading from 'react-native-whc-loading'`

Inside your component's render method, use Loading:

```javascript
 render() {
         return (
             <View style={styles.container}>
                 ...
                 <Loading ref="loading"/>
             </View>
         );
 }

```

Then you can use it like this:

```javascript
 /// show loading ui
 this.refs.loading.show();

 /// close loading ui
 this.refs.loading.show(false);
 /// or
 this.refs.loading.close();
```

Or use show prop control show/hide
```javascript
render() {
          return (
              <View style={styles.container}>
                  ...
                  <Loading show={true/false}/>
              </View>
          );
  }
```

### Basic usage

```javascript
render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={()=>{
                        this.refs.loading.show();
                    }}>
                    <Text>Start Loading</Text>
                </TouchableHighlight>
                <Loading ref="loading"/>
            </View>
        );
    }
```

### Custom Loading

```javascript
render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={()=>{
                        this.refs.loading.show();
                    }}>
                    <Text>Start Loading</Text>
                </TouchableHighlight>
                <Loading
                    ref="loading"
                    image=require('../path/imagename.png')
                    backgroundColor='#ffffffF2'
                    borderRadius=5
                    size=70
                    imageSize=40
                    indicatorColor='gray'
                    easing=Loading.EasingType.ease
                />
            </View>
        );
    }
```


## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
image |  PropTypes.any |true | null  | Custom loading image
backgroundColor  | PropTypes.string  | true | '#ffffffF2'  |   Custom loading background color
borderRadius  | PropTypes.number  | true | 5  |   Custom loading ui border radius
size  | PropTypes.number  | true | 70  |   Custom loading ui height width
imageSize  | PropTypes.number  | true | 40  |   Custom loading image size
indicatorColor  | PropTypes.string  | true | 'gray'  |   Custom default loading indicator color
easing  | PropTypes.func  | true | Easing.ease  |   Custom loading image animation type



Method   |  Type     | Optional | Description
----------------- | -------- | -------- | -----------
show(bool)   | function | true | show a loading ui
close()  |   function  |  -   |   hide loading ui


## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**
