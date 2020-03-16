(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(e,t,s){e.exports=s.p+"assets/img/generate-app.82e39214.png"},211:function(e,t,s){"use strict";s.r(t);var a=s(28),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"generating-an-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-an-app"}},[e._v("#")]),e._v(" Generating an app")]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/guides/basics/starting.html"}},[e._v("getting started chapter")]),e._v(" we created a Feathers application in a single file to get a better understanding how Feathers itself works. The Feathers CLI allows us to initialize a new Feathers server with a recommended structure and helps with generating things we commonly need like authentication, a database connection, new services or hooks (more about hooks in a little bit). It can be installed via:")],1),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @feathersjs/cli -g\n")])])]),a("blockquote",[a("p",[a("strong",[e._v("Important:")]),e._v(" As mentioned when "),a("RouterLink",{attrs:{to:"/guides/basics/starting.html"}},[e._v("getting ready")]),e._v(",  "),a("code",[e._v("@feathersjs/cli")]),e._v(" also requires Node version 10 or later. If you already have it installed, "),a("code",[e._v("feathers --version")]),e._v(" should show "),a("code",[e._v("4.1.0")]),e._v(" or later.")],1)]),e._v(" "),a("h2",{attrs:{id:"generating-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-application"}},[e._v("#")]),e._v(" Generating the application")]),e._v(" "),a("p",[e._v("Let's create a new directory for our app and in it, generate a new application:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" feathers-chat\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" feathers-chat/\n$ feathers generate app\n")])])]),a("p",[e._v("First, choose if you want to use JavaScript or TypeScript. When presented with the project name, just hit enter, or enter a name (no spaces). Next, write a short description of your application. All other questions should be confirmed with the default selection by hitting Enter.")]),e._v(" "),a("p",[e._v("Once you confirm the last prompt, the final selection should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(196),alt:"feathers generate app prompts"}})]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Important:")]),e._v(" If you are following this guide for the first time we recommend to not change any of those settings other than the TypeScript/JavaScript selection. Otherwise you might run into things that are not covered here.")])]),e._v(" "),a("h2",{attrs:{id:"the-generated-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-generated-files"}},[e._v("#")]),e._v(" The generated files")]),e._v(" "),a("p",[e._v("Let's have a brief look at the files that have been generated:")]),e._v(" "),a("tabs",{attrs:{options:{useUrlFragment:!1}}},[a("tab",{attrs:{name:"JavaScript"}},[a("ul",[a("li",[a("code",[e._v("config/")]),e._v(" contains the configuration files for the app\n"),a("ul",[a("li",[a("code",[e._v("default.json")]),e._v(" contains the basic application configuration")]),e._v(" "),a("li",[a("code",[e._v("production.json")]),e._v(" files override "),a("code",[e._v("default.json")]),e._v(" when in production mode by setting "),a("code",[e._v("NODE_ENV=production")]),e._v(". For details, see the "),a("RouterLink",{attrs:{to:"/api/configuration.html"}},[e._v("configuration API documentation")])],1)])]),e._v(" "),a("li",[a("code",[e._v("node_modules/")]),e._v(" our installed dependencies which are also added in the "),a("code",[e._v("package.json")])]),e._v(" "),a("li",[a("code",[e._v("public/")]),e._v(" contains static files to be served. A sample favicon and "),a("code",[e._v("index.html")]),e._v(" (which will show up when going directly to the server URL) are already included.")]),e._v(" "),a("li",[a("code",[e._v("src/")]),e._v(" contains the Feathers server code.\n"),a("ul",[a("li",[a("code",[e._v("hooks/")]),e._v(" contains our custom "),a("RouterLink",{attrs:{to:"/guides/basics/hooks.html"}},[e._v("hooks")])],1),e._v(" "),a("li",[a("code",[e._v("services/")]),e._v(" contains our "),a("RouterLink",{attrs:{to:"/guides/basics/services.html"}},[e._v("services")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("users/")]),e._v(" is a service that has been generated automatically to allow registering and authenticating users\n"),a("ul",[a("li",[a("code",[e._v("users.class.js")]),e._v(" is the service class")]),e._v(" "),a("li",[a("code",[e._v("users.hooks.js")]),e._v(" initializes Feathers hooks for this service")]),e._v(" "),a("li",[a("code",[e._v("users.service.js")]),e._v(" registers this service on our Feathers application")])])])])],1),e._v(" "),a("li",[a("code",[e._v("middleware/")]),e._v(" contains any "),a("a",{attrs:{href:"http://expressjs.com/en/guide/writing-middleware.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express middleware"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("models/")]),e._v(" contains database model files\n"),a("ul",[a("li",[a("code",[e._v("users.model.js")]),e._v(" sets up our user collection for NeDB")])])]),e._v(" "),a("li",[a("code",[e._v("app.js")]),e._v(" configures our Feathers application like we did in the "),a("RouterLink",{attrs:{to:"/guides/basics/starting.html"}},[e._v("getting started chapter")])],1),e._v(" "),a("li",[a("code",[e._v("app.hooks.js")]),e._v(" registers hooks that apply to every service")]),e._v(" "),a("li",[a("code",[e._v("authentication.js")]),e._v(" sets up Feathers authentication system")]),e._v(" "),a("li",[a("code",[e._v("channels.js")]),e._v(" sets up Feathers "),a("RouterLink",{attrs:{to:"/api/channels.html"}},[e._v("event channels")])],1),e._v(" "),a("li",[a("code",[e._v("index.js")]),e._v(" loads and starts the application")])])]),e._v(" "),a("li",[a("code",[e._v("test/")]),e._v(" contains test files for the app, hooks and services\n"),a("ul",[a("li",[a("code",[e._v("services/")]),e._v(" has our service tests\n"),a("ul",[a("li",[a("code",[e._v("users.test.js")]),e._v(" contains some basic tests for the "),a("code",[e._v("users")]),e._v(" service")])])]),e._v(" "),a("li",[a("code",[e._v("app.test.js")]),e._v(" tests that the index page appears, as well as 404 errors for HTML pages and JSON")]),e._v(" "),a("li",[a("code",[e._v("authentication.test.js")]),e._v(" includes some tests that basic authentication works")])])]),e._v(" "),a("li",[a("code",[e._v(".editorconfig")]),e._v(" is an "),a("a",{attrs:{href:"http://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EditorConfig"),a("OutboundLink")],1),e._v(" setting to help developers define and maintain consistent coding styles among different editors and IDEs.")]),e._v(" "),a("li",[a("code",[e._v(".eslintrc.json")]),e._v(" contains defaults for linting your code with "),a("a",{attrs:{href:"http://eslint.org/docs/user-guide/getting-started",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESLint"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[a("code",[e._v(".gitignore")]),e._v(" specifies "),a("a",{attrs:{href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("intentionally untracked files"),a("OutboundLink")],1),e._v(" which "),a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(" and other similar projects ignore.")]),e._v(" "),a("li",[a("code",[e._v("package.json")]),e._v(" contains "),a("a",{attrs:{href:"https://docs.npmjs.com/files/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("information"),a("OutboundLink")],1),e._v(" about our NodeJS project like its name or dependencies.")]),e._v(" "),a("li",[a("code",[e._v("README.md")]),e._v(" has installation and usage instructions")])])]),e._v(" "),a("tab",{attrs:{name:"TypeScript"}},[a("ul",[a("li",[a("code",[e._v("config/")]),e._v(" contains the configuration files for the app\n"),a("ul",[a("li",[a("code",[e._v("default.json")]),e._v(" contains the basic application configuration")]),e._v(" "),a("li",[a("code",[e._v("production.json")]),e._v(" files override "),a("code",[e._v("default.json")]),e._v(" when in production mode by setting "),a("code",[e._v("NODE_ENV=production")]),e._v(". For details, see the "),a("RouterLink",{attrs:{to:"/api/configuration.html"}},[e._v("configuration API documentation")])],1)])]),e._v(" "),a("li",[a("code",[e._v("node_modules/")]),e._v(" our installed dependencies which are also added in the "),a("code",[e._v("package.json")])]),e._v(" "),a("li",[a("code",[e._v("public/")]),e._v(" contains static files to be served. A sample favicon and "),a("code",[e._v("index.html")]),e._v(" (which will show up when going directly to the server URL) are already included.")]),e._v(" "),a("li",[a("code",[e._v("src/")]),e._v(" contains the Feathers server code.\n"),a("ul",[a("li",[a("code",[e._v("hooks/")]),e._v(" contains our custom "),a("RouterLink",{attrs:{to:"/guides/basics/hooks.html"}},[e._v("hooks")])],1),e._v(" "),a("li",[a("code",[e._v("services/")]),e._v(" contains our "),a("RouterLink",{attrs:{to:"/guides/basics/services.html"}},[e._v("services")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("users/")]),e._v(" is a service that has been generated automatically to allow registering and authenticating users\n"),a("ul",[a("li",[a("code",[e._v("users.class.ts")]),e._v(" is the service class")]),e._v(" "),a("li",[a("code",[e._v("users.hooks.ts")]),e._v(" initializes Feathers hooks for this service")]),e._v(" "),a("li",[a("code",[e._v("users.service.ts")]),e._v(" registers this service on our Feathers application")])])])])],1),e._v(" "),a("li",[a("code",[e._v("middleware/")]),e._v(" contains any "),a("a",{attrs:{href:"http://expressjs.com/en/guide/writing-middleware.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express middleware"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("models/")]),e._v(" contains database model files\n"),a("ul",[a("li",[a("code",[e._v("users.model.ts")]),e._v(" sets up our user collection for NeDB")])])]),e._v(" "),a("li",[a("code",[e._v("app.ts")]),e._v(" configures our Feathers application like we did in the "),a("RouterLink",{attrs:{to:"/guides/basics/starting.html"}},[e._v("getting started chapter")])],1),e._v(" "),a("li",[a("code",[e._v("app.hooks.ts")]),e._v(" registers hooks that apply to every service")]),e._v(" "),a("li",[a("code",[e._v("authentication.ts")]),e._v(" sets up Feathers authentication system")]),e._v(" "),a("li",[a("code",[e._v("channels.ts")]),e._v(" sets up Feathers "),a("RouterLink",{attrs:{to:"/api/channels.html"}},[e._v("event channels")])],1),e._v(" "),a("li",[a("code",[e._v("declarations.ts")]),e._v(" contains TypeScript declarations for our app")]),e._v(" "),a("li",[a("code",[e._v("index.ts")]),e._v(" loads and starts the application")])])]),e._v(" "),a("li",[a("code",[e._v("test/")]),e._v(" contains test files for the app, hooks and services\n"),a("ul",[a("li",[a("code",[e._v("services/")]),e._v(" has our service tests\n"),a("ul",[a("li",[a("code",[e._v("users.test.ts")]),e._v(" contains some basic tests for the "),a("code",[e._v("users")]),e._v(" service")])])]),e._v(" "),a("li",[a("code",[e._v("app.test.ts")]),e._v(" tests that the index page appears, as well as 404 errors for HTML pages and JSON")]),e._v(" "),a("li",[a("code",[e._v("authentication.test.ts")]),e._v(" includes some tests that basic authentication works")])])]),e._v(" "),a("li",[a("code",[e._v(".editorconfig")]),e._v(" is an "),a("a",{attrs:{href:"http://editorconfig.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EditorConfig"),a("OutboundLink")],1),e._v(" setting to help developers define and maintain consistent coding styles among different editors and IDEs.")]),e._v(" "),a("li",[a("code",[e._v(".gitignore")]),e._v(" specifies "),a("a",{attrs:{href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("intentionally untracked files"),a("OutboundLink")],1),e._v(" which "),a("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("git"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1),e._v(" and other similar projects ignore.")]),e._v(" "),a("li",[a("code",[e._v("tsconfig.json")]),e._v(" the TypeScript "),a("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("compiler configuration"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("package.json")]),e._v(" contains "),a("a",{attrs:{href:"https://docs.npmjs.com/files/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("information"),a("OutboundLink")],1),e._v(" about our NodeJS project like its name or dependencies.")]),e._v(" "),a("li",[a("code",[e._v("README.md")]),e._v(" has installation and usage instructions")])])])],1),e._v(" "),a("h2",{attrs:{id:"configure-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure-functions"}},[e._v("#")]),e._v(" Configure functions")]),e._v(" "),a("p",[e._v("The most important pattern used in the generated application to split things up into individual files are "),a("em",[e._v("configure functions")]),e._v(" which are functions that are exported from a file and take the Feathers "),a("RouterLink",{attrs:{to:"/api/application.html"}},[e._v("app object")]),e._v(" and then use it to e.g. register services. Those functions are then passed to "),a("RouterLink",{attrs:{to:"/api/application.html#configurecallback"}},[e._v("app.configure")]),e._v(".")],1),e._v(" "),a("p",[e._v("For example, have a look at the following files:")]),e._v(" "),a("tabs",{attrs:{options:{useUrlFragment:!1}}},[a("tab",{attrs:{name:"JavaScript"}},[a("p",[a("code",[e._v("src/services/index.js")]),e._v(" looks like this:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" users "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./users/users.service.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// eslint-disable-next-line no-unused-vars")]),e._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("It uses another configure function exported from "),a("code",[e._v("src/services/users/users.service.js")]),e._v(". The export from "),a("code",[e._v("src/services/index.js")]),e._v(" is in turn used in "),a("code",[e._v("src/app.js")]),e._v(" as:")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" services "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./services'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Set up our services (see `services/index.js`)")]),e._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n")])])])]),e._v(" "),a("tab",{attrs:{name:"TypeScript"}},[a("p",[a("code",[e._v("src/services/index.ts")]),e._v(" looks like this:")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Application "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'../declarations'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" users "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./users/users.service'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Don't remove this comment. It's needed to format import lines nicely.")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("default")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("users"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("It uses another configure function exported from "),a("code",[e._v("src/services/users/users.service.ts")]),e._v(". The export from "),a("code",[e._v("src/services/index.js")]),e._v(" is in turn used in "),a("code",[e._v("src/app.ts")]),e._v(" as:")]),e._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" services "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./services'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("authentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Set up our services (see `services/index.js`)")]),e._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("services"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n")])])])])],1),e._v(" "),a("p",[e._v("This is how the generator splits things up into separate files and any documentation example that uses the "),a("code",[e._v("app")]),e._v(" object can be used in a configure function. You can create your own files that export a configure function and "),a("code",[e._v("require")]),e._v("/"),a("code",[e._v("import")]),e._v(" and "),a("code",[e._v("app.configure")]),e._v(" them in "),a("code",[e._v("app.js")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[a("strong",[e._v("Note:")]),e._v(" Keep in mind that the order in which configure functions are called might matter, e.g. if it is using a service, that service has to be registered first.")])]),e._v(" "),a("h2",{attrs:{id:"running-the-server-and-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-server-and-tests"}},[e._v("#")]),e._v(" Running the server and tests")]),e._v(" "),a("p",[e._v("The server can now be started by running")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" start\n")])])]),a("p",[e._v("After that, you can see a welcome page at "),a("a",{attrs:{href:"http://localhost:3030",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:3030"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The app also comes with a set of basic tests which can be run with")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("test")]),e._v("\n")])])]),a("p",[e._v("There is also a handy development command that restarts the server automatically whenever we make a code change:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run dev\n")])])]),a("p",[e._v("You can keep this command running throughout the rest of this guide, it will reload all our changes automatically.")]),e._v(" "),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),a("p",[e._v("In this chapter we installed the Feathers CLI, scaffolded a new Feathers application and learned how it splits things up into separate files. In "),a("RouterLink",{attrs:{to:"/guides/basics/services.html"}},[e._v("the next chapter")]),e._v(" we will learn more about Feathers services and databases.")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);