---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Helpers
## Introduction
To use these methods and features, do not forget to put this line of code in your "using" region:

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~
## Methods

### a. IsUrlValid
**This function is available in version 3.11 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsUrlValid()` method allows you to check if a specified URL is valid or not. It return a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Helpers.IsUrlValid()
~~~
This method has one argument:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | url | The URL to check |

Here's an example of usage:

C#

~~~ cs
bool isValid = Helpers.IsUrlValid("https://leocorporation.dev/");
// isValid = true
~~~

VB

~~~ vb
Dim isValid As Boolean = Helpers.IsUrlValid("https://leocorporation.dev/")
' isValid = true
~~~

[Go to top](#helpers)


### b. GetUrlProtocol
**This function is available in version 3.11 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetUrlProtocol()` method allows you to get the protocol of an URL. It returns a `string` value.

It's in:

~~~ cs
LeoCorpLibrary.Helpers.GetUrlProtocol()
~~~
This method has one argument:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | url | The URL to parse |

Here's an example of usage:

C#

~~~ cs
string protocol = Helpers.GetUrlProtocol("https://leocorporation.dev/");
// protocol = "https"
~~~

VB

~~~ vb
Dim protocol As String = Helpers.GetUrlProtocol("https://leocorporation.dev/")
' protocol = "https"
~~~

[Go to top](#helpers)


### c. IsUrlHttps
**This function is available in version 3.11 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsUrlHttps()` method allows you to check if the URL's protocol is equal to "https". It return a `bool` value.

It's in:

~~~ cs
LeoCorpLibrary.Helpers.IsUrlHttps()
~~~
This method has one argument:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | url | The URL to check |

Here's an example of usage:

C#

~~~ cs
bool isHttps = Helpers.IsUrlHttps("https://leocorporation.dev/");
// isHttps = true

bool isHttps2 = Helpers.IsUrlHttps("http://leocorporation.dev/");
// isHttp2s = false
~~~

VB

~~~ vb
Dim isHttps As Boolean = Helpers.IsUrlHttps("https://leocorporation.dev/")
' isHttps = true

Dim isHttps2 As Boolean = Helpers.IsUrlHttps("http://leocorporation.dev/")
' isHttp2s = false
~~~

[Go to top](#helpers)