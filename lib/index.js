var fn = {
  //千分位处理
  toFormatData(num) {
    if (num == '' || num == undefined) {
      return '';
    }
    var data = parseFloat(num.toString().replace(/\,/g, ""));
    if (!isNaN(data)) {
      var temp = data.toFixed(2).toString().split(".");
      temp[0] = temp[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), "$1,");
      return temp.join(".");
    } else {
      return '';
    }
  },
  //去重加拼接
  toGether(index, array) {
    let list = [];
    let arr = array[index];
    if (arr.length > 0) {
      arr.forEach((item, key) => {
        list.push(item);
      })
    }
    let newArray = Array.from(new Set(list)).join(',');
    console.log(typeof (Array.from(new Set(list))))
    console.log(Array.from((new Set(list))))
    console.log(newArray)
    console.log(typeof (newArray))
    return newArray;
  },
  /*方向键上下*/
  keyCode: document.onkeydown = function (event) {
    var e = event || window.event;

    if (e && e.keyCode == 38 || e && e.keyCode == 37) { //上,左
      alert('38=上键，37=左键');
    }

    if (e && e.keyCode == 40 || e && e.keyCode == 39) { //下,右
      alert('40=下键，39=右键');
    }
  },
  //	键盘事件
  keybroad(index) {
    document.onkeydown = keyDown;

    function keyDown() {
      var e = event || window.event;
      var realkey = null;
      if (e.keyCode == 32) {
        realkey = '\' 空格\'';
        index++
        console.log(realkey + index)
      }
      if (e.keyCode == 13) {
        realkey = '\' 回车\'';
        console.log(realkey)
      }
      if (e.keyCode == 27) {
        realkey = '\' Esc\'';
        console.log(realkey)
      }
      if (e.keyCode == 16) {
        realkey = '\' Shift\'';
        console.log(realkey)
      }
      if (e.keyCode == 17) {
        realkey = '\' Ctrl\'';
        console.log(realkey)
      }
      if (e.keyCode == 18) {
        realkey = '\' Alt\'';
        console.log(realkey)
      }
      if (e && e.keyCode == 38) {
        realkey = '\' 上键\'';
        index++
        console.log(realkey + index)
        return index
      }
      if (e && e.keyCode == 40) {
        realkey = '\' 下键\'';
        index--
        console.log(realkey + index)
      }
    }
  },
  //统计数量
  totalNum(val) {
    var num = 0,
      unit = '4444';
    console.log(unit)
    console.log(this)
    if (val) {
      if (val.length > 0) {
        val.forEach(function (key, index) {
          num += Number(key);
        });
      }
    }
    var numVal = this.toFormatData(num)
    return numVal;
  },
  //插入排序
  insertSort: function (array) {
    var i = 1,
      j, temp, key, len = array.length;
    for (; i < len; i++) {
      temp = j = i;
      key = array[j];
      while (--j > -1) {
        if (array[j] > key) {
          array[j + 1] = array[j];
        } else {
          break;
        }
      }
      array[j + 1] = key;
    }
    return array;
  },
  //	js 利用sort进行排序
  systemSort: function (array) {
    return array.sort(function (a, b) {
      return a - b;
    });
  },
  //	js 冒泡排序
  bubbleSort: function (array) {
    var i = 0,
      len = array.length,
      j, d;
    for (; i < len; i++) {
      for (j = 0; j < len; j++) {
        if (array[i] < array[j]) {
          d = array[j];
          array[j] = array[i];
          array[i] = d;
        }
      }
    }
    return array;
  },
  //  获取css属性值
  getStyle(element, attr) {
    if (element.currentStyle) {
      return element.currentStyle[attr];
    } else {
      return getComputedStyle(element, false)[attr];
    }
  },
  //  阻止冒泡行为
  stopBubble(e) {
    //如果提供了事件对象，则这是一个非IE浏览器 
    if (e && e.stopPropagation) {
      //因此它支持W3C的stopPropagation()方法 
      e.stopPropagation();
    } else {
      //否则，我们需要使用IE的方式来取消事件冒泡 
      window.event.cancelBubble = true;
    }

  },
  //	阻止默认行为
  stopDefault(e) {
    if (e && e.preventDefault) {
      e.preventDefault(); //阻止默认浏览器动作(W3C) 
    } else {
      window.event.returnValue = false; //IE中阻止函数器默认动作的方式 
    }
    return false;
  },
  // 兼容
  event(e) {
    var e = (e) ? e : ((window.event) ? window.event : null);
    var e = e || window.event; // firefox下window.event为null, IE下event为null
  },
  //	阻止滚动条冒泡事件
  preventScroll(id) {
    var _this = document.getElementById(id);
    if (navigator.userAgent.indexOf("Firefox") > 0) {
      _this.addEventListener('DOMMouseScroll', function (e) {
        _this.scrollTop += e.detail > 0 ? 60 : -60;
        e.preventDefault();
      }, false);
    } else {
      _this.onmousewheel = function (e) {
        e = e || window.event;
        _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;
        return false;
      };
    }
    return this;
  },
  //	获取系统当前时间
  getTime(str, type) {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDay();
    var hours = myDate.getHours();
    var minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    if (type == 0) {
      console.log('type')
      return year + str + month + str + day + ' ' + hours + ':' + minutes + ":" + seconds;
    } else if (type == 1) {
      return year + '年' + month + '月' + day + '日' + ' ' + hours + '时' + minutes + "分" + seconds + '秒';
    } else if (type == 2) {
      return year + '年' + month + '月' + day + '日';
    } else {
      console.log('day')
      return year + str + month + str + day;
    }
  },
  //	数组最大值
  maxArr(arr) {
    return Math.max.apply(null, arr);
  },
  //	数组最小值
  minArr(arr) {
    return Math.min.apply(null, arr);
  },
  //求和
  sumArr: function (arr) {
    var sumText = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      sumText += arr[i];
    }
    return sumText
  },
  //	平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
  covArr: function (arr) {
    var sumText = this.sumArr(arr);
    var covText = sumText / arr.length;
    return covText
  },
  //	从数组中随机获取元素
  randomOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  //	清除对象中值为空的属性
  //	filterParams({a:"",b:null,c:"010",d:123})
  //	显示{c: "010", d: 123}
  filterParams(obj) {
    let _newPar = {};
    for (let key in obj) {
      if ((obj[key] === 0 || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
        _newPar[key] = obj[key];
      }
    }
    return _newPar;
  },
  //	到某一个时间的倒计时
  //	getEndTime('2017/7/22 16:0:0')
  //	"剩余时间6天 2小时 28 分钟20 秒"
  getEndTime(endTime) {
    var startDate = new Date(); //开始时间，当前时间
    var endDate = new Date(endTime); //结束时间，需传入时间参数
    var t = endDate.getTime() - startDate.getTime(); //时间差的毫秒数
    var d = 0,
      h = 0,
      m = 0,
      s = 0;
    if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24);
      h = Math.floor(t / 1000 / 60 / 60 % 24);
      m = Math.floor(t / 1000 / 60 % 60);
      s = Math.floor(t / 1000 % 60);
    }
    return "剩余时间" + d + "天 " + h + "小时 " + m + " 分钟" + s + " 秒";
  },
  //	随机码
  //	count取值范围2-36

  //	randomNumber(10)
  //	"2584316588472575"

  //	randomNumber(14)
  //	"9b405070dd00122640c192caab84537"

  //	Math.random().toString(36).substring(2);
  //	"83vhdx10rmjkyb9"
  randomNumberOne(count) {
    return Math.random().toString(count).substring(2);
  },
  //	随机返回一个范围的数字
  randomNumber(n1, n2) {
    //randomNumber(5,10)
    //返回5-10的随机整数，包括5，10
    if (arguments.length === 2) {
      return Math.round(n1 + Math.random() * (n2 - n1));
    }
    //randomNumber(10)
    //返回0-10的随机整数，包括0，10
    else if (arguments.length === 1) {
      return Math.round(Math.random() * n1)
    }
    //randomNumber()
    //返回0-255的随机整数，包括0，255
    else {
      return Math.round(Math.random() * 255)
    }
  },
  //	随机产生颜色
  randomColor() {
    //randomNumber是上面定义的函数
    //写法1
    return 'rgb(' + this.randomNumber(255) + ',' + this.randomNumber(255) + ',' + this.randomNumber(255) + ')';

    //写法2
    return '#' + Math.random().toString(16).substring(2).substr(0, 6);

    //写法3
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += '0123456789abcdef' [this.randomNumber(15)];
    }
    return color;
  },
  //	获取，设置url参数
  //	获取url参数
  //	getUrlPrmt('segmentfault.com/write?draftId=122000011938')
  //	显示 {draftId: "122000011938"}
  getUrlPrmt(url) {
    url = url ? url : window.location.href;
    let _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};
    for (let i = 0, _len = _arrS.length; i < _len; i++) {
      let pos = _arrS[i].indexOf('=');
      if (pos == -1) {
        continue;
      }
      let name = _arrS[i].substring(0, pos),
        value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
      _rs[name] = value;
    }
    return _rs;
  },
  //	设置url参数
  //	setUrlPrmt({'a':1,'b':2})
  //	显示 a=1&b=2
  setUrlPrmt(obj) {
    let _rs = [];
    for (let p in obj) {
      if (obj[p] != null && obj[p] != '') {
        _rs.push(p + '=' + obj[p])
      }
    }
    return _rs.join('&');
  },
  //	现金额大写转换函数
  //	upDigit(168752632)
  //	"人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
  //	upDigit(1682)
  //	"人民币壹仟陆佰捌拾贰元整"
  //	upDigit(-1693)
  //	"欠人民币壹仟陆佰玖拾叁元整"
  upDigit(n) {
    var fraction = ['角', '分', '厘'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
    ];
    var head = n < 0 ? '欠人民币:' : '人民币:';
    n = Math.abs(n);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = '';
      for (var j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p;
        n = Math.floor(n / 10);
      }
      //s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')+ unit[0][i] + s; 
      s = p + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
  },

  //	cookie
  //	设置cookie
  setCookie(name, value, iDay) {
    var oDate = new Date();
    //		oDate.setDate(oDate.getDate() + iDay);
    oDate.setDate(oDate.getDay() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
  },
  //	获取cookie
  getCookie(name) {
    var arr = document.cookie.split('; ');
    console.log(document.cookie)
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0] == name) {
        return arr2[1];
      }
    }
    //	如果arr2[0] ！== name，往下执行，否则(return '';)不执行
    return '';
  },
  //	删除cookie
  removeCookie(name) {
    setCookie(name, 1, -1);
  },
  //	显示
  show(obj, index) {
    var obj = document.getElementById(obj) ? document.getElementById(obj) : document.getElementsByClassName(obj);
    console.log(obj.length)
    if (obj.length) {
      obj[index - 1].style.display = "";
    } else {
      obj.style.display = "";
    }
  },
  //	隐藏
  hide(obj, index) {
    var obj = document.getElementById(obj) ? document.getElementById(obj) : document.getElementsByClassName(obj);

    if (obj.length) {
      obj[index - 1].style.display = "none";
    } else {
      obj.style.display = "none";
    }
  },
  //	css样式
  css(obj, index, json) {
    var obj = document.getElementById(obj) ? document.getElementById(obj) : document.getElementsByClassName(obj);
    if (obj.length) {
      //	class名字
      console.log('class')
      for (var attr in json) {
        obj[index - 1].style[attr] = json[attr];
      }
    } else {
      //	id名字
      console.log('id')
      for (var attr in json) {
        obj.style[attr] = json[attr];
      }
    }
  }
}

module.exports = fn; // 把a暴漏出去