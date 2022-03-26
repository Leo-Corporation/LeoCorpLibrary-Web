---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# NetworkConnection
## Introduction
Do not forget to add this line of code in your "using" region:

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~
## Functions
There are various methods available in `NetworkConnection` to help achieve what you wanna do.

They are in:
~~~ cs
LeoCorpLibrary.NetworkConnection.IsAvailable()
~~~
### a. IsAvailable
**This method is available in version 1.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method tries to connect to https://bing.com by default. If it receives a positive status code (like 200), it will return `true`.

You can specify a custom website if you want to:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | url | The URL of the website where the connection is going to be tested |

::: tip Note
Specifying a custom website is available starting with version 4.1+.
:::

Here's an example of usage:

C#
~~~ cs
if (NetworkConnection.IsAvailable()) 
{
    Console.WriteLine("Connected");
}
else
{
    Console.WriteLine("Not connected");
}

// Or
bool isAvailable = NetworkConnection.IsAvailable("https://leocorporation.dev");
~~~
VB
~~~ vb
If (NetworkConnection.IsAvailable()) Then
    Console.WriteLine("Connected")
Else
    Console.WriteLine("Not connected")
End If

' Or
// Or
Dim isAvailable As Boolean = NetworkConnection.IsAvailable("https://leocorporation.dev")
~~~
### b. IsAvailableTestSite
**This method is available in version 1.1 and higher.**

::: danger Obsolete
This method is obsolete, please use [``IsAvailable()``](#a-isavailable) instead.
:::

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>


This method is going to try to connect to a specific page that you specified. If it manages to connect to that page, it means there is an Internet connection. 

You must specify a website like this:

Example:

`IsAvailableTestSite("https://example.com")`

Here's an example of usage:

C#
~~~ cs
if (NetworkConnection.IsAvailableTestSite("https://example.com")) { // If true
    Console.WriteLine("Connected");
}else{
    Console.WriteLine("Not connected");
}
~~~
VB
~~~ vb
If (NetworkConnection.IsAvailableTestSite("https://example.com")) Then ' If true
    Console.WriteLine("Connected")
Else
    Console.WriteLine("Not connected")
End If
~~~
[Go to top](#networkconnection)
### c. IsAvailableAsync
**This method is available in version 2.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method tries to connect to https://bing.com by default. If it receives a positive status code (like 200), it will return `true`.

You can specify a custom website if you want to:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | url | The URL of the website where the connection is going to be tested |

::: tip Note
Specifying a custom website is available starting with version 4.1+.
:::

It's in:
~~~ cs
LeoCorpLibrary.NetworkConnection.IsAvailableAsync()
~~~
Here's an example of usage:

C#
~~~ cs
async void TestConnection()
{
    bool connectionAvailable = await NetworkConnection.IsAvailableAsync();

    // Or
    bool connectionAvailable2 = await NetworkConnection.IsAvailableAsync("https://leocorporation.dev");
}
~~~
VB
~~~ vb
Private Async Sub TestConnection()
    Dim connectionAvailable As Boolean = Await NetworkConnection.IsAvailableAsync()

    ' Or
    Dim connectionAvailable2 As Boolean = Await NetworkConnection.IsAvailableAsync("https://leocorporation.dev")
End Sub
~~~
[Go to top](#networkconnection)
### d. IsAvailableTestSiteAsync
**This method is available in version 2.1 and higher.**

::: danger Obsolete
This method is obsolete, please use [``IsAvailableAsync()``](#c-isavailableasync) instead.
:::

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method verifies if an Internet connection is available by sending a request on a specified website. Returns a `bool` value.

It's in:
~~~ cs
LeoCorpLibrary.NetworkConnection.IsAvailableTestSiteAsync()
~~~
It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | site | URL of the website where the connection is tested |

Here's an example of usage:

C#
~~~ cs
async void TestConnection()
{
    bool connectionAvailable = await NetworkConnection.IsAvailableTestSiteAsync("https://leocorporation.dev");
}
~~~
VB
~~~ vb
Private Async Sub TestConnection()
    Dim connectionAvailable As Boolean = Await NetworkConnection.IsAvailableTestSiteAsync("https://leocorporation.dev")
End Sub
~~~
[Go to top](#networkconnection)

### e. GetWebPageStatusCode
**This method is available in version 4.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetWebPageStatusCode()` method allows you to get the status code of a specified website. It returns an `int` value.

[Learn more about status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

It's in:
~~~ cs
LeoCorpLibrary.NetworkConnection.GetWebPageStatusCode()
~~~

It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | url | The URL of the website |

Here's an example of usage:

C#
~~~ cs
if (NetworkConnection.GetWebPageStatusCode("https://leocorporation.dev") == 200) 
{
    Console.WriteLine("The website responded: OK");
}
~~~
VB
~~~ vb
If NetworkConnection.GetWebPageStatusCode("https://leocorporation.dev") = 200 Then
    Console.WriteLine("The website responded: OK")
End if
~~~
[Go to top](#networkconnection)

### f. GetWebPageStatusDescription
**This method is available in version 4.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetWebPageStatusDescription()` method allows you to get the status description of a specified website. For instance, if the status code of the website is `418`, the status description associated with this status code will be `"I'm a teapot"`. It returns a `string` value.

[Learn more about status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

It's in:
~~~ cs
LeoCorpLibrary.NetworkConnection.GetWebPageStatusDescription()
~~~

It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | url | The URL of the website |

Here's an example of usage:

C#
~~~ cs
int status = NetworkConnection.GetWebPageStatusCode("https://leocorporation.dev");
string description = NetworkConnection.GetWebPageStatusDescription("https://leocorporation.dev");

Console.WriteLine(status.ToString() + " - " + description);
// Expected output:
// 200 - OK
~~~
VB
~~~ vb
Dim status As Integer = NetworkConnection.GetWebPageStatusCode("https://leocorporation.dev")
Dim description As String = NetworkConnection.GetWebPageStatusDescription("https://leocorporation.dev")

Console.WriteLine(status.ToString() & " - " & description)
' Expected output:
' 200 - OK
~~~
[Go to top](#networkconnection)

### g. GetStatusCodeType
**This method is available in version 4.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetStatusCodeType()` method allows you to get the "type" of a status code. For instance, if the status code is between 100 and 199, the method will return `StatusCodeType.Informational`. It returns a [`StatusCodeType`](#) enum value.

[Learn more about status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

It's in:
~~~ cs
LeoCorpLibrary.NetworkConnection.GetStatusCodeType()
~~~

It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | url | The URL of the website |

Here's an example of usage:

C#
~~~ cs
if (NetworkConnection.GetStatusCodeType("https://leocorporation.dev") == StatusCodeType.Success)
{
    Console.WriteLine("The request was successful!")
}
else if (NetworkConnection.GetStatusCodeType("https://leocorporation.dev" == StatusCodeType.ClientError))
{
    Console.WriteLine("The request was not successful!")
}
~~~
VB
~~~ vb
If NetworkConnection.GetStatusCodeType("https://leocorporation.dev") = StatusCodeType.Success Then
    Console.WriteLine("The request was successful!")
ElseIf NetworkConnection.GetStatusCodeType("https://leocorporation.dev" = StatusCodeType.ClientError) Then
    Console.WriteLine("The request was not successful!")
End If
~~~
[Go to top](#networkconnection)

### h. DownloadFileAsync
**This method is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `DownloadFileAsync()` method allows you to download any files from the Internet using the `HttpClient` class instead of the `WebClient` class. It doesn't return any value (`Task`).

::: tip See also
[WebRequest, WebClient, and ServicePoint are obsolete](https://docs.microsoft.com/en-us/dotnet/core/compatibility/networking/6.0/webrequest-deprecated)
:::

It's in:
~~~ cs
LeoCorpLibrary.NetworkConnection.DownloadFileAsync()
~~~

It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Uri | uri | The URI of the file to download |
| string | filePath | The path where to store the file once downloaded |

Here's an example of usage:

C#
~~~ cs
async void Main()
{
    await NetworkConnection.DownloadFileAsync(new Uri("https://example.com/file.pdf"), @"C:\myFile.pdf");
}
~~~
VB
~~~ vb
Private Async Sub Main()
    Await NetworkConnection.DownloadFileAsync(New Uri("https://example.com/file.pdf"), "C:\myFile.pdf")
End Sub
~~~
[Go to top](#networkconnection)