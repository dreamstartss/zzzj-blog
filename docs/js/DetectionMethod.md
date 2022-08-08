---
title: 'JS 检测方法'
---

### JS 检测方法

---

<a name='typeof' />
<h4>1. typeof</h4>

- 用来检测数据类型的运算符
- typeof null 的时候结果是 `'object'`
  - （这是浏览器的 BUG：所有的值在计算中都以二进制编码储存，浏览器中把前三位 000 的当作对象，而 null 的二进制前三位是 000，所以被识别为对象，但是他不是对象，他是空对象指针，是基本类型值）

<br />
<br />
<br />
<a name='intanceof' /> 
<h4>2. intanceof</h4>

- 用来检测某个实例是否属于这个类
- 可以弥补`typeof`无法细分对象类型的缺点
- 局限性：
  - 基本数据类型无法检测
  - 检测类型必须是对象数据类型

<br />
<br />
<br />
<a name='constructor' />
<h4>3. constructor</h4>

- 利用原型链来判断实例的`constructor`的属性值是不是预估的类
- 容易被修改，修改了就不准确了

<br />
<br />
<br />
<a name='toString' />
<h4>4. Object.prototype.toString.call()</h4>

- 原理：
  - 每一个数据类型的原型上都有`toString`方法
  - 除了`Object.prototype`上的`toString`是用来返回当前实例所属类的信息，其余的都是转换为字符串的，然后利用`call`改变`this`指向要检测的数据
  - 可以有效的检测任何类型的值，目前检测数据类型比较好的方法

<br />
<br />
<br />
<a name='arrayMethod' />
<h4>5. 数组的检测方法</h4>

1. Array.isArray()  

