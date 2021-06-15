---
title: OpenWrt Shadowsocks 配置指南
date: 2018-07-12
description:
tags:
  - OpenWrt
  - Shadowsocks
  - GFW
---

## 准备

- 有足够空间安装软件包的 OpenWrt 路由设备

- 能够自由访问互联网的网络连接或者 HTTP Proxy

- 会使用命令行的双手

## 开始

### Step 1. 将要设置的 OpenWrt 设备接入网络

下文均假定路由器 IP 地址为 `192.168.1.1`

### Step 2. SSH 登陆路由设备

```shell
ssh root@192.168.1.1
```

假如使用 HTTP Proxy 翻墙，代理地址为 192.168.1.2，端口 8118, 需执行以下指令

```shell
export http_proxy=http://192.168.1.2:8118; export https_proxy=http://192.168.1.2:8118
```

### Step 3. 安装 openwrt-dist 源

参考 [openwrt-dist](http://openwrt-dist.sourceforge.net/) 安装说明，安装提供的软件包（`ShadowVPN` 与 `luci-app-shadowvpn` 非必须可以不装）。

### Step 4. 配置

Shadowsocks 可使用 LuCI 或命令行进行配置。

DNS 配置可参考 <https://github.com/aa65535/openwrt-chinadns/wiki/Use-DNS-Forwarder>

### Step 5. 完成

配置完成后，重启服务，应该就可以自由访问因特网了。
