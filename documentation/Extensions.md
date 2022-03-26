---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Extensions
## Introduction
Since the version 2.5.0.2020 of LeoCorpLibrary, a new namespace has been added: `LeoCorpLibrary.Extensions`. In this namespace, there is extensions for common types such as `string`, ``int``, ``arrays``...

If you wanna use those extensions, import the namespace:

C#

~~~ cs
using LeoCorpLibrary.Extensions;
~~~

VB

~~~ vb
Import LeoCorpLibrary.Extensions
~~~

## String Extensions
### a. CountWords
**This function is available in version 2.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `CountWords()` method allows you to get the number of words in a `string`. Returns an ``int`` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.StringExtensions.CountWords()
~~~

This method has two variation:

**Variation 1**

This first variation doesn't take any argument.

**Variation 2**
This method has one argument:
 

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string[] | wordSeparator | The separator of the words. Example: ``", ; : ! ? .  "`` |

Here's an example of usage:

C#

~~~ cs
// Variation 1
int numberOfWords = "Hello, this is a test sentence!".CountWords();

// Variation 2
string[] wordSeparator = { " ", ",", ":", "!", "?", ";", "." };
int numberOfWords = "Hello, this is a test sentence!".CountWords(wordSeparator);
~~~

VB

~~~ vb
' Variation 1
Dim numberOfWords As Integer = "Hello, this is a test sentence!".CountWords()

' Variation 2
Dim wordSeparator As String() = {" ", ",", ":", "!", "?", ";", "."}
Dim numberOfWords As Integer = "Hello, this is a test sentence!".CountWords(wordSeparator)
~~~
[Go to top](#extensions)
### b. Encrypt
**This function is available in version 2.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `Encrypt()` method allows you to encrypt a `string`. It returns a `string` value.

This method has a few arguments:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | source | The string to encrypt |
| string | key | The key that will be used to encrypt and decrypt the string |

Here's an example of usage:

C#

~~~ cs
string s = "Hello!";
string encrypted = LeoCorpLibrary.Crypt.Encrypt(s, "ABC123");

// Output: jqPW4uxt8hk=
~~~

VB

~~~ vb
Dim s As String = "Hello!"
Dim encrypted As String = LeoCorpLibrary.Crypt.Encrypt(s, "ABC123")

' Output: jqPW4uxt8hk=
~~~
[Go to top](#extensions)
### c. Decrypt
**This function is available in version 2.6 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `Decrypt()` method allows you to decrypt an encrypted string. It returns a `string` value.

This method has a few arguments:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | encrypt | The encrypted string |
| string | key | The key that will be used to encrypt and decrypt the string |

Here's an example of usage:

C#

~~~ cs
string encrypted = "jqPW4uxt8hk=";
string decrypted = LeoCorpLibrary.Crypt.Decrypt(encrypted, "ABC123");

// Output: Hello!
~~~

VB

~~~ vb
Dim encrypted As String = "jqPW4uxt8hk="
Dim decrypted As String = LeoCorpLibrary.Crypt.Decrypt(encrypted, "ABC123")

' Output: Hello!
~~~
[Go to top](#extensions)
### d. UpperFirstLetter
**This function is available in version 3.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `UpperFirstLetter()` method allows you to upper the first letter of a `string`. It returns a `string` value.

Here's an example of usage:

C#

~~~ cs
string helloMsg = "hello, this is a test"; // String
Console.WriteLine(helloMsg.UpperFirstLetter());

// Output:
// Hello, this is a test
~~~

VB

~~~ vb
Dim helloMsg As String = "hello, this is a test" ' String
Console.WriteLine(helloMsg.UpperFirstLetter())

' Output:
' Hello, this is a test
~~~
[Go to top](#extensions)
### e. UpperLettersAt
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

This method allows you to upper letters from a starting index, and an end index. It returns a `string` value.

This method has a few arguments:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| int | startIndex | The position where letters should start be in upper case |
| int | length | The position where letters should stop be in upper case|

Here's an example of usage:

C#

~~~ cs
string s = "I want leocorplibrary in upper case".UpperLettersAt(7, 20);
// Value of s:
// "I want LEOCORPLIBRARY in upper case"
~~~

VB

~~~ vb
Dim s As String = "I want leocorplibrary in upper case".UpperLettersAt(7, 20)
' Value of s:
' "I want LEOCORPLIBRARY in upper case"
~~~
[Go to top](#extensions)
### f. IsEndingWithSamePunctuation
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

This method allows you to compare if two `string` values are ending with the same punctuation. It returns a `bool` value.

**Variation 1**


~~~ cs
IsEndingWithSamePunctuation(string stringToCheck) {...}
~~~

This first variation has one argument:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | stringToCheck | The string to compare |

**Variation 2**


~~~ cs
IsEndingWithSamePunctuation(string stringToCheck, string punctuationToCheck) {...}
~~~

This second variation has two arguments:

| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | stringToCheck | The string to compare |
| string | punctuationToCheck | The punctuation sign to check for |

Here's an example of usage:

C#

~~~ cs
// Variation 1

string a = "This is a test sentence.";
string b = "This is an another test sentence.";

a.IsEndingWithSamePunctuation(b); // Returns true

// Variation 2

a.IsEndingWithSamePunctuation(b, "."); // Returns true
~~~

VB

~~~ vb
' Variation 1

Dim a As String = "This is a test sentence."
Dim b As String = "This is an another test sentence."

a.IsEndingWithSamePunctuation(b) ' Returns true

' Variation 2

a.IsEndingWithSamePunctuation(b, ".") ' Returns true
~~~
[Go to top](#extensions)
### g. SplitLines
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

The `SplitLines()` method allows you to split a string with multiple lines, and put each line of this string into an array of `string`. It returns a `string[]` value.

This method has no argument.

Here's an example of usage:

C#

~~~ cs
string text = "Hello,\nWorld!";
string[] lines = text.SplitLines();

// lines[0] = Hello,
// lines[1] = World!
~~~

VB

~~~ vb
Dim text As String = "Hello," & vbLf & "World!"
Dim lines As String() = text.SplitLines()

' lines[0] = Hello,
' lines[1] = World!
~~~
[Go to top](#extensions)

### h. HasRepeatedCharacters
**This function is available in version 3.8 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `HasRepeatedCharacters()` method allows you to know if a `string` has repeated characters. It returns a `bool` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.StringExtensions.HasRepeatedCharacters()
~~~

This method doesn't take any argument.

Here's an example of usage:

C#

~~~ cs
bool r = "aabb".HasRepeatedCharacters();
// r = true
~~~

VB

~~~ vb
Dim r As Boolean = "aabb".HasRepeatedCharacters()
' r = true
~~~
[Go to top](#extensions)

## Int Extensions
### a. IsEven
**This function is available in version 2.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsEven()` method allows you to know if a specific `int` is even. Returns a `bool` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.IsEven()
~~~

This method doesn't take any argument.

Here's an example of usage:

C#

~~~ cs
bool even = 12.IsEven(); // Returns true
bool odd = 11.IsEven(); // Returns false
~~~

VB

~~~ vb
Dim even As Boolean = 12.IsEven() ' Returns true
Dim odd As Boolean = 11.IsEven() ' Returns false
~~~
[Go to top](#extensions)
### b. ToDouble
**This function is available in version 2.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `ToDouble()` method allows you to convert an `ìnt` value to a ``double`` value. Returns a ``double`` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.IsEven()
~~~

This method doesn't take any argument.

Here's an example of usage:

C#

~~~ cs
int a = 15;
int b = 2;
double result = a.ToDouble() / b.ToDouble();
~~~

VB

~~~ vb
Dim a As Integer = 15
Dim b As Integer = 2
Dim result As Double = a.ToDouble() / b.ToDouble()
~~~
[Go to top](#extensions)

### c. ConvertSizeUnitToByte
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

The `ConvertSizeUnitToByte()` method allows you to convert a size unit such as kilobyte, gigabyte to byte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.ConvertSizeUnitToByte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int kiloByte = 5000;
double byteVar = kiloByte.ConvertSizeUnitToByte(UnitType.Kilobyte);

// Expected value for byteVar: 5000000
~~~

VB

~~~ vb
Dim kiloByte As Integer = 5000
Dim byteVar As Double = kiloByte.ConvertSizeUnitToByte(UnitType.Kilobyte)

' Expected value for byteVar: 5000000
~~~
[Go to top](#extensions)

### d. ConvertSizeUnitToKilobyte
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

The `ConvertSizeUnitToKilobyte()` method allows you to convert a size unit such as kilobyte, gigabyte to kilobyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.ConvertSizeUnitToKilobyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int megaByte = 50;
double kiloByte = megaByte.ConvertSizeUnitToKilobyte(UnitType.Megabyte);

// Expected value for kiloByte: 50000
~~~

VB

~~~ vb
Dim megaByte As Integer = 50
Dim kiloByte As Double = megaByte.ConvertSizeUnitToKilobyte(UnitType.Megabyte)

' Expected value for kiloByte: 50000
~~~
[Go to top](#extensions)

### e. ConvertSizeUnitToMegabyte
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

The `ConvertSizeUnitToMegabyte()` method allows you to convert a size unit such as megabyte, gigabyte to megabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.ConvertSizeUnitToMegabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int gigaByte = 50;
double megaByte = gigaByte.ConvertSizeUnitToMegabyte(UnitType.Gigabyte);

// Expected value for megaByte: 50000
~~~

VB

~~~ vb
Dim gigaByte As Integer = 50
Dim megaByte As Double = gigaByte.ConvertSizeUnitToMegabyte(UnitType.Gigabyte)

' Expected value for megaByte: 50000
~~~
[Go to top](#extensions)

### f. ConvertSizeUnitToGigabyte
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

The `ConvertSizeUnitToGigabyte()` method allows you to convert a size unit such as megabyte, petabyte to gigabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.ConvertSizeUnitToGigabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int megaByte = 4400;
double gigaByte = megaByte.ConvertSizeUnitToGigabyte(UnitType.Megabyte);

// Expected value for gigaByte: 4
~~~

VB

~~~ vb
Dim megaByte As Integer = 4400
Dim gigaByte As Double = megaByte.ConvertSizeUnitToGigabyte(UnitType.Megabyte)

' Expected value for gigaByte: 4
~~~
[Go to top](#extensions)

### g. ConvertSizeUnitToTerabyte
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

The `ConvertSizeUnitToTerabyte()` method allows you to convert a size unit such as megabyte, petabyte to terabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.ConvertSizeUnitToTerabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int gigaByte = 2000;
double teraByte = gigaByte.ConvertSizeUnitToTerabyte(UnitType.Gigabyte);

// Expected value for teraByte: 2
~~~

VB

~~~ vb
Dim gigaByte As Integer = 2000
Dim teraByte As Double = gigaByte.ConvertSizeUnitToTerabyte(UnitType.Gigabyte)

' Expected value for teraByte: 2
~~~

[Go to top](#extensions)

### h. ConvertSizeUnitToPetabyte
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

The `ConvertSizeUnitToPetabyte()` method allows you to convert a size unit such as megabyte, terabyte to petabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.ConvertSizeUnitToPetabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int teraByte = 6000;
double petaByte = teraByte.ConvertSizeUnitToPetabyte(UnitType.Terabyte);

// Expected value for petaByte: 6
~~~

VB

~~~ vb
Dim teraByte As Integer = 6000
Dim petaByte As Double = teraByte.ConvertSizeUnitToPetabyte(UnitType.Terabyte)

' Expected value for petaByte: 6
~~~

[Go to top](#extensions)

### i. GetDivisors
**This function is available in version 4.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetDivisors()` method allows you to get all the divisors of a specific `int` number. It returns a `int[]` array.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.GetDivisors()
~~~

It has no arguments.

Here's an example of usage:

C#

~~~ cs
int n = 10;
int[] ds = n.GetDivisors();

// ds = [1, 2, 5, 10]
~~~

VB

~~~ vb
Dim n As Integer = 10;
Dim ds As Integer() = n.GetDivisors()

' ds = [1, 2, 5, 10]
~~~

[Go to top](#extensions)

## Arrays Extensions
### a. Append
**This function is available in version 2.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `Append()` method allows you to append an item or multiple items to an array. Returns a `T[]` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.ArrayExtensions.Append()
~~~

This method has two variations:

**Variation 1**
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| T | item | The item which is going to be append in the array |

**Variation 2**
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| params T[] | items | The items which are going to be append in the array |

Here's an example of usage:

C#

~~~ cs
// Variation 1
int[] numbers = { 1, 2, 3, 4 };
int[] appendNumbers = numbers.Append(5);
// appendNumbers: { 1, 2, 3, 4, 5 }

// Variation 2
int[] numbers = { 1, 2, 3, 4 };
int[] appendNumbers = numbers.Append(5, 6);
// appendNumbers: { 1, 2, 3, 4, 5, 6 }
~~~

VB

~~~ vb
' Variation
Dim numbers As Integer() = {1, 2, 3, 4}
Dim appendNumbers As Integer() = numbers.Append(5)
' appendNumbers: { 1, 2, 3, 4, 5 }

' Variation 2
Dim numbers As Integer() = {1, 2, 3, 4}
Dim appendNumbers As Integer() = numbers.Append(5, 6)
' appendNumbers: { 1, 2, 3, 4, 5, 6 }
~~~
[Go to top](#extensions)
### b. RemoveItem
**This function is available in version 2.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `RemoveItem()` method allows you to remove a specific item from an array. It returns a `T[]` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.ArrayExtensions.RemoveItem()
~~~

This method has two variations:

**Variation 1**
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| T | item | The item to remove |

**Variation 2**
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| params T[] | items | The items to remove |

Here's an example of usage:

C#

~~~ cs
// Variation 1
int[] numbers = { 1, 2, 3, 4, 5 };
int[] remove = numbers.RemoveItem(5);
// remove: { 1, 2, 3, 4 }

// Variation 2
int[] numbers = { 1, 2, 3, 4, 5 };
int[] remove = numbers.RemoveItem(5, 3);
// remove: { 1, 2, 4 }
~~~

VB

~~~ vb
' Variation 1
Dim numbers As Integer() = {1, 2, 3, 4, 5}
Dim remove As Integer() = numbers.RemoveItem(5)
' remove: { 1, 2, 3, 4 }

' Variation 2
Dim numbers As Integer() = {1, 2, 3, 4, 5}
Dim remove As Integer() = numbers.RemoveItem(5, 3)
' remove: { 1, 2, 4 }
~~~
[Go to top](#extensions)

### c. UnSplit
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

The `UnSplit()` method allows you to unsplit an array of `string` using a separator. It returns a `string` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.ArrayExtensions.UnSplit()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| string | separator | The separator to insert between items. |

Here's an example of usage:

C#

~~~ cs
string[] array = { "a", "b", "c", "d" };
string unSplit = array.UnSplit(";");

// Output:
// a;b;c;d
~~~

VB

~~~ vb
Dim array As String() = {"a", "b", "c", "d"}
Dim unSplit As String = array.UnSplit(";")

' Output:
' a;b;c;d
~~~
[Go to top](#extensions)
## Double Extensions
### a. ToSeconds
**This function is available in version 4.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `ToSeconds` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to seconds.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.DoubleExtensions.ToSeconds()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 10; // Minutes
double tSeconds = t.ToSeconds(TimeUnits.Minutes);

// tSeconds = 600
~~~

VB

~~~ vb
Dim t As Double = 10 ' Minutes
Dim tSeconds As Double = t.ToSeconds(TimeUnits.Minutes)

' tSeconds = 600
~~~
[Go to top](#extensions)

### b. ToMinutes
**This function is available in version 4.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `ToMinutes` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to minutes.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.DoubleExtensions.ToMinutes()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 1; // Hours
double tMinutes = t.ToMinutes(TimeUnits.Minutes);

// tMinutes = 60
~~~

VB

~~~ vb
Dim t As Double = 1 ' Hours
Dim tMinutes As Double = t.ToMinutes(TimeUnits.Minutes)

' tMinutes = 60
~~~
[Go to top](#extensions)

### c. ToHours
**This function is available in version 4.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `ToHours` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to hours.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.DoubleExtensions.ToHours()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 120; // Minutes
double tHours = t.ToHours(TimeUnits.Minutes);

// tHours = 2
~~~

VB

~~~ vb
Dim t As Double = 120 ' Minutes
Dim tHours As Double = t.ToHours(TimeUnits.Minutes)

' tHours = 2
~~~
[Go to top](#extensions)

### d. ToDays
**This function is available in version 4.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `ToDays` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to days.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.DoubleExtensions.ToDays()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 72; // Hours
double tDays = t.ToDays(TimeUnits.Hours);

// tDays = 3
~~~

VB

~~~ vb
Dim t As Double = 72 ' Hours
Dim tDays As Double = t.ToDays(TimeUnits.Hours)

' tDays = 3
~~~
[Go to top](#extensions)