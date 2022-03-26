---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Update
## Introduction
When you create a software, you usually want to update it to add new features or correct bugs. Thanks to LeoCorpLibrary, it's very simple to implement an update system.

To use the methods and other features of LeoCorpLibrary, don't forget to add this line of code in your "using" region.

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~

## Functions
### a. IsAvailable
**This function is available in version 1.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsAvailable()` method allows you to check if a updates are available for your software. Returns a ``bool`` value.

~~~ cs
LeoCorpLibrary.Update.IsAvailable()
~~~
::: tip Note
You need to place the namespace `LeoCorpLibrary` before the `Update` class because of a conflict with `Control.Update`.
:::

Here's this method's arguments
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | version | Current version of the software | "1.0.0.0" |
| string | lastVersion | Last version of the software | "1.1.0.0" |

Here's an example of usage that uses the [GetLastVersion](#c-getlastversion) method:

C#

~~~ cs
string lastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt");
if (LeoCorpLibrary.Update.IsAvailable("1.0.0.0", lastVersion)) // If updates are available
{
    MessageBox.Show("Update available");
}
else
{
    MessageBox.Show("No update available");
}
~~~

VB

~~~ vb
Dim lastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt")
If (LeoCorpLibrary.Update.IsAvailable("1.0.0.0", lastVersion)) Then ' If updates are available
    MsgBox("Update available")
Else
    MsgBox("No update available")
End If
~~~
[Go to top](#update)
### b. Check
#### 1. Check
**This function is available in version 1.1 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `Check()` method allows you to check updates for your software. If updates are available, a specified form will show. Same thing if no updates are available.

~~~ cs
LeoCorpLibrary.Update.Check()
~~~
::: tip Note
You need to place the namespace `LeoCorpLibrary` before the `Update` class because of a conflict with `Control.Update`.
:::

Here's this method's arguments
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | version | Current version of the software | "1.0.0.0" |
| string | lastVersion | Last version of the software | "1.1.0.0" |
| Form | availableUpdateForm | Form to show when updates are available | Form1 |
| Form | noUpdateForm | From to show when no updates are available | Form2 |

Here's an example that uses the [GetLastVersion](#c-getlastversion) method:

C#

~~~ cs
string lastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt");
LeoCorpLibrary.Update.Check("1.0.0.0", lastVersion, new MAJ_AV(), new MAJ_UN());
// A window will open depending on the result
~~~

VB

~~~ vb
Dim LastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt")
LeoCorpLibrary.Update.Check("1.0.0.0", LastVersion, new MAJ_AV, new MAJ_UN)
' A window will open depending on the result
~~~

[Go to top](#update)

#### 2. CheckWPF
**This function is available in version 2.2 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `CheckWPF()` method allows you to check updates for your software. If updates are available, a specified window will show. Same thing if no updates are available.

~~~ cs
LeoCorpLibrary.Update.CheckWPF()
~~~
::: tip Note
You need to place the namespace `LeoCorpLibrary` before the `Update` class because of a conflict with `Control.Update`.
:::

Here's this method's arguments
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | version | Current version of the software | "1.0.0.0" |
| string | lastVersion | Last version of the software | "1.1.0.0" |
| Form | availableUpdateWindow | Window to show when updates are available | Form1 |
| Form | noUpdateWindow | Window to show when no updates are available | Form2 |

Here's an example that uses the [GetLastVersion](#c-getlastversion) method:

C#

~~~ cs
string lastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt");
LeoCorpLibrary.Update.Check("1.0.0.0", lastVersion, new MAJ_AV(), new MAJ_UN());
// A window will open depending on the result
~~~

VB

~~~ vb
Dim LastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt")
LeoCorpLibrary.Update.Check("1.0.0.0", LastVersion, new MAJ_AV, new MAJ_UN)
' A window will open depending on the result
~~~

[Go to top](#update)
### c. GetLastVersion
**This function is available in version 1.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

::: danger Obsolete
This method is obsolete, please use [GetLastVersionAsync](#e-getlastversionasync)
:::

The ``GetLastVersion()`` method download a ``string`` from a specific webpage where a ``.txt`` file that contains the last version. Returns a ``string``.

This method has only one argument:

| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | lastVersionFileLink | Link of the file that contains the last version | "[https://example.com/Version.txt](https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt)" |

::: tip Note
You need to place the namespace `LeoCorpLibrary` before the `Update` class because of a conflict with `Control.Update`.
:::

Here's an example of usage:

C#

~~~ cs
string lastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt");
// You can use the lastVersion variable in the IsAvailable() method. 
// or in the Check() method.
~~~

VB

~~~ vb
Dim LastVersion = LeoCorpLibrary.Update.GetLastVersion("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt")
' You can use the lastVersion variable in the IsAvailable() method. 
' or in the Check() method.
~~~
[Go to top](#update)
### d. Install
**This function is available in version 1.1 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `Install()` method allow to install an update for your software. if you want to update your program using this method, we advise you to use this method in another program (Updater). This program needs admin privileges to update the software. You can enable this feature in `app.manifest`. [You can create it in Visual Studio](https://stackoverflow.com/questions/8141795/how-to-add-an-assembly-manifest-to-a-net-executable). Edit this:
~~~ diff
- <requestedExecutionLevel  level="asInvoker" uiAccess="false" />
+ <requestedExecutionLevel  level="requireAdministrator" uiAccess="false" />
~~~

Here's this method's arguments:

| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | filePath| Location of the file | "C:/Programme/Program.exe" |
| string | lastVersionLink | Link of the new file  | "[https://example.com/Program.exe](https://dl.dropboxusercontent.com/s/tlekj6j834tgi3r/GestionPersoX.exe)" |
| bool | fromAppStartupPath | (Optional) Open the file from Application.StartupPath | ``true`` |

::: tip Note
You need to place the namespace `LeoCorpLibrary` before the `Update` class because of a conflict with `Control.Update`.
:::

Example:

C#

~~~ cs
string link = "https://dl.dropboxusercontent.com/s/tlekj6j834tgi3r/GestionPersoX.exe";

LeoCorpLibrary.Update.Install("C:/Programme/Programme.exe", link);
// If the program is in 'C:\Program'

LeoCorpLibrary.Update.Install("/Programme.exe", link, true)
~~~

VB

~~~ vb
Dim link = "https://dl.dropboxusercontent.com/s/tlekj6j834tgi3r/GestionPersoX.exe"

LeoCorpLibrary.Update.Install("C:/Programme/Programme.exe", link)
' If the program is in 'C:\Program'

LeoCorpLibrary.Update.Install("/Programme.exe", link, True)
~~~
[Go to top](#update)
### e. GetLastVersionAsync
**This function is available in version 2.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The ``GetLastVersionAsync()`` method allows you to obtain the last version of the software asynchronously from a `*.txt` file.

It's in

~~~ cs
LeoCorpLibrary.Update.GetLastVersionAsync()
~~~

Here's this method's argument:

| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | lastVersionFileLink | Link of the file where is stored the last version | "[https://example.com/Version.txt](https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt)" |

::: tip Note
You need to place the namespace `LeoCorpLibrary` before the `Update` class because of a conflict with `Control.Update`.
:::

Here's an example of usage:

C#

~~~ cs
async void GetVersion()
{
    string version = await LeoCorpLibrary.Update.GetLastVersionAsync("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt");
}
~~~

VB

~~~ vb
Private Async Sub GetVersion()
    Dim version As String = Await LeoCorpLibrary.Update.GetLastVersionAsync("https://dl.dropboxusercontent.com/s/j3fn78x3lcmowpr/Version.txt")
End Sub
~~~
[Go to top](#update)