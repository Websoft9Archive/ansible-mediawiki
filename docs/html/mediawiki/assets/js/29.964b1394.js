(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{191:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"smtp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp","aria-hidden":"true"}},[t._v("#")]),t._v(" SMTP")]),t._v(" "),a("p",[t._v("大量用户实践反馈，使用"),a("strong",[t._v("第三方 SMTP 服务发送邮件")]),t._v("是一种最稳定可靠的方式。")]),t._v(" "),a("p",[t._v("请勿在服务器上安装sendmail等邮件系统，因为邮件系统的路由配置受制与域名、防火墙、路由等多种因素制约，非常不稳定，且不易维护、诊断故障很困难。")]),t._v(" "),a("p",[t._v("下面以"),a("strong",[t._v("网易邮箱")]),t._v("为例，提供设置 MediaWiki 发邮件的步骤：")]),t._v(" "),a("ol",[a("li",[t._v("在网易邮箱管理控制台获取 SMTP 相关参数"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("SMTP host: smtp.163.com\nSMTP port: 465 or 994 for SSL-encrypted email\nSMTP Authentication: must be checked\nSMTP Encryption: must SSL\nSMTP username: websoft9@163.com\nSMTP password: #wwBJ8    //此密码不是邮箱密码，是需要通过163邮箱后台设置去获取的授权码\n")])])])]),t._v(" "),a("li",[t._v("编辑网站根目录下的 "),a("code",[t._v("LocalSettings.php")]),t._v(" 配置文件")]),t._v(" "),a("li",[t._v("找到变量 $wgSMTP，并设置它"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" $wgSMTP = array(\n 'host'     => \"smtp.163.com\", \n 'IDHost'   => \"example.com\",      // 邮箱域名，可选.如果不设置的话会设置成 $wgServer 的值.\n 'port'     => 465,                 \n 'auth'     => true,               \n 'username' => \"websoft9@163.com\",     \n 'password' => \"#wwBJ8\"       \n );\n")])])])]),t._v(" "),a("li",[t._v("找到变量 $ wgEnableEmail，设置其值为 true"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ wgEnableEmail = true\n")])])])]),t._v(" "),a("li",[t._v("查找以下变量，将其值设置为发件邮箱"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$wgEmergencyContact = "websoft9@163.com";\n$wgPasswordSender = "websoft9@163.com";\n')])])])]),t._v(" "),a("li",[t._v("保存设置")]),t._v(" "),a("li",[t._v("重启 "),a("router-link",{attrs:{to:"/zh/admin-services.html#php-fpm"}},[t._v("PHP-FPM 服务")]),t._v("后生效")],1),t._v(" "),a("li",[t._v("测试是否可以发邮件")])]),t._v(" "),a("p",[t._v("更多邮箱设置（QQ邮箱，阿里云邮箱，Gmail，Hotmail等）以及无法发送邮件等故障之诊断，请参考由Websoft9提供的 "),a("a",{attrs:{href:"https://support.websoft9.com/docs/faq/zh/tech-smtp.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMTP 专题指南"),a("OutboundLink")],1)])])},[],!1,null,null,null);e.default=r.exports}}]);