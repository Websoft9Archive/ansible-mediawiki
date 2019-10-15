# Initial Installation

If you have completed the MediaWiki deployment on Cloud Platform, the following steps is for you to start use it quikly

## Preparation

1. Get the **Internet IP** on your Cloud Platform
2. Check you **[Inbound of Security Group Rule](https://support.websoft9.com/docs/faq/tech-instance.html)** of Cloud Console to ensure the TCP:80 is allowed
3. Make a domain resolution on your DNS Console if you want to use domain for MediaWiki

## MediaWiki Installation Wizard

1. Using local Chrome or Firefox to visit the URL *https://domain name* or *https://Internet IP*, enter to MediaWiki installation page

2. Choose a language, then go to next step
   ![MediaWiki-install-language](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md01.png)

3. Set the MediaWiki source code and data directory
   ![MediaWiki set directory](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md02.png)

4. Choose the database type
   ![MediaWiki Choose database](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md03.png)

5. Fill in your database connection information ([Don't know password?](/stack-accounts.html#mysql))
   ![MediaWiki set database connection](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md04.png)

6. Confirm the Copyright
   ![MediaWiki Confirm the Copyright](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md05.png)

7. Installing
   ![MediaWiki start install](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md06.png)
   ![MediaWiki start install](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md07.png)

8. Set administrator account
   ![MediaWiki set administrator account](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md08.png)

9. Set site name, short name, front page summary...
   ![MediaWiki set site information](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md09.png)

10. Installed successfully.
   ![MediaWiki installation successfully](https://libs.websoft9.com/Websoft9/DocsPicture/en/moodle/md10.png)

11. [Register a MediaWiki account](/solution-more.html#moodle-register) to connect MediaWiki official website for more extension

> More useful MediaWiki guide, please refer to [MediaWiki Documentation](https://docs.moodle.org)

## Q&A

#### I can't visit the start page of MediaWiki?

Your TCP:80 of Security Group Rules is not allowed so there no response from Chrome or Firefox

#### Which database does this MediaWiki package use?

MySQL

#### Can I use Cloud database for MediaWiki?

Yes
