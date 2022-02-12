---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# GuidGeneratorParameters
## Introduction
To use this class in your project you must include this line of code in your "using" region:

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~

::: tip Note
This class doesn't have any methods.
:::

**This class is available in version 2.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

## Properties
### Lenght

| Value | `int` |
| :---: | :----: |

The length of the generated Guid. Example:

~~~ txt
If Lenght = 15:
0d7d75295da745f
~~~

[Go to top](#guidgeneratorparameters)

### UseUpperCaseOnly

| Value | `bool` |
| :---: | :----: |

If set to `true`, the generated Guid will be only in upper case. If set to `false`, the Guid will be only in lower case. Example:
~~~ txt
If true:
EF634CE7-CF29-4190-8185-F6A2BE71798A

If false:
6eeb2cfc-ef07-47e6-9813-2ea9ce22fb4a
~~~
[Go to top](#guidgeneratorparameters)

### WithBraces

| Value | `bool` |
| :---: | :----: |

If set to `true`, the generated Guid will have braces, example:
~~~ txt
{9be1663c-0be6-4ae5-a34e-b877dfb00272}
~~~
[Go to top](#guidgeneratorparameters)

### WithHyphens

| Value | `bool` |
| :---: | :----: |

If set to `true`, the generated Guid will have hyphens. If set to false, the generated Guid won't have any hyphens. Example:
~~~ txt
If true
379fd196-8896-4120-9055-191cd4314827

If false
0d7d75295da745f1b25d98ee0c862a10
~~~
[Go to top](#guidgeneratorparameters)