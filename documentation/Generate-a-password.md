---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Password
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
To generate a password, you need to call the ``Generate()`` method, in:
``` cs
LeoCorpLibrary.Password.Generate()
```
It returns a `string` value. This method has two variations.


#### Generate(length, chars, separator)
**This method is available in version 1.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | length | Length of the password | 10
| string | chars | Characters that are used to generate the password | "a,b,c,d"
| string | separator | Separator | ","

Here's an example of usage:

C#

~~~ cs
Console.WriteLine(Password.Generate(10, "a,b,c,d", ","));
~~~

VB

~~~ vb
Console.WriteLine(Password.Generate(10, "a,b,c,d", ","))
~~~

[Go to top](#password)

#### Generate(length, passwordPresets)
**This method is available in version 2.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | length | Length of the password | 10
| PasswordPresets | passwordPresets | The preset used for the password generation | PasswordPresets.Simple

Here's an example of usage:

C#

~~~ cs
Console.WriteLine(Password.Generate(10, PasswordPresets.Simple));
~~~

VB

~~~ vb
Console.WriteLine(Password.Generate(10, PasswordPresets.Simple))
~~~

[Go to top](#password)

### b. GenerateAsync
To generate a password, you need to call the ``GenerateAsync()`` method, in:
``` cs
LeoCorpLibrary.Password.GenerateAsync()
```
It returns a `Task<string>` value. This method has two variations.


#### GenerateAsync(length, chars, separator)
**This method is available in version 2.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:

| Type | Parameter | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | length | Length of the password | 10
| string | chars | Characters that are used to generate the password | "a,b,c,d"
| string | separator | Separator | ","

Here's an example of usage:

C#

~~~ cs
Console.WriteLine(await Password.GenerateAsync(10, "a,b,c,d", ","));
~~~

VB

~~~ vb
Console.WriteLine(Await Password.GenerateAsync(10, "a,b,c,d", ","))
~~~

[Go to top](#password)

#### GenerateAsync(length, passwordPresets)
**This method is available in version 2.4 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:

| Type | Parameter | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | length | Length of the password | 10
| PasswordPresets | passwordPresets | The preset used for the password generation | PasswordPresets.Simple

Here's an example of usage:

C#

~~~ cs
Console.WriteLine(await Password.GenerateAsync(10, PasswordPresets.Simple));
~~~

VB

~~~ vb
Console.WriteLine(Await Password.GenerateAsync(10, PasswordPresets.Simple))
~~~

[Go to top](#password)


### c. GenerateAmount
To generate multiple passwords you need to call this method, in.
``` cs
LeoCorpLibrary.Password.GenerateAmount()
```
It returns a `List<string>` value. This method has two variations.


#### GenerateAmount(amount, length, chars, separator)
**This method is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | amount | Number of passwords to generate | 20
| int | length | Length of the password | 10
| string | chars | Characters that are used to generate the password | "a,b,c,d"
| string | separator | Separator | ","

Here's an example of usage:

C#

~~~ cs
List<string> passwords = Password.GenerateAmount(20, 10, "a,b,c,d", ",");

for (int i = 0; i < passwords.Count; i++) // For each password
{
    Console.WriteLine(passwords[i]); // Print password in console
}
~~~

VB

~~~ vb
Dim passwords As List(Of String) = Password.GenerateAmount(20, 10, "a,b,c,d", ",")

For i As Integer = 0 To passwords.Count - 1 ' For each password
    Console.WriteLine(passwords(i)) ' Print password in console
Next
~~~

[Go to top](#password)

#### GenerateAmount(amount, length, passwordPresets)
**This method is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:
| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | amount | Number of passwords to generate | 20
| int | length | Length of the password | 10
| PasswordPresets | passwordPresets | The preset used for the password generation | PasswordPresets.Simple

Here's an example of usage:

C#

~~~ cs
List<string> passwords = Password.GenerateAmount(20, 10, PasswordPresets.Complex);

for (int i = 0; i < passwords.Count; i++) // For each password
{
    Console.WriteLine(passwords[i]); // Print password in console
}
~~~

VB

~~~ vb
Dim passwords As List(Of String) = Password.GenerateAmount(20, 10, PasswordPresets.Complex)

For i As Integer = 0 To passwords.Count - 1 ' For each password
    Console.WriteLine(passwords(i)) ' Print password in console
Next
~~~

[Go to top](#password)


### d. GenerateAmountAsync
To generate multiple passwords asynchronously you need to call this method, in.
``` cs
LeoCorpLibrary.Password.GenerateAmountAsync()
```
It returns a `Task<List<string>>` value. This method has two variations.


#### GenerateAmountAsync(amount, length, chars, separator)
**This method is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:

| Type | Parameter | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | amount | Number of passwords to generate | 20
| int | length | Length of the password | 10
| string | chars | Characters that are used to generate the password | "a,b,c,d"
| string | separator | Separator | ","

Here's an example of usage:

C#

~~~ cs
List<string> passwords = await Password.GenerateAmountAsync(20, 10, "a,b,c,d", ",");

for (int i = 0; i < passwords.Count; i++) // For each password
{
    Console.WriteLine(passwords[i]); // Print password in console
}
~~~

VB

~~~ vb
Dim passwords As List(Of String) = Await Password.GenerateAmountAsync(20, 10, "a,b,c,d", ",")

For i As Integer = 0 To passwords.Count - 1 ' For each password
     Console.WriteLine(passwords(i)) ' Print password in console
Next
~~~

[Go to top](#password)

#### GenerateAmountAsync(amount, length, passwordPresets)
**This method is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method has a few parameters:

| Type | Parameter | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| int | amount | Number of passwords to generate | 20
| int | length | Length of the password | 10
| PasswordPresets | passwordPresets | The preset used for the password generation | PasswordPresets.Simple

Here's an example of usage:

C#

~~~ cs
List<string> passwords = await Password.GenerateAmountAsync(20, 10, PasswordPresets.Complex);

for (int i = 0; i < passwords.Count; i++) // For each password
{
    Console.WriteLine(passwords[i]); // Print password in console
}
~~~

VB

~~~ vb
Dim passwords As List(Of String) = Await Password.GenerateAmountAsync(20, 10, PasswordPresets.Complex)

For i As Integer = 0 To passwords.Count - 1 ' For each password
    Console.WriteLine(passwords(i)) ' Print password in console
Next
~~~

[Go to top](#password)


### e. GetPasswordStrength
**This method is available in version 3.8 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetPasswordStrength()` method allows you to evaluate a password's strength using [Passliss](https://github.com/Leo-Corporation/Passliss)' standards. It returns a [`PasswordStrength`](#a-passwordstrength) enum.

It's in:

~~~ cs
LeoCorpLibrary.Password.GetPasswordStrength() {...}
~~~

It has one argument:

| Type | Argument | Description | Example |
| :--: | :-------: | :---------: | :-----: |
| string | password | The password to test | "Ftel_UGbn542"

Here's an example of usage:

C#

~~~ cs
string[] passwords =
{
	"Ifhi2ztbg1",
	"pars132",
	"Lo8_n0D",
	"uifVyuiVVH_çVIvc",
	"gygYUI4"
};
		
List<PasswordStrength> forces = new List<PasswordStrength>();
		
for (int i = 0; i < passwords.Length; i++)
{
	forces.Add(Password.GetPasswordStrength(passwords[i]));
}

/* 
forces' content:
Medium
Low
Good
VeryGood
Medium
*/
~~~

VB

~~~ vb
Dim passwords As String() = {"Ifhi2ztbg1", "pars132", "Lo8_n0D", "uifVyuiVVH_çVIvc", "gygYUI4"}

Dim forces As List(Of PasswordStrength) = New List(Of PasswordStrength)()

For i As Integer = 0 To passwords.Length - 1
    forces.Add(Password.GetPasswordStrength(passwords(i)))
Next
' forces' content:
' Medium
' Low
' Good
' VeryGood
' Medium
~~~

[Go to top](#password)

## Enumerations

### a. PasswordStrength
**This enumeration is available in version 3.8 and higher.**

The `PasswordStrength` enumeration can be equal to:
- Low
- Medium
- Good
- VeryGood


[Go to top](#password)