---
title: Nginx、PHP 开发环境配置
date: 2015-08-27
description:
tags:
  - Nginx
  - PHP
---

### 安装Nginx、PHP

以 Archlinux 为例，安装命令如下:

```bash
sudo pacman -S nginx php php-fpm
```

### 配置 PHP

PHP-fpm 接收 FastCGI 请求有两种方式，一种是通过端口，第二种是通过 unix socket 文件进行通信。在 `/etc/php/php-fpm.conf` 可以配置：

```conf
listen = 127.0.0.1:9000
;listen = /run/php-fpm/php-fpm.sock
```

这里采用了监听端口的方式。除此之外，还要配置 PHP 本身的配置文件，以支持 MySQL 等扩展。编辑 `/etc/php/php.ini`，取消 `extension=mysql.so` 和 `extension=mysqli.so` 两行的注释。

除此之外，还需查看 `php.ini` 文件中 `open_basedir` 中的值，如果 PHP 文件的路径在设置值之外，你需要把对应的父目录加入到 `open_basedir` 中。

### 配置Nginx

在给 Nginx 添加配置时，可以直接在 `/etc/nginx/nginx.conf` 中添加配置，也可以在这个配置文件中包含新的配置文件，这里采用后者。

编辑 `/etc/nginx/nginx.conf`，在 `server` 段中添加如下内容：

```conf
location / { 
    include        conf.d/ci.conf;
}
```

`conf.d/ci.conf` 为自定，然后编辑该文件，添加如下内容：

```conf
root           /path/to/php/code;   # php代码的根路径
try_files      $uri $uri/ /index.php;
index          index.php index.html index.htm;
fastcgi_pass   127.0.0.1:9000;
# fastcgi_pass   unix:/run/php-fpm/php-fpm.sock;
fastcgi_index  index.php;
fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
include        fastcgi_params;
```

其中 `fastcgi_pass` 配置由上一步的 PHP-fpm 配置决定。此外，最后两行可以换成 `include fastcgi.conf`。附上两个 fastcgi 文件内容。

`fastcgi_params`:

```conf
fastcgi_param  QUERY_STRING       $query_string;
fastcgi_param  REQUEST_METHOD     $request_method;
fastcgi_param  CONTENT_TYPE       $content_type;
fastcgi_param  CONTENT_LENGTH     $content_length;

fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
fastcgi_param  REQUEST_URI        $request_uri;
fastcgi_param  DOCUMENT_URI       $document_uri;
fastcgi_param  DOCUMENT_ROOT      $document_root;
fastcgi_param  SERVER_PROTOCOL    $server_protocol;
fastcgi_param  HTTPS              $https if_not_empty;

fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

fastcgi_param  REMOTE_ADDR        $remote_addr;
fastcgi_param  REMOTE_PORT        $remote_port;
fastcgi_param  SERVER_ADDR        $server_addr;
fastcgi_param  SERVER_PORT        $server_port;
fastcgi_param  SERVER_NAME        $server_name;

# PHP only, required if PHP was built with --enable-force-cgi-redirect
fastcgi_param  REDIRECT_STATUS    200;
```

`fastcgi.conf`:

```conf
fastcgi_param  SCRIPT_FILENAME    $document_root$fastcgi_script_name;
fastcgi_param  QUERY_STRING       $query_string;
fastcgi_param  REQUEST_METHOD     $request_method;
fastcgi_param  CONTENT_TYPE       $content_type;
fastcgi_param  CONTENT_LENGTH     $content_length;

fastcgi_param  SCRIPT_NAME        $fastcgi_script_name;
fastcgi_param  REQUEST_URI        $request_uri;
fastcgi_param  DOCUMENT_URI       $document_uri;
fastcgi_param  DOCUMENT_ROOT      $document_root;
fastcgi_param  SERVER_PROTOCOL    $server_protocol;
fastcgi_param  HTTPS              $https if_not_empty;

fastcgi_param  GATEWAY_INTERFACE  CGI/1.1;
fastcgi_param  SERVER_SOFTWARE    nginx/$nginx_version;

fastcgi_param  REMOTE_ADDR        $remote_addr;
fastcgi_param  REMOTE_PORT        $remote_port;
fastcgi_param  SERVER_ADDR        $server_addr;
fastcgi_param  SERVER_PORT        $server_port;
fastcgi_param  SERVER_NAME        $server_name;

# PHP only, required if PHP was built with --enable-force-cgi-redirect
fastcgi_param  REDIRECT_STATUS    200;
```

可以看出来 `fastcgi.conf` 比 `fastcgi_params` 文件只多出第一行。

### 测试

在 Nginx 设置的 PHP 路径添加测试文件 `index.php`，重启 nginx 服务和 PHP-fpm 服务，测试下你的 PHP 服务吧。
