---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Enums
## Introduction
This page is about enumerations included in LeoCorpLibrary.
## The `Enums` namespace
Starting with version 4.4, all enums of LeoCorpLibrary have been moved to their own dedicated namespace. If you are upgrading from an older version of LeoCorpLibrary, you'll need to include the `LeoCorpLibrary.Enums` or `LeoCorpLibrary.Core.Enums` namespace if you want to use any enumerations:

C#
~~~ cs
using LeoCorpLibrary.Enums;
~~~
VB
~~~ vb
Imports LeoCorpLibrary.Enums
~~~

::: tip Note
In this documentation, most of the enumerations are available since version 4.4, in fact, most of these enumerations are available from the first versions of LeoCorpLibrary.
:::

### a. WindowsVersion
**This enumeration is available in version 1.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The WindowsVersion enumeration is used to represent all major versions of Windows. It has the following values:

- `Windows7`
- `Windows8`
- `Windows81`
- `Windows10`
- `Windows11`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `WindowsVersion.Windows7` | Microsoft Windows NT 6.1 |
| `WindowsVersion.Windows8` | Microsoft Windows NT 6.2 |
| `WindowsVersion.Windows81` | Microsoft Windows NT 6.3 |
| `WindowsVersion.Windows10` | Microsoft Windows NT 10.0 |
| `WindowsVersion.Windows11` | Microsoft Windows NT 10.0.22000 and higher |

[Go to top](#enums)

### b. TimeUnits
**This enumeration is available in version 4.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `TimeUnits` enumeration is used to represent different time units. It has the following values:

- `Milliseconds`
- `Seconds`
- `Minutes`
- `Hours`
- `Days`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `TimeUnits.Milliseconds` | Represent the Milliseconds time unit |
| `TimeUnits.Seconds` | Represent the Seconds time unit |
| `TimeUnits.Minutes` | Represent the Minutes time unit |
| `TimeUnits.Hours` | Represent the Hours time unit |
| `TimeUnits.Days` | Represent the Days time unit |

[Go to top](#enums)

### c. SystemThemes
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `SystemThemes` enumeration is used to represent different Windows themes. It has the following values:

- `Dark`
- `Light`
- `Unknown`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `SystemThemes.Dark` | The Windows theme is dark |
| `SystemThemes.Light` | The Windows theme is light |
| `SystemThemes.Unknown` | The theme of the current operating system cannot be determined |

[Go to top](#enums)

### d. OperatingSystems
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `OperatingSystems` enumeration is used to represent different operating systems. It has the following values:

- `Windows`
- `macOS`
- `Linux`
- `Unknown`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `OperatingSystems.Windows` | The Windows operating system |
| `OperatingSystems.macOS` | The macOS operating system |
| `OperatingSystems.Linux` | The Linux operating system/Linux based distribution |
| `OperatingSystems.Unknown` | The current operating system cannot be determined |

[Go to top](#enums)

### e. UnitType
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `UnitTime` enumeration is used to represent different storage units (kb, mb, gb...). It has the following values:

- `Byte`
- `Kilobyte`
- `Megabyte`
- `Gigabyte`
- `Terabyte`
- `Petabyte`

[Go to top](#enums)

### f. ControlAlignment
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `ControlAlignment` enumeration is used to represent different `System.Windows.Forms.Control` alignement. It has the following values:

- `Horizontal`
- `Vertical`
- `Both`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `ControlAlignment.Horizontal` | The control will be aligned horizontally |
| `ControlAlignment.Vertical` | The control will be aligned vertically |
| `ControlAlignment.Both` | The control will be aligned horizontally and vertically |

::: tip Note
This enumeration is made for Windows Forms project.
:::

[Go to top](#enums)

### g. StatusCodeType
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `StatusCodeType` enumeration is used to represent different status codes when making a request to a website. It has the following values:

- `Informational`
- `Success`
- `Redirection`
- `ClientError`
- `ServerError`

[Learn more about status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `StatusCodeType.Informational` | The status code is similar to `1xx`. |
| `StatusCodeType.Success` | The status code is similar to `2xx`. |
| `StatusCodeType.Redirection` | The status code is similar to `3xx`. |
| `StatusCodeType.ClientError` | The status code is similar to `4xx`. |
| `StatusCodeType.ServerError` | The status code is similar to `5xx`. |

Here's an example of usage:

C#
~~~ cs
StatusCodeType statusType = NetworkConnection.GetStatusCodeType("https://leocorporation.dev");

switch (statusType)
{
    case StatusCodeType.Informational:
        Console.WriteLine("Information message.");
        break;
    case StatusCodeType.Success:
        Console.WriteLine("Success message.");
        break;
    case StatusCodeType.Redirection:
        Console.WriteLine("Redirection message.");
        break;
    case StatusCodeType.ClientError:
        Console.WriteLine("Client error message.");
        break;
    case StatusCodeType.ServerError:
        Console.WriteLine("Server error message.");
        break;
}
~~~

VB
~~~ vb
Dim statusType As StatusCodeType = NetworkConnection.GetStatusCodeType("https://leocorporation.dev")

Select Case statusType
    Case StatusCodeType.Informational
        Console.WriteLine("Information message.")
    Case StatusCodeType.Success
        Console.WriteLine("Success message.")
    Case StatusCodeType.Redirection
        Console.WriteLine("Redirection message.")
    Case StatusCodeType.ClientError
        Console.WriteLine("Client error message.")
    Case StatusCodeType.ServerError
        Console.WriteLine("Server error message.")
End Select
~~~

[Go to top](#enums)

### h. PasswordPresets
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `PasswordPresets` enumeration is used to represent the complexity of a password. It has the following values:

- `Simple`
- `Complex`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `PasswordPresets.Simple` | This preset will generate a password with simple caracters (abc, 123). |
| `PasswordPresets.Complex` | This preset will generate a strong password with unusual, hard and complex caracters (abc, 123, àçé, {[@) |

[Go to top](#enums)

### i. PasswordStrength
**This enumeration is available in version 4.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `PasswordStrength` enumeration is used to evaluate how strong a password is. It has the following values:

- `VeryGood`
- `Good`
- `Medium`
- `Low`
- `Unknown`

| Enumeration value | Meaning |
| :---------------: | :-----: |
| `PasswordStrength.VeryGood` | The password is uncommon, strong |
| `PasswordStrength.Good` | The password is complex, could be stronger |
| `PasswordStrength.Medium` | The password could be more complex. |
| `PasswordStrength.Low` | The password is too easy, not strong, you shouldn't use it |
| `PasswordStrength.Unknown` | Cannot determine the strength of the  password |

[Go to top](#enums)