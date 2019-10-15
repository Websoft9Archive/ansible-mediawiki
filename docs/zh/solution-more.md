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
     DocumentRoot "/data/wwwroot/moodle"
     ...
     
   #### MediaWiki(LNMP) bind domain #### 

     server {
      listen 80;
      server_name moodle.example.com; # 修改成您的实际域名
     ...

   ```
3. 保存配置文件，[重启服务](/zh/admin-services.html#apache)

## MediaWiki 配置设置

参考官方文档: [Configuration settings](https://www.mediawiki.org/wiki/Manual:Configuration_settings/zh)


## MediaWiki 语言设置

1. 以管理员身份登录 MediaWiki 后台
2. 依次打开：【网站管理】>【语言】
   ![MediaWiki 语言设置](https://libs.websoft9.com/Websoft9/DocsPicture/zh/moodle/moodle-languageset-websoft9.png)
3. 根据实际情况进行语言设置
   * 语言设置：即在线切换语言
   * 定制语言：即在线编辑语言翻译内容
   * 语言包： 即上传系统默认没有内置的语言

## MediaWiki 客户端

1. 以管理身份登录 MediaWiki 后台
2. 依次打开：【网站管理】>【移动应用程序】>【移动设备设置】
   ![moodle-apps](https://libs.websoft9.com/Websoft9/DocsPicture/zh/moodle/moodle-app-1-websoft9.jpg)
3. 将【为移动设备启用网络服务】设为 **启用** 状态；
   ![moodle-apps](https://libs.websoft9.com/Websoft9/DocsPicture/zh/moodle/moodle-app-2-websoft9.jpg)
4. 保存设置；
5. 安装 [MediaWiki 手机客户端](https://download.moodle.org/mobile/)
6. 打开后在地址栏输入 MediaWiki 的访问地址，就可以开始使用移动端
   ![moodle-apps](https://libs.websoft9.com/Websoft9/DocsPicture/zh/moodle/moodle-mobile-websoft9.png)

## MediaWiki 插件

MediaWiki 是一个非常灵活的平台，大部分核心功能以插件的形式存在，系统默认安装了400多个插件。同时，官方提供了[插件市场](https://moodle.org/plugins/)供用户作用更多功能扩展。

1. 以管理员身份登录 MediaWiki 后台
2. 依次打开：【网站管理】>【插件】
   ![moodle 插件](https://libs.websoft9.com/Websoft9/DocsPicture/zh/moodle/moodle-plugins-websoft9.png)
3. 点击【插件概括】，列出默认安装的插件，可以进行停用、卸载等操作
4. 通过[插件市场](https://moodle.org/plugins/)寻找所需的插件，然后安装它们

> 更多插件管理查看官方文档 [MediaWiki Plugins](https://docs.moodle.org/37/en/Installing_plugins)