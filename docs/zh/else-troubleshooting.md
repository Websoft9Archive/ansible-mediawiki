# 故障处理

MediaWiki 官方提供了大量的[故障处理方案](https://docs.moodle.org/37/en/Category:Error)。我们也收集使用 MediaWiki 过程中最常见的故障，供您参考：

## 数据库相关

#### 数据库服务无法启动

数据库服务无法启动最常见的问题包括：磁盘空间不足，内存不足，配置文件错误。  
建议先通过命令进行排查  

```shell
# 查看磁盘空间
df -lh

# 查看内存使用
free -lh
```

#### 修复数据库错误

出现数据库需要修复的提示，请参考下面的命令修复对应的数据库表  

```
#mysqlcheck -u moodleuser -p --auto-repair moodle
Enter password:
moodle.adodb_logsql                      OK
moodle.mdl_assignment                    OK
moodle.mdl_assignment_submissions        OK
...
moodle.mdl_log
error    : Table './moodle/mdl_log' is marked as crashed and should be repaired
...
moodle.mdl_sessions2
error    : Table './moodle/mdl_sessions2' is marked as crashed and should be repaired

Repairing tables
moodle_18_latest.mdl_log                           OK
moodle_18_latest.mdl_sessions2                     OK
```

## 服务器相关

服务器相关故障的诊断和解决，与云平台密切相关，请参考[云平台文档](https://support.websoft9.com/docs/faq/zh/tech-instance.html)

## 其他