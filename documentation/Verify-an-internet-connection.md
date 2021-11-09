---
footer: MIT Licensed | Copyright © 2021 Léo Corporation and contributors
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
There is two methods to check if an internet connection is available or not:
1. IsAvailable()
2. IsAvailableTestSite()

They are in:
~~~ cs
LeoCorpLibrary.NetworkConnection.IsAvailable()
~~~
### a. IsAvailable
**This method is avaialable in version 1.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method is trying to connection https://bing.com. If it manage to connect, it means that a connection to internet is available. 

Here's an example of usage:

C#
~~~ cs
if (NetworkConnection.IsAvailable()) { // If true
    Console.WriteLine("Connected");
}else{
    Console.WriteLine("Not connected");
}
~~~
VB
~~~ vb
If (NetworkConnection.IsAvailable()) Then ' If true
    Console.WriteLine("Connected")
Else
    Console.WriteLine("Not connected")
End If
~~~
### b. IsAvailableTestSite
**This method is avaialable in version 1.1 and higher.**
<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>


This method is gonna try to connect to a specific page tha tyou specified. If it manages to connect to the website, it means there is an Internet connection. 

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
**This method is avaialable in version 2.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method verifies if an Internet connection is available by sending a request on a website (https://bing.com). It returns a `bool` value.

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
}
~~~
VB
~~~ vb
Private Async Sub TestConnection()
    Dim connectionAvailable As Boolean = Await NetworkConnection.IsAvailableAsync()
End Sub
~~~
[Go to top](#networkconnection)
### d. IsAvailableTestSiteAsync
**This method is avaialable in version 2.1 and higher.**

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
| Valeur | Paramètre | Description |
| :----: | :-------: | :---------: |
| string | site | URL of the website where the connection is tested |

Here's an example of usage:

C#
~~~ cs
async void TestConnection()
{
    bool connectionAvailable = await NetworkConnection.IsAvaialableTestSiteAsync("https://leocorp.fr");
}
~~~
VB
~~~ vb
Private Async Sub TestConnection()
    Dim connectionAvailable As Boolean = Await NetworkConnection.IsAvailableTestSiteAsync("https://leocorp.fr")
End Sub
~~~
[Go to top](#networkconnection)