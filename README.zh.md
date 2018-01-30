# [react-native-whc-loading](https://github.com/crazycodeboy/react-native-whc-loading/)
一款简单易用的 Loading 组件，支持 Android&iOS。

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-loading.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-loading/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-loading/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-loading.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-loading)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/netyouli/react-native-whc-loading/master/LICENSE)
[ ![language English](https://img.shields.io/badge/language-English-yellow.svg)](https://github.com/netyouli/react-native-whc-loading/)




## 目录

- [安装](#安装)
- [Demo](#demo)
- [如何使用？](#如何使用？)
- [API](#api)
- [贡献](#contribution)

## 安装

* 1.在终端运行 `npm i react-native-whc-loading --save`
* 2.在要使用`Loading`的js文件中添加`import Loading from 'react-native-whc-loading'`

## Demo  
* [Examples](https://github.com/netyouli/react-native-whc-loading/tree/master/example)

![Screenshots](https://raw.githubusercontent.com/netyouli/react-native-whc-loading/master/example/screenshots/react-native-whc-loading.gif)

## 如何使用？  

>第一步：

在你的js文件中导入 `react-native-whc-loading`：

`import Loading from 'react-native-whc-loading'`

>第二步：   

将下面代码插入到`render()`方法中：   


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

>注意: 请将`<Loading ref="loading"/>` 放在最外层View的底部.

>第三步：

使用：  

```javascript
  /// 显示 loading
  this.refs.loading.show();

  /// 关闭 loading ui
  this.refs.loading.show(false);
  /// 或者调用close方法关闭
  this.refs.loading.close();
```

或者使用Loading的 show属性控制显示和关闭状态
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

### 用例  

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

### 自定义 Loading

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


属性              | 类型     | 可选 | 默认值     | 描述
----------------- | -------- | -------- | ----------- | -----------
image |  PropTypes.any |true | null  | 自定义加载图片
backgroundColor  | PropTypes.string  | true | '#ffffffF2'  |   自定义加载UI背景颜色
borderRadius  | PropTypes.number  | true | 5  |   自定义加载UI圆角
size  | PropTypes.number  | true | 70  |   自定义加载UI高宽尺寸
imageSize  | PropTypes.number  | true | 40  |   自定义加载UI图片高宽尺寸
indicatorColor  | PropTypes.string  | true | 'gray'  |   自定义默认加载器颜色
easing  | PropTypes.func  | true | Easing.ease  |   自定义加载动画样式


方法            | 类型     | 可选 | 描述
----------------- | -------- | -------- | -----------
show(bool)   | function | true | 显示加载器
close()  |   function  |  -   |   隐藏关闭加载器


## 贡献

欢迎大家提Issues。如果能为Issues配一个异常或报错的截图，能帮助我快速的定位问题和解决问题。  
另外欢迎大家Pull requests，为项目贡献的智慧。

---

**MIT Licensed**    
大家可以自由复制和转载。  
