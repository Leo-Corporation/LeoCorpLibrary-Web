---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Env
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
# Env
## Methods
## File System
### a. GetFilesCount
**This function is available in version 1.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The ``GetFilesCount()`` method allows you to get the number of files in a specified directory. Returns a ``int`` value.

**Variation 1**
~~~ cs
Env.GetFilesCount(string directory) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | directory | Directory where you want to get the number of files |

**Variation 2**
~~~ cs
Env.GetFilesCount(string directory, bool includeSubDirectories) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | directory | Directory where you want to get the number of files |
| bool | includeSubDirectories | Count files that are located in the subdirectories |

Here's an example of usage:

C#
~~~ cs
// Without subdirectories
int fileNumber = Env.GetFilesCount(@"C:\Users");

// With subdirectories
int fileNumberWithSubDirectories = Env.GetFilesCount(@"C:\Users", true);
~~~
VB
~~~ vb
' Without subdirectories
Dim fileNumber As Integer = Env.GetFilesCount("C:/Users")

' With subdirectories
Dim fileNumberWithSubDirectories As Integer = Env.GetFilesCount("C:/Users", True)
~~~
[Go to top](#env)
### b. GetDirectoriesCount
**This function is available in version 1.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The ``GetDirectoryCount`` method allow you to get the number of directoires in a specified directory. Returns a ``int`` value. It has two variation

**Variation 1**
~~~ cs
Env.GetDirectoriesCount(string directory) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | directory | Directory where you want to get the number of directories |

**Variation 2**
~~~ cs
Env.GetDirectoriesCount(string directory, bool includeSubDirectories) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | directory | Directory where you want to get the number of directories |
| bool | includeSubDirectories | Also include directories in subdirectories |

Here's an example of usage:

C#
~~~ cs
// Without subdirectories
int directoryNumber = Env.GetDirectoriesCount(@"C:\Users");

// With subdirectories
int directoryNumberWithSubDirectories = Env.GetDirectoriesCount(@"C:\Users", true);
~~~
VB
~~~ vb
' Without subdirectories
Dim directoryNumber As Integer = Env.GetDirectoriesCount("C:/Users")

' With subdirectories
Dim directoryNumberWithSubDirectories As Integer = Env.GetDirectoriesCount("C:/Users", True)
~~~
[Go to top](#env)
### c. GetTotalDriveSpace
**This function is available in version 1.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The ``GetTotalDriveSpace`` method allow you to get the total space of a specified volume. Returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.GetTotalDriveSpace()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| string | drive | Directory of the volume | C:\ |
| UnitType | unitType | Type of unit to return | UnitType.Gigabyte

Here's an example of usage:

C#
~~~ cs
double totalSpace = Env.GetTotalDriveSpace(@"C:\", UnitType.Gigabyte);
~~~
VB
~~~ vb
Dim totalSpace As Double = Env.GetTotalDriveSpace("C:/", UnitType.Gigabyte)
~~~
[Go to top](#env)
### d. GetDriveAvailableFreeSpace
**This function is available in version 1.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetDriveAvailableFreeSpace()` method allows you to get the available space of specified volume. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.GetDriveAvailableFreeSpace()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| string | drive | Directory of the volume | C:\ |
| UnitType | unitType | Type of unit to return (MB, GB) | UnitType.Gigabyte|

Here's an example of usage:

C#
~~~ cs
double freeSpace = Env.GetDriveAvailableFreeSpace(@"C:\", UnitType.Gigabyte);
~~~
VB
~~~ vb
Dim freeSpace As Double = Env.GetDriveAvailableFreeSpace("C:/", UnitType.Gigabyte)
~~~
[Go to top](#env)
### e. GetOccupiedDriveSpace
**This function is available in version 1.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetOccupiedDriveSpace()` allows you to get the occupied drive space of specified volume. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.GetOccupiedDriveSpace()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| string | drive | Directory of the volume | C:\ |
| UnitType | unitType | Type of unit to return (MB, GB) | UnitType.Gigabyte |

Here's an example of usage:

C#
~~~ cs
double occupiedSpace = GetOccupiedDriveSpace(@"C:\", UnitType.Gigabyte);
~~~
VB
~~~ vb
Dim occupiedSpace As Double = GetOccupiedDriveSpace("C:/", UnitType.Gigabyte)
~~~
[Go to top](#env)
### f. CountFileCharacters
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

The `CountFileCharacters()` method enables you to get the number of characters in a specified file. It returns a `int` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.CountFileCharacters()
~~~

It has two arguments:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | fileName | The file's location where you wanna count characters |

Here's an example of usage:

C#
~~~ cs
string filePath = @"C:\File.txt";
int characters = Env.CountFileCharacters(filePath);
~~~
VB
~~~ vb
Dim filePath As String = "C:\\File.txt"
Dim characters As Integer = Env.CountFileCharacyers(filePath)
~~~
[Go to top](#env)
### g. CountFileCharactersAsync
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

The `CountFileCharactersAsync()` method enables you to count the number of characters in a file, asynchronously. It returns a `Task<int>` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.CountFileCharactersAsync()
~~~

It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | fileName | The file's location where you wanna count characters |

Here's an example of usage:

C#
~~~ cs
async void CountCharacters()
{
  string filePath = @"C:\File.txt";
  int count = await Env.CountFileCharactersAsync(filePath);
}
~~~
VB
~~~ vb
Private Async Sub CountCharacters()
    Dim filePath As String = "C:\\File.txt"
    Dim count As Integer = Await Env.CountFileCharactersAsync(filePath)
End Sub
~~~
[Go to top](#env)

### h. IsDirectoryHasPermission
**This function is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsDirectoryHasPermission()` method allows you to see if your program has permissions to write files/directories to a specified directory. It returns a `bool` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.IsDirectoryHasPermission()
~~~

It has one argument:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | filePath | The path to the directory |

Here's an example of usage:

C#
~~~ cs
if (Env.IsDirectoryHasPermission("C:/Windows"))
{
    File.Create("C:/Windows/file.txt");
}
~~~
VB
~~~ vb
If Env.IsDirectoryHasPermission("C:/Windows") Then
    File.Create("C:/Windows/file.txt")
End If
~~~
[Go to top](#env)

## System Environment
### a. GetWindowsVersion
**This function is available in version 1.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetWindowsVersion()` enables you to get the Windows version that the user is running. Returns a `WindowsVersion` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.GetWindowsVersion()
~~~
::: danger Warning
This method works only if you specify in the Application Manifest, in the compatibilty section, that Windows 8, 8.1 and 10/11 are compatible with the software. Else, it will return ``Windows8``.
:::

~~~ xml
<compatibility xmlns="urn:schemas-microsoft-com:compatibility.v1">
    <application>
      <!-- Windows Vista -->
      <!--<supportedOS Id="{e2011457-1546-43c5-a5fe-008deee3d3f0}" />-->

      <!-- Windows 7 -->
      <supportedOS Id="{35138b9a-5d96-4fbd-8e2d-a2440225f93a}" />

      <!-- Windows 8 -->
      <supportedOS Id="{4a2f28e3-53b9-4441-ba9c-d69d4a4a6e38}" />

      <!-- Windows 8.1 -->
      <supportedOS Id="{1f676c76-80e1-4239-95bb-83d0f6d0da78}" />

      <!-- Windows 10 -->
      <supportedOS Id="{8e0f7a12-bfb3-4fe8-b9a5-48fd50a15a9a}" />

    </application>
  </compatibility>
~~~
::: tip Note
This file is an example. You can create this file by right-clicking on the project, then "Add", "New element", then "Application manifest" and "Add".
:::

Here's an example of usage:

C#
~~~ cs
WindowsVersion winver = Env.GetWindowsVersion(); // Obtenir la version
/*
Can return:
WindowsVersion.Windows7
WindowsVersion.Windows8
WindowsVersion.Windows81
WindowsVersion.Windows10
WindowsVersion.Windows11 (available in version 4.1+)
/*
~~~
VB
~~~ vb
Dim winver As WindowsVersion = Env.GetWindowsVersion() ' Obtenir la version
' Can return:
' WindowsVersion.Windows7
' WindowsVersion.Windows8
' WindowsVersion.Windows81
' WindowsVersion.Windows10
' WindowsVersion.Windows11 (available in version 4.1+)
~~~
[Go to top](#env)
### b. ExecuteAsAdmin
**This function is available in version 1.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `ExecuteAsAdmin()` allows you to execute a program in admin mode on Windows.

It's in:
~~~ cs
LeoCorpLibrary.Env.ExecuteAsAdmin()
~~~
This method has two variation:

**Variation 1**
~~~ cs
Env.ExecuteAsAdmin(Process process) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Process | process | Process with `StartInfo.FileName` indicated |

**Variation 2**
~~~ cs
Env.ExecuteAsAdmin(string filename) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | filename | The location of the sofware to launch in admin mode |

Here's an example of usage:

C#
~~~ cs
// Variation 1
Process process = new Process();
process.StartInfo.FileName = @"C:\Windows\System32\cmd.exe";
Env.ExecuteAsAdmin(process);

// Variation 2
Env.ExecuteAsAdmin(@"C:\Windows\System32\cmd.exe");
~~~
VB
~~~ vb
' Variation 1
Dim process As Process = New Process()
process.StartInfo.FileName = "C:/Windows/System32/cmd.exe"
Env.ExecuteAsAdmin(process)

' Variation 2
Env.ExecuteAsAdmin("C:/Windows/System32/cmd.exe")
~~~
[Go to top](#env)

### c. GetUnixTime
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

This method allows you to get the curent UnixTime or the UnixTime of a specific date/time. Returns a `int` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.GetUnixTime()
~~~

It has two variation:

**Variation 1**

The variation does not accept any arguments.

**Variation 2**

This variation has an argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| DateTime | date | The specific date to get the UnixTime of |

Here's an example of usage:

C#
~~~ cs
// Variation 1
int curentUnixTime = Env.GetUnixTime();

// Variation 2
DateTime dateTime = new DateTime(1970, 1, 1);
int unixTime = Env.GetUnixTime(dateTime);
~~~
VB
~~~ vb
' Variation 1
Dim curentUnixTime As Integer = Env.GetUnixTime()

' Variation 2
Dim dateTime As DateTime = New DateTime(1970, 1, 1)
Dim unixTime As Integer = Env.GetUnixTime(dateTime)
~~~
[Go to top](#env)
### d. GetAppDataPath
**This function is available in version 2.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to get the user's `%APPDATA%` path. Returns a `string` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.GetAppDataPath()
~~~

It has no arguments.

Here's an example of usage:

C#
~~~ cs
string appDataPath = Env.GetAppDataPath();
~~~
VB
~~~ vb
dim appDataPath As String = Env.GetAppDataPath()
~~~
[Go to top](#env)
### e. GetMouseCursorPosition
**This function is available in version 3.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

This method allows you to get the current position of the mouse cursor on the screen. It returns a `Point` value (`System.Drawing`).

It's in:
~~~ cs
LeoCorpLibrary.Env.GetMouseCursorPosition()
~~~

It has no arguments.

::: tip Note
This method is using Windows Forms features, so use this method in Windows Forms projects only. If your project is using WPF, check [GetMouseCursorPositionWPF()](#f-getmousecursorpositionwpf).
:::

Here's an example of usage:

C#
~~~ cs
Point p = Env.GetMouseCursorPosition();
MessageBox.Show($"Mouse position: X = {p.X}; Y = {p.Y}");
~~~
VB
~~~ cs
Dim p As Point = Env.GetMouseCursorPosition()
MessageBox.Show("Mouse position: X = " + p.X.ToString() + "; Y = " + p.Y.ToString())
~~~
[Go to top](#env)
### f. GetMouseCursorPositionWPF
**This function is available in version 3.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |


</details>

This method allows you to get the current position of the mouse cursor on the screen. It returns a `Point` value (`System.Windows`).

It's in:
~~~ cs
LeoCorpLibrary.Env.GetMouseCursorPositionWPF()
~~~

It has no arguments.

Here's an example of usage:

C#
~~~ cs
Point p = Env.GetMouseCursorPosition();
MessageBox.Show($"Mouse position: X = {p.X}; Y = {p.Y}");
~~~
VB
~~~ cs
Dim p As Point = Env.GetMouseCursorPosition()
MessageBox.Show("Mouse position: X = " + p.X.ToString() + "; Y = " + p.Y.ToString())
~~~
[Go to top](#env)
### g. UnixTimeToDateTime
**This function is available in version 3.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to convert UnixTime (`int`) to a `DateTime` object. Returns a `DateTime` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.UnixTimeToDateTime()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | unixTime | The UnixTime to convert |

Here's an example of usage:

C#
~~~ cs
int unixTime = 1615538407;
DateTime date = Env.UnixTimeToDateTime(unixTime); // 12/03/2021 @ 09:40:07
~~~
VB
~~~ vb
Dim unixTime As Integer = 1615538407
Dim date As DateTime = Env.UnixTimeToDateTime(unixTime) ' 12/03/2021 @ 09:40:07
~~~
[Go to top](#env)
### h. IsProcessRunning
**This function is available in version 3.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to check if a specific process is currently running. Returns a `bool` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.IsProcessRunning()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | processName | The process name to find |

Here's an example of usage:

C#
~~~ cs
if (IsProcessRunning("cmd.exe"))
{
    MessageBox.Show("You have a command prompt running.")
}
~~~
VB
~~~ vb
If IsProcessRunning("cmd.exe") Then
    MessageBox.Show("You have a command prompt running.")
End If
~~~
[Go to top](#env)

### i. LaunchUWPApp
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |


</details>

This method allows you to launch an UWP app from its ``PackageFamilyName`` and its ``Application Id``. You can find these informations by running in **Windows** Powershell (admin) the following command:

~~~ powershell
Get-AppxPackage | Select PackageFamilyName, InstallLocation
~~~
You can find the Application Id in the AppxManifest.xml file in
~~~
InstallLocation\AppxManifest.xml
~~~
This method isn't available in LeoCorpLibrary.Core. 

It's in:
~~~ cs
LeoCorpLibrary.Env.LaunchUWPApp()
~~~

It has two arguments:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | packageFamilyName | The PackageFamilyName property |
| string | applicationID | The Application Id property in the UWP AppxManifest.xml file |

Here's an example of usage:

C#
~~~ cs
// Launch Minecraft UWP
Env.LaunchUWPApp("Microsoft.MinecraftUWP_8wekyb3d8bbwe", "App"); // Launch
~~~
VB
~~~ vb
' Launch Minecraft UWP
Env.LaunchUWPApp("Microsoft.MinecraftUWP_8wekyb3d8bbwe", "App") ' Launch
~~~

[Go to top](#env)
## Properties
## File System
### a. SystemDrive
**This property is available in version 3.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `SystemDrive` property allows you to get the `DriveInfo` of the system drive. 

::: warning
This property only works on Windows!
:::


It's in:
~~~ cs
LeoCorpLibrary.Env.SystemDrive
~~~
Here's an example of usage:

C#
~~~ cs
DriveInfo sysDrive = Env.SystemDrive; // Get system drive
~~~
VB
~~~ vb
Dim sysDrive As DriveInfo = Env.SystemDrive ' Get system drive
~~~
[Go to top](#env)
### b. AppDataPath
**This property is available in version 3.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `AppDataPath` property allows you to get the `%APPDATA%` directory path.

It's in:
~~~ cs
LeoCorpLibrary.Env.AppDataPath
~~~
Here's an example of usage:

C#
~~~ cs
string appDataPath = Env.AppDataPath; // Get %APPDATA%
~~~
VB
~~~ vb
Dim appDataPath As String = Env.AppDataPath ' Get %APPDATA%
~~~
[Go to top](#env)
## System Environment
### a. CurrentOperatingSystem
**This property is available in version 3.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ❌ |


</details>

The `CurrentOperatingSystem` property allows you to get the current Operating system. It returns a `OperatingSystems` enum:

- Windows
- macOS
- Linux
- Unknown

It's in:
~~~ cs
LeoCorpLibrary.Env.CurrentOperatingSystem
~~~
Here's an example of usage:

C#
~~~ cs
Console.WriteLine($"The current OS is {Env.CurrentOperatingSystem.ToString()}");
~~~
VB
~~~ vb
Console.WriteLine("The current OS is" + Env.CurrentOperatingSystem.ToString())
~~~
[Go to top](#env)
### b. UnixTime
**This property is available in version 3.1 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `UnixTime` property allows you to get the current Unix time.

It's in:
~~~ cs
LeoCorpLibrary.Env.UnixTime
~~~
Here's an example of usage:

C#
~~~ cs
while (true)
{
    Console.WriteLine(Env.UnixTime.ToString());
    Thread.Sleep(1000);
}
~~~
VB
~~~ vb
While True
    Console.WriteLine(Env.UnixTime.ToString())
    Thread.Sleep(1000)
End While
~~~
[Go to top](#env)

### c. SystemTheme
**This property is available in version 4.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |


</details>

The `SystemTheme` property allows you to get the current `SystemThemes` of the operating system. Works only on Windows. It returns a `SystemThemes` enum.

It's in:
~~~ cs
LeoCorpLibrary.Env.SystemTheme
~~~

Here's an example of usage:

C#
~~~ cs
// Running on Windows 11, with dark theme enabled.

Console.WriteLine(Env.SystemTheme.ToString());
// Output:
// Dark
~~~
VB
~~~ vb
' Running on Windows 11, with dark theme enabled.

Console.WriteLine(Env.SystemTheme.ToString())
' Output:
' Dark
~~~
[Go to top](#env)

### d. IsDarkThemeAvailable
**This property is available in version 4.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |


</details>

The `IsDarkThemeAvailable` property allows you to get if dark theme is supported on the current operating system. It returns a `bool` value.

It's in:
~~~ cs
LeoCorpLibrary.Env.IsDarkThemeAvailable
~~~

Here's an example of usage:

C#
~~~ cs
// Running on Windows 7
Console.WriteLine(Env.IsDarkThemeAvailable.ToString());

// Output:
// False
~~~
VB
~~~ vb
' Running on Windows 7
Console.WriteLine(Env.IsDarkThemeAvailable.ToString())

' Output:
' False
~~~
[Go to top](#env)