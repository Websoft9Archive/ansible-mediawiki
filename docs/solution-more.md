# More

Each of the following solutions has been proven to be effective and we hope to be helpful to you.

## Domain binding

The precondition for **Domain binding** is have completed the **Domain resolution** for MediaWiki Instance.

From the perspective of server security and subsequent maintenance considerations, the **Domain Binding** step cannot be omitted.

MediaWiki domain name binding steps:

1. Connect your Cloud Server
2. Modify [vhost configuration file](/stack-components.md#apache), change the domain name item for you
   ```text
   #### MediaWiki (LAMP) bind domain #### 

     <VirtualHost *:80>
     ServerName www.mydomain.com # modify it for you
     DocumentRoot "/data/wwwroot/mediawiki"
     ...
     
   #### MediaWiki (LEMP) bind domain #### 

     server {
      listen 80;
      server_name    mediawiki.example.com; # modify it for you
     ...

   ```
3. Save it and restart [Web Service](/admin-services.md#apache)


## MediaWiki Configuration

Modify the `LocalSettings.php` to set MediaWiki, and you should know settings is from `DefaultSettings.php`

Refer to MediaWiki official docs: [Configuration settings](https://www.mediawiki.org/wiki/Manual:Configuration_settings/en)

## MediaWiki Extensions

Refer to MediaWiki official docs: [Manual:Extensions](https://www.mediawiki.org/wiki/Manual:Extensions/en)

## MediaWiki Create&Edit page

Refer to MediaWiki official docs: [Help:Starting_a_new_page](https://www.mediawiki.org/wiki/Help:Starting_a_new_page/en)

## MediaWiki VisualEditor

Refer to MediaWiki official docs: [Help:Starting_a_new_page](https://www.mediawiki.org/wiki/Help:VisualEditor/User_guide/en)

## MediaWiki change interface

Changing interface includes: modify logo, set navigation, modify css and so on

Refer to MediaWiki official docs: [Help:FAQ:Changing Interface](https://www.mediawiki.org/wiki/Manual:FAQ#Changing_the_interface)

## MediaWiki Enable uploading files

You can't upload files from MediaWiki by default, you need to enable it first  

Refer to MediaWiki official docs: [Help:FAQ:Enabel Uploading](https://www.mediawiki.org/wiki/Manual:FAQ#How_do_I_enable_uploading?)

## MediaWiki Languages

Refer to MediaWiki official docs: [Help:FAQ:Language](https://www.mediawiki.org/wiki/Manual:FAQ#How_do_I_change_the_interface_language?)

## MediaWiki set MainPage

Refer to MediaWiki official docs: [Help:FAQ:Chage Main Page](https://www.mediawiki.org/wiki/Manual:FAQ#How_do_I_change_which_page_is_the_main_page?)

## MediaWiki using Composer

Websoft9's MediaWiki have installed the Composer by default  

Refer to MediaWiki official docs: [Help:Composer](https://www.mediawiki.org/wiki/Composer/en) 