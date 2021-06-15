---
title: 创建 AUR 软件包
date: "2016-04-10T23:48:35+0800"
description: ""
tags:
  - Arch Linux
  - AUR
---

身为 Arch Linux/AUR 用户好几年了，还未向社区贡献过什么东西。今天刚好用到的一个代理软件 [Meow][] 没在 AUR 中找到，就照着 [Wiki][] 创建了 [meow-proxy][meow-proxy-aur] 包，下面是大致的步骤。

- 克隆 Git 仓库

```bash
git clone git+ssh://aur@aur.archlinux.org/meow-proxy.git
```

- 编辑 PKGBUILD 文件

写 PKGBUILD 时，首先参考了在 GitHub 上的[aur-meow][aur-meow]，这个包版本已经很老了，也无法在 AUR 中找到，于是根据最新的 meow 重新写了下 source 和 sha1sum，发现生成的包只有当前 Arch 的包，又照着了 [cow-proxy][cow-proxy-aur] 的 PKGBUILD 文件重新写了一下。

- 打包测试

使用 makepkg 在本地打包

```bash
makepkg
```

- 生成 .SRCINFO 文件

```bash
makepkg --printsrcinfo > .SRCINFO
```

- 提交 Git 代码

将 PKGBUILD、.SRCINFO 和在 PKGBUILD 包含的本地 source 添加到 git 中，然后 push 代码。

运行 `yaourt meow-proxy`，检查无误。

[Meow]: https://github.com/renzhn/MEOW "Meow proxy"

[Wiki]: https://wiki.archlinux.org/index.php/Arch_User_Repository#Creating_a_new_package

[meow-proxy-aur]: https://aur.archlinux.org/packages/meow-proxy/

[aur-meow]: https://github.com/aur-archive/meow-proxy/

[cow-proxy-aur]: https://aur.archlinux.org/packages/cow-proxy/
