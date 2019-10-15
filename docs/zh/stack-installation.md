# 初始化安装

在云服务器上部署 MediaWiki 预装包之后，请参考下面的步骤快速入门。

## 准备

1. 在云控制台获取您的 **服务器公网IP地址** 
2. 在云控制台安全组中，检查 **Inbound（入）规则** 下的 **TCP:80** 端口是否开启
3. 若想用域名访问 MediaWiki，请先到 **域名控制台** 完成一个域名解析

## MediaWiki 安装向导

1. 使用本地电脑的 Chrome 或 Firefox 浏览器访问网址：*http://域名* 或 *http://Internet IP*, 就进入引导首页
2. 根据系统提示，点击“…Installation”进入安装界面，选择语言 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/mediawiki/mediawiki-install001-websoft9.png)
3. 填写你的数据库配置信息([不知道账号密码？](/zh/stack-accounts.html#mysql))，保存并继续; 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/mediawiki/mediawiki-install002-websoft9.png)
4. 选择数据库引擎和字符集设置，字符集建议选用UFT-8 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/mediawiki/mediawiki-install003-websoft9.png)
5. 设置后台账号信息，请务必设置好并牢记之。进入下一步 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/mediawiki/mediawiki-install004-websoft9.png)
6. 跟随安装提示直到完成，过程中尽量选择默认设置，勾选安装所有模块
7. 配置完成后会生成 LocalSettings.php 文件，根据提示下载。 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/mediawiki/mediawiki-install005-websoft9.png)
8. 将 `LocalSettings.php` 文件上传到服务器 MediaWiki 根目录
9. 系统完成最后一步安装，建议进入MediaWiki后台（以管理身份登录即进入后台），体验完整功能 
   ![](http://libs.websoft9.com/Websoft9/DocsPicture/zh/mediawiki/mediawiki-homepage-websoft9.png)

> 需要了解更多MediaWiki的使用，请参考官方文档：[MediaWiki Documentation](https://www.mediawiki.org/wiki/Sysadmin_hub)

## 常见问题

#### 浏览器打开IP地址，无法访问 MediaWiki（白屏没有结果）？

您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容

#### 本部署包采用的哪个数据库来存储 MediaWiki 数据？

是MySQL

#### 是否可以采用云厂商提供的 RDS 来存储 MediaWiki 数据？

可以
