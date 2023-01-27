(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{466:function(e,t,a){"use strict";a.r(t);var s=a(34),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[e._v("#")]),e._v(" Configuration options")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Komga has sensible default values for all configuration keys. You only need to configure it if you want to change the default behaviour.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("application.yml")]),e._v(" file does not exist by default, you need to create one if you want to customize the configuration.")])]),e._v(" "),a("p",[e._v("Komga relies heavily on "),a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-external-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring Boot's configuration"),a("OutboundLink")],1),e._v(", leveraging "),a("code",[e._v("profiles")]),e._v(" and configuration "),a("code",[e._v("properties")]),e._v(".")]),e._v(" "),a("p",[e._v("The easiest way to configure is either via environment variables (a good fit for "),a("code",[e._v("docker")]),e._v(" and "),a("code",[e._v("docker-compose")]),e._v(") or by using an "),a("code",[e._v("application.yml")]),e._v(" file located in the configuration directory:")]),e._v(" "),a("ul",[a("li",[e._v("The Docker image will load any "),a("code",[e._v("application.yml")]),e._v(" file located in the "),a("code",[e._v("/config")]),e._v(" mounted folder.")]),e._v(" "),a("li",[e._v("The Jar will load any "),a("code",[e._v("application.yml")]),e._v(" file located in the "),a("code",[e._v("komga.config-dir")]),e._v(" directory (defaults to "),a("code",[e._v("~/.komga")]),e._v(", "),a("a",{attrs:{href:"#komga-configdir-komga-config-dir-directory"}},[e._v("more details")]),e._v(").")])]),e._v(" "),a("p",[e._v("Each configuration key can have a different format depending if it's from the environment variable, or from the "),a("code",[e._v("application.yml")]),e._v(" file. In the following section I will provide both format in the form "),a("code",[e._v("ENVIRONMENT_VARIABLE")]),e._v(" / "),a("code",[e._v("application-property")]),e._v(".")]),e._v(" "),a("p",[e._v("You can also specify configuration via the command line, when launching the "),a("code",[e._v("jar")]),e._v(". Use the "),a("code",[e._v("application-property")]),e._v(" form, and prefix with "),a("code",[e._v("--")]),e._v(". For example:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("java -jar komga.jar --server.servlet.context-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/komga"')]),e._v(" --server.port"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8443")]),e._v("\n")])])]),a("h2",{attrs:{id:"optional-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-configuration"}},[e._v("#")]),e._v(" Optional configuration")]),e._v(" "),a("p",[e._v("You can use some optional configuration keys:")]),e._v(" "),a("h4",{attrs:{id:"komga-configdir-komga-config-dir-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-configdir-komga-config-dir-directory"}},[e._v("#")]),e._v(" KOMGA_CONFIGDIR / komga.config-dir: "),a("code",[e._v("<directory>")])]),e._v(" "),a("p",[e._v("The Komga configuration directory. Will be used to store the logs, database, and any other file Komga needs.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("~/.komga")]),e._v(". "),a("code",[e._v("~")]),e._v(" is your home directory on Unix, and your User profile on Windows.")]),e._v(" "),a("p",[a("em",[e._v("When overriding this configuration, you need to use "),a("code",[e._v("${user.home}")]),e._v(" instead of "),a("code",[e._v("~")]),e._v(" (this is a specific Spring Boot variable).")])]),e._v(" "),a("h4",{attrs:{id:"server-port-server-port-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-port-server-port-port"}},[e._v("#")]),e._v(" SERVER_PORT / server.port: "),a("code",[e._v("<port>")])]),e._v(" "),a("p",[e._v("Port to listen to for the API and web interface.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("8080")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"server-servlet-context-path-server-servlet-context-path-baseurl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#server-servlet-context-path-server-servlet-context-path-baseurl"}},[e._v("#")]),e._v(" SERVER_SERVLET_CONTEXT_PATH / server.servlet.context-path: "),a("code",[e._v("<baseUrl>")])]),e._v(" "),a("p",[e._v("Base URL, useful if you need to reverse proxy with a subfolder.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("/")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-libraries-scan-cron-komga-libraries-scan-cron-cron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-libraries-scan-cron-komga-libraries-scan-cron-cron"}},[e._v("#")]),e._v(" KOMGA_LIBRARIES_SCAN_CRON / komga.libraries-scan-cron: "),a("code",[e._v("<cron>")])]),e._v(" "),a("p",[e._v("A "),a("a",{attrs:{href:"https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/scheduling/support/CronSequenceGenerator.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spring cron expression"),a("OutboundLink")],1),e._v(" for libraries periodic scans.\nFor example "),a("code",[e._v("0 0 * * * ?")]),e._v(" will rescan every hour. "),a("code",[e._v("0 */15 * * * ?")]),e._v(" will rescan every 15 minutes.")]),e._v(" "),a("p",[e._v("To disable the periodic scan, set the value to "),a("code",[e._v("-")]),e._v(".")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("0 0 */8 * * ?")]),e._v(" (every 8 hours).")]),e._v(" "),a("h4",{attrs:{id:"komga-libraries-scan-startup-komga-libraries-scan-startup-true-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-libraries-scan-startup-komga-libraries-scan-startup-true-false"}},[e._v("#")]),e._v(" KOMGA_LIBRARIES_SCAN_STARTUP / komga.libraries-scan-startup: "),a("code",[e._v("<true/false>")])]),e._v(" "),a("p",[e._v("A boolean indicating if Komga should scan your libraries at startup.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-libraries-scan-directory-exclusions-komga-libraries-scan-directory-exclusions-exclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-libraries-scan-directory-exclusions-komga-libraries-scan-directory-exclusions-exclusions"}},[e._v("#")]),e._v(" KOMGA_LIBRARIES_SCAN_DIRECTORY_EXCLUSIONS / komga.libraries-scan-directory-exclusions: "),a("code",[e._v("<exclusions>")])]),e._v(" "),a("p",[e._v("A list of patterns to exclude directories from the scan. If the full path contains any of the patterns, the directory will be ignored. If using the environment variable you need to use a comma-separated list.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("#recycle,@eaDir,@Recycle")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-rememberme-key-komga-remember-me-key-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-rememberme-key-komga-remember-me-key-key"}},[e._v("#")]),e._v(" KOMGA_REMEMBERME_KEY / komga.remember-me.key: "),a("code",[e._v("<key>")])]),e._v(" "),a("p",[e._v("If set, the remember-me auto-login feature will be activated, and will generate a cookie with encoded login information to perform auto-login. Set "),a("code",[e._v("<key>")]),e._v(" to any random string.")]),e._v(" "),a("p",[e._v("Not set by default, you need to set it to enable this feature.")]),e._v(" "),a("h4",{attrs:{id:"komga-rememberme-validity-komga-remember-me-validity-duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-rememberme-validity-komga-remember-me-validity-duration"}},[e._v("#")]),e._v(" KOMGA_REMEMBERME_VALIDITY / komga.remember-me.validity: "),a("code",[e._v("<duration>")])]),e._v(" "),a("p",[e._v("The validity of the generated remember-me cookie. You can specify the timeunit, for example "),a("code",[e._v("14d")]),e._v(" for 14 days, or "),a("code",[e._v("24h")]),e._v(" for 24 hours. If no unit is set, seconds will be used.")]),e._v(" "),a("p",[e._v("Defaults to 2 weeks.")]),e._v(" "),a("h4",{attrs:{id:"komga-sessiontimeout-komga-session-timeout-duration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-sessiontimeout-komga-session-timeout-duration"}},[e._v("#")]),e._v(" KOMGA_SESSIONTIMEOUT / komga.session-timeout: "),a("code",[e._v("<duration>")])]),e._v(" "),a("p",[e._v("The duration after which an inactive session will expire. You can specify the timeunit, for example "),a("code",[e._v("14d")]),e._v(" for 14 days, or "),a("code",[e._v("24h")]),e._v(" for 24 hours. If no unit is set, seconds will be used.")]),e._v(" "),a("p",[e._v("Defaults to 7 days.")]),e._v(" "),a("h4",{attrs:{id:"komga-database-file-komga-database-file-file-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-database-file-komga-database-file-file-path"}},[e._v("#")]),e._v(" KOMGA_DATABASE_FILE / komga.database.file: "),a("code",[e._v("<file path>")])]),e._v(" "),a("p",[e._v("File path for the SQLite database.")]),e._v(" "),a("p",[e._v("If you want to change the directory, it is advised to change "),a("code",[e._v("komga.config-dir")]),e._v(" instead.")]),e._v(" "),a("p",[e._v("Defaults to:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("\\${komga.config-dir}/database.sqlite")]),e._v(" for "),a("em",[e._v("Jar")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("/config/database.sqlite")]),e._v(" for "),a("em",[e._v("Docker")]),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"komga-cors-allowed-origins-komga-cors-allowed-origins-origins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-cors-allowed-origins-komga-cors-allowed-origins-origins"}},[e._v("#")]),e._v(" KOMGA_CORS_ALLOWED_ORIGINS / komga.cors.allowed-origins: "),a("code",[e._v("<origins>")])]),e._v(" "),a("p",[e._v("A list of origins to allow for CORS.")]),e._v(" "),a("p",[e._v("Defaults to empty list.")]),e._v(" "),a("h4",{attrs:{id:"komga-delete-empty-collections-komga-delete-empty-collections-true-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-delete-empty-collections-komga-delete-empty-collections-true-false"}},[e._v("#")]),e._v(" KOMGA_DELETE_EMPTY_COLLECTIONS / komga.delete-empty-collections: "),a("code",[e._v("<true/false>")])]),e._v(" "),a("p",[e._v("A boolean indicating if Komga should delete empty collections after a scan.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-delete-empty-read-lists-komga-delete-empty-read-lists-true-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-delete-empty-read-lists-komga-delete-empty-read-lists-true-false"}},[e._v("#")]),e._v(" KOMGA_DELETE_EMPTY_READ_LISTS / komga.delete-empty-read-lists: "),a("code",[e._v("<true/false>")])]),e._v(" "),a("p",[e._v("A boolean indicating if Komga should delete empty read lists after a scan.")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-file-hashing-komga-file-hashing-true-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-file-hashing-komga-file-hashing-true-false"}},[e._v("#")]),e._v(" KOMGA_FILE_HASHING / komga.file-hashing: "),a("code",[e._v("<true/false>")]),e._v(" "),a("Badge",{attrs:{text:"removed since 0.143.0",type:"warning"}})],1),e._v(" "),a("p",[e._v("This has been moved to "),a("RouterLink",{attrs:{to:"/guides/libraries.html#compute-hash-for-files"}},[e._v("Library options")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"komga-oauth2-account-creation-komga-oauth2-account-creation-true-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-oauth2-account-creation-komga-oauth2-account-creation-true-false"}},[e._v("#")]),e._v(" KOMGA_OAUTH2_ACCOUNT_CREATION / komga.oauth2-account-creation: "),a("code",[e._v("<true/false>")])]),e._v(" "),a("p",[e._v("A boolean indicating whether Komga should create new users when a login via OAuth2/OIDC succeeds, but there is no existing user with that email.")]),e._v(" "),a("p",[e._v("Such users will be created with a random password, which the user can subsequently change from the "),a("em",[e._v("Account Settings")]),e._v(" page later on, for example to be able to connect using OPDS or Tachiyomi.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("It is recommended to enable this only with OAuth2 providers you control")])]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-oidc-email-verification-komga-oidc-email-verification-true-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-oidc-email-verification-komga-oidc-email-verification-true-false"}},[e._v("#")]),e._v(" KOMGA_OIDC_EMAIL_VERIFICATION / komga.oidc-email-verification: "),a("code",[e._v("<true/false>")])]),e._v(" "),a("p",[e._v("A boolean indicating whether Komga should check whether the "),a("code",[e._v("email_verified")]),e._v(" claim is present and true in the OpenID Connect request.")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("It is recommended to disable this only with OIDC providers that do not verify emails (like Azure AD)")])]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"logging-file-name-logging-file-name-logfile-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-file-name-logging-file-name-logfile-name"}},[e._v("#")]),e._v(" LOGGING_FILE_NAME / logging.file.name: "),a("code",[e._v("<logfile name>")])]),e._v(" "),a("p",[e._v("Name of the log file.")]),e._v(" "),a("p",[e._v("If you want to change the directory, it is advised to change "),a("code",[e._v("komga.config-dir")]),e._v(" instead.")]),e._v(" "),a("p",[e._v("Defaults to:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("\\${komga.config-dir}/komga.log")]),e._v(" for "),a("em",[e._v("Jar")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("/config/logs/komga.log")]),e._v(" for "),a("em",[e._v("Docker")]),e._v(".")])]),e._v(" "),a("p",[a("em",[e._v("When overriding this configuration, you need to use "),a("code",[e._v("${user.home}")]),e._v(" instead of "),a("code",[e._v("~")]),e._v(" (this is a specific Spring Boot variable).")])]),e._v(" "),a("h4",{attrs:{id:"komga-taskconsumers-komga-task-consumers-int"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-taskconsumers-komga-task-consumers-int"}},[e._v("#")]),e._v(" KOMGA_TASKCONSUMERS / komga.task-consumers: "),a("code",[e._v("<int>")])]),e._v(" "),a("p",[e._v("The initial number of thread that will consume tasks. Must be positive and lower or equal to "),a("code",[e._v("komga.task-consumers-max")]),e._v(".")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"komga-taskconsumersmax-komga-task-consumers-max-int"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#komga-taskconsumersmax-komga-task-consumers-max-int"}},[e._v("#")]),e._v(" KOMGA_TASKCONSUMERSMAX / komga.task-consumers-max: "),a("code",[e._v("<int>")])]),e._v(" "),a("p",[e._v("The maximum number of thread that will consume tasks. Must be positive and greater or equal to "),a("code",[e._v("komga.task-consumers")]),e._v(".")]),e._v(" "),a("p",[e._v("Defaults to "),a("code",[e._v("1")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"sample-configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-configuration-file"}},[e._v("#")]),e._v(" Sample Configuration File")]),e._v(" "),a("p",[e._v("Here is a sample "),a("code",[e._v("application.yml")]),e._v(" file in case you need to customize it. Keep only the lines you need.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Only keep lines that are relevant to you!")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Lines starting with # are comments")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Make sure indentation is correct (2 spaces at every indentation level), yaml is very sensitive!")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("komga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("libraries-scan-cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0 0 */8 * * ?"')]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# periodic scan every 8 hours")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("libraries-scan-cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-"')]),e._v("              "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# disable periodic scan")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("libraries-scan-startup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("false")]),e._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# scan libraries at startup")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("libraries-scan-directory-exclusions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# patterns to exclude directories from the scan")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"#recycle"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# synology NAS recycle bin")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@eaDir"')]),e._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# synology NAS index/metadata folders")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@Recycle"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# QNAP NAS recycle bin")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("remember-me")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" changeMe"),a("span",{pre:!0,attrs:{class:"token tag"}},[e._v("!")]),e._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# required to activate the remember-me auto-login via cookies")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("validity")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 30d     "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# validity of the cookie in seconds, here 30 days")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("session-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 7d "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# session timeout, here 7 days")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("user.home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("/.komga/database.sqlite\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("cors.allowed-origins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8081")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8082")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("delete-empty-collections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("delete-empty-read-lists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[e._v("true")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8080")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("servlet.context-path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /komga\n")])])]),a("h2",{attrs:{id:"database-performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#database-performance"}},[e._v("#")]),e._v(" Database performance")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Use at your own risk!")])]),e._v(" "),a("p",[e._v("Some specific configuration keys are available to tweak the database performance.")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("komga")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sets the retry timeout when SQLITE_BUSY error happens")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("busy-timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 30s\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# changes the journal mode")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# accepted values are: DELETE, TRUNCATE, PERSIST, MEMORY, WAL, OFF")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# most likely to be set to wal if needed, check https://sqlite.org/wal.html for more details")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("journal-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" wal\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pool size will determine the number of connections in the pool")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# this takes precedence over max-pool-size if set")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# defaults to undefined")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pool-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# max-pool-size will determine the maximum number of connections in the pool")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# when set, the number of connections is set to the number of available processors capped at max-pool-size")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# defaults to 1")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("max-pool-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8")]),e._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pragmas accepts a list of key/value pairs where:")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# - key is the pragma name (see https://www.sqlite.org/pragma.html)")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# - value is the pragma value")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("pragmas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# here are some example pragmas")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("page_size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("synchronous")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" OFF\n")])])]),a("h2",{attrs:{id:"https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[e._v("#")]),e._v(" HTTPS")]),e._v(" "),a("p",[e._v("If you want to open your Komga server outside your local network, it is strongly advised to secure it with "),a("code",[e._v("https")]),e._v(" (especially due to the use of http basic authentication).")]),e._v(" "),a("p",[e._v("Spring Boot supports "),a("code",[e._v("https")]),e._v(" out of the box, but you will have to configure it, and "),a("code",[e._v("https")]),e._v(" is most useful only with valid certificates (not self-signed), which most people don't readily have available.")]),e._v(" "),a("p",[e._v("I recommend using "),a("a",{attrs:{href:"https://caddyserver.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Caddy"),a("OutboundLink")],1),e._v(" as a reverse proxy, as it supports the automatic generation of "),a("a",{attrs:{href:"https://letsencrypt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Let's Encrypt"),a("OutboundLink")],1),e._v(" certificates.")]),e._v(" "),a("h2",{attrs:{id:"reverse-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy"}},[e._v("#")]),e._v(" Reverse proxy")]),e._v(" "),a("p",[e._v("Here are some sample configuration on how to configure reverse proxy for Komga.")]),e._v(" "),a("h3",{attrs:{id:"caddy-v1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caddy-v1"}},[e._v("#")]),e._v(" Caddy (v1)")]),e._v(" "),a("p",[e._v("Without a base URL configured in Komga, using a subdomain:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("komga.yourdomain.com {\n  proxy / http://your-komga-server:8080 {\n    transparent\n  }\n}\n")])])]),a("p",[e._v("With a base URL configured in Komga:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yourdomain.com {\n  proxy /komga http://your-komga-server:8080 {\n    transparent\n  }\n}\n")])])]),a("h3",{attrs:{id:"caddy-v2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#caddy-v2"}},[e._v("#")]),e._v(" Caddy (v2)")]),e._v(" "),a("p",[e._v("Without a base URL configured in Komga, using a subdomain:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("komga.yourdomain.com {\n  reverse_proxy http://your-komga-server:8080\n}\n")])])]),a("p",[e._v("With a base URL configured in Komga:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yourdomain.com {\n  reverse_proxy /komga/* http://your-komga-server:8080\n}\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);