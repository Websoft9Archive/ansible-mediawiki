# Mediawiki自动化安装与部署

本项目是用Ansible编写的Mediawiki自动安装程序，实现在服务器上一步安装Mediawiki，无需了解复杂的配置过程。本项目是开源项目，通过源码，您可以查看Mediawiki自动安装的每一个步骤。

如果您不熟悉Ansible的使用，您可以直接使用我们在公有云上使用我们提供的Mediawiki镜像。


## 技术要求

### 服务器配置要求

最低1核CPU，1G内存

### 操作系统要求

* CentOS
* Ubuntu（暂时不支持）

### 环境要求

本程序仅适用于Websoft9的PHP相关基础环境，包括：

* LAMP
* LNMP（暂时不支持）

其中最低php7.0,mysql5.5，官方建议采用php7.2,mysql5.6。[点击查看](https://www.mediawiki.org/wiki/Compatibility)官方对环境配置的建议。

## 版本

本自动化安装程序是通过Mediawiki官方源码安装的，故需要实现设置好最新源码的下载地址。

存放下载地址的文件：group_vars/all


## 安装指南

本Ansible脚本支持root用户、普通用户（+su权限提升）等两种账号模式，也支持密码和秘钥对登录方式。

## 使用指南

文档链接：http://support.websoft9.com/docs/mediawiki


## 用户体验改进

### 免数据库配置

1. Mediawiki从1.32开始，已经无法通过安装步骤创建数据库，故需要提前新建数据库
2. Mediawiki的安装步骤是可以分步骤的，并可以点击“重新开始安装”
3. Mediawiki可以改进预先配置好数据库，让用户无需配置数据库，降低安装难度


/mediawiki/includes/installer/MysqlInstaller.php文件中，'_InstallUser' => 'root', 用于修改安装的时候默认的数据库账户名称
/mediawiki/includes/DefaultSettings.php 包含数据库设置

以上两个文件修改仅用于安装，一旦安装完成，建议复原


```
/************************************************************************//**
 * @name   Database settings
 * @{
 */

/**
 * Database host name or IP address
 */
$wgDBserver = 'localhost';

/**
 * Database port number (for PostgreSQL and Microsoft SQL Server).
 */
$wgDBport = 5432;

/**
 * Name of the database
 */
$wgDBname = 'my_wiki';

/**
 * Database username
 */
$wgDBuser = 'wikiuser';

/**
 * Database user's password
 */
$wgDBpassword = '';

/**
 * Database type
 */
$wgDBtype = 'mysql';
```