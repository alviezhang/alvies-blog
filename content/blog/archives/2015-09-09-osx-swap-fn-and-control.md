---
title: macOS 交换 Fn 键和 Control 键
date: "2015-09-09"
description: ""
tags:
  - OS X
---

### 下载 Karabiner

从 <https://pqrs.org/osx/karabiner/> 下载 Karabiner，链接内含安装步骤

### 配置

选中如下项目：

- `Change Control_L Key (Left Control)` 的子项 `Control_L to Fn`
- `Change Fn Key` 的子项 `Fn to Control_L`
- `Fn+Functional Keys to F1..F12` 的全部子项

Done!

> 2015/10/28 更新：

如果接入外接键盘，此配置也会生效，可以切换多个配置文件来解决，但是会比较麻烦。我们可以自定 Karabiner 的选项，针对指定设备交换按键。App 目录下`Contents/Resources/include/checkbox/standards/` 包含了程序自带的配置，作为参考。

获取键盘设备 ID 命令：

```bash
ioreg -n IOHIDKeyboard -r | grep -e 'class IOHIDKeyboard' -e VendorID\" -e Product
```

改好的 `private.xml` 如下：

```xml
<?xml version="1.0"?>
<root>
    <item>
        <name>For Macbook Pro Early 2015</name>
        <devicevendordef>
            <vendorname>APPLE_INC</vendorname>
            <vendorid>0x5ac</vendorid>
        </devicevendordef>
        <deviceproductdef>
            <productname>APPLE_INTERNAL_KEYBOARD</productname>
            <productid>0x273</productid>
        </deviceproductdef>
        <item>
            <name>leftControlToFn</name>
            <identifier>private.appleInternalLeftControlToFn</identifier>
            <device_only>DeviceVendor::APPLE_INC, DeviceProduct::APPLE_INTERNAL_KEYBOARD</device_only>
            <!--Swap Fn and Left Control-->
            <autogen>__KeyToKey__ KeyCode::FN, KeyCode::CONTROL_L</autogen>
            <autogen>__KeyToKey__ KeyCode::CONTROL_L, KeyCode::FN</autogen>
            <!--Fn+Functional Keys to F1..F12-->
            <autogen>__KeyToKey__ ConsumerKeyCode::BRIGHTNESS_DOWN, ModifierFlag::FN, KeyCode::F1</autogen>
            <autogen>__KeyToKey__ KeyCode::BRIGHTNESS_DOWN,         ModifierFlag::FN, KeyCode::F1</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::BRIGHTNESS_UP,   ModifierFlag::FN, KeyCode::F2</autogen>
            <autogen>__KeyToKey__ KeyCode::BRIGHTNESS_UP,           ModifierFlag::FN, KeyCode::F2</autogen>
            <autogen>__KeyToKey__ KeyCode::EXPOSE_ALL, ModifierFlag::FN, KeyCode::F3</autogen>
            <autogen>__KeyToKey__ KeyCode::DASHBOARD,  ModifierFlag::FN, KeyCode::F4</autogen>
            <autogen>__KeyToKey__ KeyCode::LAUNCHPAD,  ModifierFlag::FN, KeyCode::F4</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::KEYBOARDLIGHT_LOW,  ModifierFlag::FN, KeyCode::F5</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::KEYBOARDLIGHT_HIGH, ModifierFlag::FN, KeyCode::F6</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::MUSIC_PREV, ModifierFlag::FN, KeyCode::F7</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::MUSIC_PLAY, ModifierFlag::FN, KeyCode::F8</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::MUSIC_NEXT, ModifierFlag::FN, KeyCode::F9</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::VOLUME_MUTE, ModifierFlag::FN, KeyCode::F10</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::VOLUME_DOWN, ModifierFlag::FN, KeyCode::F11</autogen>
            <autogen>__KeyToKey__ ConsumerKeyCode::VOLUME_UP,   ModifierFlag::FN, KeyCode::F12</autogen>
        </item>
    </item>
</root>
```

----------------

参考:

<https://pqrs.org/osx/karabiner/faq.html.en#fn>

<http://apple.stackexchange.com/a/88096>

<http://qiita.com/MagicKyle/items/097f9fc10eb520f07f42>

<https://raw.githubusercontent.com/599316527/my-karabiner-configuration/master/private.xml>
