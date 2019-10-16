# 更多...

下面每一个方案，都经过实践证明行之有效，希望能够对你有帮助

## 域名绑定

绑定域名的前置条件是：已经完成域名解析（登录域名控制台，增加一个A记录指向服务器公网IP）  

完成域名解析后，从服务器安全和后续维护考量，需要完成**域名绑定**：

MediaWiki 域名绑定操作步骤：

1. 使用 SFTP 工具登录云服务器
2. 修改 [虚拟机主机配置文件](/zh/stack-components.html#apache)，将其中的域名相关的值
   ```text
   #### MediaWiki(LAMP) bind domain #### 

     <VirtualHost *:80>
     ServerName  www.mydomain.com # 修改成您的实际域名
     DocumentRoot "/data/wwwroot/mediawiki"
     ...
     
   #### MediaWiki(LNMP) bind domain #### 

     server {
      listen 80;
      server_name mediawiki.example.com; # 修改成您的实际域名
     ...

   ```
3. 保存配置文件，[重启服务](/zh/admin-services.html#apache)

## MediaWiki 配置设置

主要通过修改 LocalSettings.php 文件来对 MediaWiki 进行设置，而 LocalSettings.php 文件

参考官方文档: [Configuration settings](https://www.mediawiki.org/wiki/Manual:Configuration_settings/zh)

## MediaWiki 安装扩展

参考官方文档：[Manual:Extensions](https://www.mediawiki.org/wiki/Manual:Extensions/zh)

## MediaWiki 创建或编辑页面

参考官方文档：[Help:Starting_a_new_page](https://www.mediawiki.org/wiki/Help:Starting_a_new_page/zh)

## MediaWiki 可视化编辑器

参考官方文档：[Help:Starting_a_new_page](https://www.mediawiki.org/wiki/Help:VisualEditor/User_guide/zh)

## MediaWiki 定制界面

定制界面包括：修改 Logo, 设置导航栏，修改 CSS 等  

参考官方文档：[Help:FAQ:定制界面](https://www.mediawiki.org/wiki/Manual:FAQ/zh#定制界面)

## MediaWiki 允许文件上传

Mediawiki 默认并不可以上传文件，需要启动文件上传功能  

参考官方文档：[Help:FAQ:启用文件上传](https://www.mediawiki.org/wiki/Manual:FAQ/zh#如何启用文件上传?)

## MediaWiki 语言设置

参考官方文档：[Help:FAQ:语言设置](https://www.mediawiki.org/wiki/Manual:FAQ/zh#我如何更改界面语言？)

## MediaWiki 设置主页

参考官方文档：[Help:FAQ:设置主页](https://www.mediawiki.org/wiki/Manual:FAQ/zh#如何指定首页?)

## MediaWiki 使用 Composer

本预装包默认已经安装 Composer，详细使用  

参考官方文档：[Help:Composer](https://www.mediawiki.org/wiki/Composer/zh)