# windowfn包发布

## 常用函数封装

- 使用方法

```bash,shell
npm i windowfn -D
#或者
cnpm i windowfn -D
```

- 在vue中使用

```js
import fn from 'windowfn';

## 方法调用如下
// js 冒泡排序
fn.bubbleSort(array)
// 平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
fn.covArr(arr)
// css样式 id或者class
fn.css(id, index, json)
// 兼容
fn.event(e)
// 清除对象中值为空的属性
fn.filterParams(obj)
// 获取cookie
fn.getCookie(key)
// 到某一个时间的倒计时
fn.getEndTime(endTime)
// 获取css属性值
fn.getStyle(element, attr)
// 获取系统当前时间
fn.getTime(str, type)
// 获取，设置url参数
fn.getUrlPrmt(url)
// 隐藏 id或者class
fn.hide(id, index)
// 插入排序
fn.insertSort(array)
// 方向键上下
fn.keyCode()
// 键盘事件
fn.keybroad()
// 数组最大值
fn.maxArr(arr)
// 数组最小值
fn.minArr(arr)
// 阻止滚动条冒泡事件
fn.preventScroll(id)
// 随机产生颜色
fn.randomColor()
// 随机返回一个范围的数字
fn.randomNumber(n1,n2)
// 随机码
fn.randomNumberOne(count)
// 从数组中随机获取元素
fn.randomOne(arr)
// 删除cookie
fn.removeCookie(key)
// 设置cookie
fn.setCookie(key, value, iDay)
// 设置url参数
// setUrlPrmt({'a':1,'b':2})
// 显示 a=1&b=2
fn.setUrlPrmt(obj)
// 显示
// id或者class
fn.show(id, index)
// 阻止冒泡行为
fn.stopBubble(e)
// 阻止默认行为
fn.stopDefault(e)
// 求和
fn.sumArr(arr)
// js 利用sort进行排序
fn.systemSort(array)
// 千分位处理
fn.toFormatData(num)
// 去重加拼接
fn.toGether(index, array)
// 统计数量
fn.totalNum(val)
// 现金额大写转换函数
fn.upDigit(num)
```