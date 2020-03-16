(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{254:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook"}},[t._v("#")]),t._v(" Hook")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("authenticate")]),t._v(" hook will use "),s("code",[t._v("params.authentication")]),t._v(" of the service method call and run "),s("a",{attrs:{href:""}},[t._v("authenticationService.authenticate()")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"authenticate-strategies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-strategies"}},[t._v("#")]),t._v(" authenticate(... strategies)")]),t._v(" "),s("h2",{attrs:{id:"authenticate-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authenticate-options"}},[t._v("#")]),t._v(" authenticate(options)")]),t._v(" "),s("p",[t._v("It should be used as a "),s("code",[t._v("before")]),t._v(" hook and either takes a list of strategy names (using "),s("code",[t._v("app.service('authentication')")]),t._v(" as the authentication service) or an object with "),s("code",[t._v("service")]),t._v(" set to the authentication service name and "),s("code",[t._v("strategies")]),t._v(" set to a list of strategy names to authenticate with:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" authenticate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@feathersjs/authentication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Authenticate with `jwt` and `api-key` strategy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using app.service('authentication') as the authentication service")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  before"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jwt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api-key'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Authenticate with `jwt` and `api-key` strategy")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using app.service('v1/authentication') as the authentication service")]),t._v("\napp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hooks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  before"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("authenticate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v1/authentication'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    strategies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jwt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api-key'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("The hook will")]),t._v(" "),s("ul",[s("li",[t._v("Throw an error if the strategy fails")]),t._v(" "),s("li",[t._v("Throw an error if no authentication information is set and it is an external call ("),s("code",[t._v("params.provider")]),t._v(" is set) or do nothing if it is an internal call ("),s("code",[t._v("params.provider")]),t._v(" is "),s("code",[t._v("undefined")]),t._v(")")]),t._v(" "),s("li",[t._v("If successful, merge "),s("code",[t._v("params")]),t._v(" with the return value of the authentication strategy")])]),t._v(" "),s("p",[t._v("For example, a successful "),s("RouterLink",{attrs:{to:"/api/authentication/jwt.html"}},[t._v("JWT strategy")]),t._v(" authentication will set:")],1),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("payload "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The decoded payload")]),t._v("\nparams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("strategy "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jwt'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The strategy name")]),t._v("\nparams"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or params[entity] if entity is not `null`")]),t._v("\n")])])]),s("p",[t._v("In the following hooks and for the service method call.")])])}),[],!1,null,null,null);a.default=e.exports}}]);