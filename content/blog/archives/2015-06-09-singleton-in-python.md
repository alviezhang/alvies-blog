---
title: "Python 中的单例模式"
date: 2015-06-09
description:
tags:
  - Python
  - Design Pattern
---


单例模式，是一种常用的软件设计模式，单例对象的类必须保证只有一个实例存在。

之前自己土鳖的实现：

```python
_instance = Singleton()

class Singleton(object):
    @staticmethod
    def get_instance():
        return _instance
```

上面的实现缺点很明显，无论有没有调用 `Singleton` 的 `get_instance` 方法，`_instance` 对象总会初始化。改进也很简单：

```python
class Singleton(object):
    _instance = None

    @staticmethod
    def get_instance():
        if Singleton._instance is None:
            Singleton._instance = Singleton()
        return Singleton._instance
```

用类的静态变量替换全局变量，就只会在使用时才初始化单例对象。~~对于 CPython 来说，由于 GIL 的限制，单个进程同一时刻至多有一个线程运行，所以不需要担心 `get_instance` 函数第 2 行执行时产生多个单例。如果考虑其他可能发生并发的 Python 实现~~，可以使用下面的加锁版本：

```python
import threading

class Singleton(object):
    _instance = None
    _instance_lock = threading.Lock()

    @staticmethod
    def get_instance():
        with Singleton._instance_lock:
            if Singleton._instance is None:
                Singleton._instance = Singleton()
        return Singleton._instance
```

上面的实现在每次执行 `get_instance` 时都会加锁，还不够好，因此就有了下面的"双重检查加锁"版本：

```python
class Singleton(object):
    _instance = None
    _instance_lock = threading.Lock()

    @staticmethod
    def get_instance():
        if Singleton._instance is None:
            with Singleton._instance_lock:
                if Singleton._instance is None:
                    Singleton._instance = Singleton()
        return Singleton._instance
```

每次写单例要写那么多代码很麻烦呀，怎么办呢？有装饰器来帮忙：

```python
def singleton(cls):
    instances = {}
    def wrap(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return wrap
```

这个装饰起没有考虑多线程并发问题，~~不过在日常的应用中(CPython)应该足够用了~~。

---------------------

参考文献：

[单例模式 - 维基百科](http://zh.wikipedia.org/wiki/单例模式)

[Tornado: ioloop.py](https://github.com/tornadoweb/tornado/blob/master/tornado/ioloop.py)
