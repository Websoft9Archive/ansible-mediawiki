# Troubleshooting

We collect the most common troubleshooting of using MediaWiki for your reference:

## MediaWiki related

Refer to [MediaWiki official error docs](https://docs.moodle.org/37/en/Category:Error)

## Database related

#### Database service could not be started?

Insufficient disk space, insufficient memory, and configuration file errors can make database service could not be started  

It is recommended to first check through the command.

```shell
# restart mysql service
systemctl restart mysql

# view disk space
df -lh

# view memory rate
free -lh
```

#### Repair a corrupted MediaWiki database

The problem can be repaired using the mysqlcheck command

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

#### phpMyAdmin page access blank?

Please try another browser, such as chrome or firefox. If the phpMyAdmin can be opened normally before, and now appears to be incomplete or blank, it is recommended to clean up the browser cache, cookies and other information

## Instance related

Instance troubleshooting is closely related to the Instance provider that is Cloud Platform   
Please refer to [Cloud Platform Documentation](https://support.websoft9.com/docs/faq/tech-instance.html)