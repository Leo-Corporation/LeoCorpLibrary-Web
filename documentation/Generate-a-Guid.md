---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# GuidGenerator
## Introduction
To generate a password using LeoCorpLibrary, you must include this line of code in your "using" region:

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~
## Functions

### a. Generate
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

The ``Generate()`` method allows you to generate a Guid. It returns a `string` value.

It's in:

~~~ cs
LeoCorpLibrary.GuidGenerator.Generate()
~~~
It has in total 5 variation.


#### Generate()
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

This first variation doesn't take any argument, it returns a ``string`` of the generated Guid.

Here's an example of usage:

C#

~~~ cs
string guid = GuidGenerator.Generate();
~~~

VB

~~~ vb
Dim guid As String = GuidGenerator.Generate()
~~~

[Go to top](#guidgenerator)


#### Generate(length)
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

Generates a Guid of a specific length. Returns a `string` value.


~~~ cs
GuidGenerator(int length) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | length | Length of the Guid to generate |

The `length` value must be higher than 0 and lower or equal to 32. If not, a [`InvalidGuidLengthException`](/Exceptions.html.html#invalidguidlenghtexception) will be thrown.

Here's an example of usage:

C#

~~~ cs
string guid = GuidGenerator.Generate(20);
~~~

VB

~~~ vb
Dim guid As String = GuidGenerator.Generate(20)
~~~

[Go to top](#guidgenerator)


#### Generate(fromString)
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

Generate a Guid from a string. Returns a `string` value.


~~~ cs
GuidGenerator(string fromString) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | fromString | String that will generate the Guid from |

If `fromString` is null or empty, the [`ArgumentNullException`](https://docs.microsoft.com/fr-fr/dotnet/api/system.argumentnullexception) will be thrown.

Here's an example of usage:

C#

~~~ cs
string guid = GuidGenerator.Generate("blabla");
~~~

VB

~~~ vb
Dim guid As String = GuidGenerator.Generate("blabla")
~~~

[Go to top](#guidgenerator)


#### Generate(guidGeneratorParameters)
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

Generates a Guid from specified [``GuidGeneratorParameters``](/GuidGeneratorParameters). Returns a `string` value.


~~~ cs
GuidGenerator(GuidGeneratorParameters guidGeneratorParameters) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| GuidGeneratorParameters | guidGeneratorParameters | Parameters that will impact the generated Guid |

The `GuidGeneratorParameters.Length` value must be higher than 0 and lower or equal to 32. If not, a [`InvalidGuidLengthException`](/Exceptions.html#invalidguidlengthexception) will be thrown.

Here's an example of usage:

C#

~~~ cs
string guid = GuidGenerator.Generate(new GuidGeneratorParameters 
{
    WithHyphens = true,
    WithBraces = true
});
~~~

VB

~~~ vb
Dim guidParams As New GuidGeneratorParameters()

guidParams.WithHyphens = True
guidParams.WithBraces = True

Dim guid As String = GuidGenerator.Generate(guidParams)
~~~

[Go to top](#guidgenerator)


#### Generate(fromString, guidGeneratorParameters)
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

Generates a Guid from specified [``GuidGeneratorParameters``](/GuidGeneratorParameters) and a specified `string`. Returns a `string` value.


~~~ cs
GuidGenerator(string fromString, GuidGeneratorParameters guidGeneratorParameters) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | fromString | String that will generate the Guid from |
| GuidGeneratorParameters | guidGeneratorParameters | Parameters that will impact the generated Guid |

The `GuidGeneratorParameters.Length` value must be higher than 0 and lower or equal to 32. If not, a [`InvalidGuidLengthException`](/Exceptions.html#invalidguidlengthexception) will be thrown.
If `fromString` is null or empty, the [`ArgumentNullException`](https://docs.microsoft.com/fr-fr/dotnet/api/system.argumentnullexception) will be thrown.

Here's an example of usage:

C#

~~~ cs
string guid = GuidGenerator.Generate("blabla", new GuidGeneratorParameters 
{
    WithHyphens = true,
    WithBraces = true
});
~~~

VB

~~~ vb
Dim guidParams As New GuidGeneratorParameters()

guidParams.WithHyphens = True
guidParams.WithBraces = True

Dim guid As String = GuidGenerator.Generate("blabla", guidParams)
~~~

[Go to top](#guidgenerator)