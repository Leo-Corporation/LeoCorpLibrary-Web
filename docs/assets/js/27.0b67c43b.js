(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{392:function(t,a,e){"use strict";e.r(a);var s=e(45),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"networkconnection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#networkconnection"}},[t._v("#")]),t._v(" NetworkConnection")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v('Do not forget to add this line of code in your "using" region:')]),t._v(" "),e("p",[t._v("C#")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("LeoCorpLibrary")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("VB")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Imports")]),t._v(" LeoCorpLibrary\n")])])]),e("h2",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),e("p",[t._v("There is two methods to check if an internet connection is available or not:")]),t._v(" "),e("ol",[e("li",[t._v("IsAvailable()")]),t._v(" "),e("li",[t._v("IsAvailableTestSite()")])]),t._v(" "),e("p",[t._v("They are in:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[t._v("LeoCorpLibrary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvailable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"a-isavailable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-isavailable"}},[t._v("#")]),t._v(" a. IsAvailable")]),t._v(" "),e("p",[e("strong",[t._v("This method is avaialable in version 1.1 and higher.")])]),t._v(" "),e("details",[e("summary",[t._v("Compatibility")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Framework")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary.Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Core 3.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.7.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])])])])]),t._v(" "),e("p",[t._v("This method is trying to connection https://bing.com. If it manage to connect, it means that a connection to internet is available.")]),t._v(" "),e("p",[t._v("Here's an example of usage:")]),t._v(" "),e("p",[t._v("C#")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvailable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If true")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("VB")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAvailable"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' If true")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n")])])]),e("h3",{attrs:{id:"b-isavailabletestsite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-isavailabletestsite"}},[t._v("#")]),t._v(" b. IsAvailableTestSite")]),t._v(" "),e("p",[e("strong",[t._v("This method is avaialable in version 1.1 and higher.")])]),e("details",[e("summary",[t._v("Compatibility")]),e("p"),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Framework")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary.Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Core 3.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.7.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])])])])]),t._v(" "),e("p",[t._v("This method is gonna try to connect to a specific page tha tyou specified. If it manages to connect to the website, it means there is an Internet connection.")]),t._v(" "),e("p",[t._v("You must specify a website like this:")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("p",[e("code",[t._v('IsAvailableTestSite("https://example.com")')])]),t._v(" "),e("p",[t._v("Here's an example of usage:")]),t._v(" "),e("p",[t._v("C#")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvailableTestSite")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If true")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("VB")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAvailableTestSite"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://example.com"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Then")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("' If true")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Else")]),t._v("\n    Console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WriteLine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not connected"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("If")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"#networkconnection"}},[t._v("Go to top")])]),t._v(" "),e("h3",{attrs:{id:"c-isavailableasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#c-isavailableasync"}},[t._v("#")]),t._v(" c. IsAvailableAsync")]),t._v(" "),e("p",[e("strong",[t._v("This method is avaialable in version 2.1 and higher.")])]),t._v(" "),e("details",[e("summary",[t._v("Compatibility")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Framework")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary.Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Core 3.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.7.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])])])])]),t._v(" "),e("p",[t._v("This method verifies if an Internet connection is available by sending a request on a website (https://bing.com). It returns a "),e("code",[t._v("bool")]),t._v(" value.")]),t._v(" "),e("p",[t._v("It's in:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[t._v("LeoCorpLibrary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvailableAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Here's an example of usage:")]),t._v(" "),e("p",[t._v("C#")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" connectionAvailable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvailableAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("VB")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" Async "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" connectionAvailable "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Await NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAvailableAsync"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"#networkconnection"}},[t._v("Go to top")])]),t._v(" "),e("h3",{attrs:{id:"d-isavailabletestsiteasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#d-isavailabletestsiteasync"}},[t._v("#")]),t._v(" d. IsAvailableTestSiteAsync")]),t._v(" "),e("p",[e("strong",[t._v("This method is avaialable in version 2.1 and higher.")])]),t._v(" "),e("details",[e("summary",[t._v("Compatibility")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Framework")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("LeoCorpLibrary.Core")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET 5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Core 3.1")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.7.2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(".NET Framework 4.5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔")])])])])]),t._v(" "),e("p",[t._v("This method verifies if an Internet connection is available by sending a request on a specified website. Returns a "),e("code",[t._v("bool")]),t._v(" value.")]),t._v(" "),e("p",[t._v("It's in:")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[t._v("LeoCorpLibrary"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvailableTestSiteAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("It has one argument:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Valeur")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Paramètre")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("site")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("URL of the website where the connection is tested")])])])]),t._v(" "),e("p",[t._v("Here's an example of usage:")]),t._v(" "),e("p",[t._v("C#")]),t._v(" "),e("div",{staticClass:"language-cs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cs"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token return-type class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("TestConnection")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token class-name"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")])]),t._v(" connectionAvailable "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsAvaialableTestSiteAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://leocorp.fr"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("VB")]),t._v(" "),e("div",{staticClass:"language-vb extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vb"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Private")]),t._v(" Async "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v(" TestConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" connectionAvailable "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("As")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Boolean")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Await NetworkConnection"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsAvailableTestSiteAsync"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://leocorp.fr"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("End")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Sub")]),t._v("\n")])])]),e("p",[e("a",{attrs:{href:"#networkconnection"}},[t._v("Go to top")])])])}),[],!1,null,null,null);a.default=n.exports}}]);