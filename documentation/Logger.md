---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Logger
## Introduction
To use the following methods, you need to use the version 3.6 or higher of LeoCorpLibrary, and put this in your "using" region:

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~

## Functions
### a. Log
**This function is available in version 3.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>


It's in:

~~~ cs
LeoCorpLibrary.Logger.Log()
~~~
This method has two variations.

**Variation 1**
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | message | The log message to be written |
| string | filePath | The path to the log file, must contain an extension |

**Variation 2**
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | message | The log message to be written |
| string | filePath | The path to the log file, must contain an extension |
| DateTime | DateTime | The date time of the log |

Here's an example of usage:

C#

~~~ cs
// Variation 1
Logger.Log("This is an example log message", "C:\\log.txt");

// Variation 2
Logger.Log("This is an example log message", "C:\\log.txt", DateTime.Now);
~~~

VB

~~~ vb
' Variation 1
Logger.Log("This is an example log message", "C:\\log.txt")

' Variation 2
Logger.Log("This is an example log message", "C:\\log.txt", DateTime.Now)
~~~
[Go to top](#logger)