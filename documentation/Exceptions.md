---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Exceptions
## Introduction
This page explain a bit more about LeoCorpLibrary's custom exceptions.

Do not forget to put this line of code in your "using" region:

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~
[Go to top](#exceptions)
## ColorsConverter
In this section, you will find all exceptions thrown when a problem occurs
### RGBInvalidValueException

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This exception is thrown when a value `int` for instance, doesn't have a valid RGB format: The number must be between 0 and 255 *included*.

It's in:

~~~ cs
LeoCorpLibrary.Exceptions.RGBInvalidValueException
~~~

Here's an example of usage:

C#

~~~ cs
throw new RGBInvalidValueException("Message here");
~~~

VB

~~~ vb
Throw New RGBInvalidValueException("Message here")
~~~
[Go to top](#exceptions)
### HEXInvalidValueException

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This exception is thrown when a `string` doesn't have a valid HEX format.

It's in:

~~~ cs
LeoCorpLibrary.Exceptions.HEXInvalidValueException
~~~
Here's an example of usage:

C#

~~~ cs
throw new HEXInvalidValueException("Message here");
~~~

VB

~~~ vb
Throw New HEXInvalidValueException("Message here")
~~~
[Go to top](#exceptions)

## GuidGenerator
### InvalidGuidLengthException

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This exception is thrown when the specified length for a Guid is invalid. A valid Guid length is an integer between **1** and **32**. The default length is **32**.

It's in:

~~~ cs
LeoCorpLibrary.Exceptions.InvalidGuidLengthException
~~~

Here's an example of usage:

C#

~~~ cs
throw new InvalidGuidLengthException("Message here");
~~~

VB

~~~ vb
Throw New InvalidGuidLengthException("Message here")
~~~
[Go to top](#exceptions)