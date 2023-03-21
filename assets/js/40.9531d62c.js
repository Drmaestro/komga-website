(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{318:function(e,a,o){"use strict";o.r(a);var t=o(10),i=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"prepare-for-v1-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-for-v1-0-0"}},[e._v("#")]),e._v(" Prepare for v1.0.0")]),e._v(" "),a("p",[e._v("The future v1.0.0 will bring some breaking changes, this guide will help you to prepare for the next major version.")]),e._v(" "),a("h2",{attrs:{id:"before-upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-upgrading"}},[e._v("#")]),e._v(" Before upgrading")]),e._v(" "),a("ul",[a("li",[e._v("If you run Docker, it is advisable to use the "),a("code",[e._v("0.x")]),e._v(" tag instead of "),a("code",[e._v("latest")]),e._v(". You will be able to decide when you want to upgrade, especially if you are updating containers automatically.")]),e._v(" "),a("li",[e._v("Backup your "),a("code",[e._v("database.sqlite")]),e._v(". You can find it in the configuration directory, by default:\n"),a("ul",[a("li",[e._v("on Windows: "),a("code",[e._v("%USERPROFILE%/.komga/database.sqlite")])]),e._v(" "),a("li",[e._v("on Unix: "),a("code",[e._v("~/.komga/database.sqlite")])]),e._v(" "),a("li",[e._v("on Docker: in the directory you mounted as "),a("code",[e._v("/config")])])])])]),e._v(" "),a("h2",{attrs:{id:"breaking-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breaking-changes"}},[e._v("#")]),e._v(" Breaking changes")]),e._v(" "),a("ul",[a("li",[e._v("The minimum Java version required will be Java 17:\n"),a("ul",[a("li",[e._v("If you run Komga using the "),a("code",[e._v("jar")]),e._v(", you will need to make sure your Java version is sufficient by running "),a("code",[e._v("java -version")]),e._v(".")]),e._v(" "),a("li",[e._v("If you run Komga using Docker, you don't need to do anything.")])])]),e._v(" "),a("li",[e._v("The hashing algorithm for files and pages will change. Previous hashes for files and pages will be deleted. On startup, if hashing is enabled, Komga will re-hash files and pages using the new algorithm.")]),e._v(" "),a("li",[e._v("The default port will be changed from "),a("code",[e._v("8080")]),e._v(" to "),a("code",[e._v("25600")]),e._v(":\n"),a("ul",[a("li",[e._v("If you use Docker, you will need to update your container or compose configuration to expose the new port.")]),e._v(" "),a("li",[e._v("You may need to adjust your reverse proxy settings.")]),e._v(" "),a("li",[e._v("You can still change the port "),a("RouterLink",{attrs:{to:"/installation/configuration.html#server-port-server-port-port"}},[e._v("through configuration")]),e._v(".")],1)])])])])}),[],!1,null,null,null);a.default=i.exports}}]);