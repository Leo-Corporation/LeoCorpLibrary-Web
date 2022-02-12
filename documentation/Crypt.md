---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Crypt
## Introduction
To use the following methods, you need to use the version 2.6 or higher of LeoCorpLibrary, and put this in your "using" region:

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~

## Functions
### a. Encrypt
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

It's in:
~~~ cs
LeoCorpLibrary.Crypt.Encrypt()
~~~
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
[Go to top](#crypt)

### b. Decrypt
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

It's in:
~~~ cs
LeoCorpLibrary.Crypt.Decrypt()
~~~
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
[Go to top](#crypt)

### c. EncryptRSA
**This function is available in version 3.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `EncryptRSA()` method allows you to ecnrypt a string using RSA encryption. It returns a `byte[]` value.

It's in:
~~~ cs
LeoCorpLibrary.Crypt.EncryptRSA()
~~~
This method has a few arguments:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | str | The  string to encrypt |
| RSAParameters | rsaParameters | The RSA key |

Here's an example of usage:

C#
~~~ cs
using System.Security.Cryptography;

RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider();

string str = "LeoCorpLibrary";
byte[] encrypt = Crypt.EncryptRSA(str, cryptoServiceProvider.ExportParameters(false));

Console.WriteLine($"Raw: {str}\nEncrypted: {Crypt.ConvertBytesToString(encrypt)}");
~~~
VB
~~~ vb
Imports System.Security.Cryptography

Dim cryptoServiceProvider As RSACryptoServiceProvider = New RSACryptoServiceProvider()

Dim str As String = "LeoCorpLibrary"
Dim encrypt As Byte() = Crypt.EncryptRSA(str, cryptoServiceProvider.ExportParameters(False))

Console.WriteLine($"Raw: " + str + "\nEncrypted: " + Crypt.ConvertBytesToString(encrypt))
~~~
[Go to top](#crypt)
### d. DecryptRSA
**This function is available in version 3.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `DecryptRSA()` method allows you to decrypt a string using RSA encryption. It returns a `byte[]` value.

It's in:
~~~ cs
LeoCorpLibrary.Crypt.DecryptRSA()
~~~
This method has a few arguments:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| byte[] | encrypt | The encrypted string |
| RSAParameters | rsaParameters | The RSA key |

Here's an example of usage:

C#
~~~ cs
using System.Security.Cryptography;

RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider();

string str = "LeoCorpLibrary";
byte[] encrypt = Crypt.EncryptRSA(str, cryptoServiceProvider.ExportParameters(false));
byte[] decrypt = Crypt.DecryptRSA(encrypt, cryptoServiceProvider.ExportParameters(true));

Console.WriteLine($"Raw: {str}\nEncrypted: {Crypt.ConvertBytesToString(encrypt)}\nDecrypted: {Crypt.ConvertBytesToString(decrypt)}");
~~~
VB
~~~ vb
Imports System.Security.Cryptography

Dim cryptoServiceProvider As RSACryptoServiceProvider = New RSACryptoServiceProvider()

Dim str As String = "LeoCorpLibrary"
Dim encrypt As Byte() = Crypt.EncryptRSA(str, cryptoServiceProvider.ExportParameters(False))
Dim decrypt As Byte() = Crypt.DecryptRSA(encrypt, cryptoServiceProvider.ExportParameters(True))

Console.WriteLine($"Raw: " + str + "\nEncrypted: " + Crypt.ConvertBytesToString(encrypt) + "\nDecrypted: " + Crypt.ConvertBytesToString(decrypt))
~~~
[Go to top](#crypt)
## e. EncryptAES
**This function is available in version 3.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `EncryptAES()` method allows you to encrypt a string using AES encryption. It returns a `string` value.

It's in:
~~~ cs
LeoCorpLibrary.Crypt.EncryptAES()
~~~
This method has a few arguments:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | str | The string to ecnrypt |
| string | key | The key that will be used to encrypt and decrypt the string |

Here's an example of usage:

C#
~~~ cs
string str = "LeoCorpLibrary";
string encrypt = Crypt.EncryptAES(str, "key");
string decrypt = Crypt.DecryptAES(encrypt, "key");

Console.WriteLine($"Raw: {str}\nEncrypted: {encrypt}");
~~~
VB
~~~ vb
Dim str As String = "LeoCorpLibrary"
Dim encrypt As String = Crypt.EncryptAES(str, "key")
Dim decrypt As String = Crypt.DecryptAES(encrypt, "key")
Console.WriteLine("Raw: " + str + "\nEncrypted: " + encrypt)
~~~
[Go to top](#crypt)
### f. DecryptAES
**This function is available in version 3.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `DecryptAES()` method allows you to decrypt a string using AES ecnryption. It returns a `string` value.

It's in:
~~~ cs
LeoCorpLibrary.Crypt.Decrypt()
~~~
This method has a few arguments:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| string | encrypted | The encrypted string |
| string | key | The key that will be used to encrypt and decrypt the string |

Here's an example of usage:

C#
~~~ cs
string str = "LeoCorpLibrary";
string encrypt = Crypt.EncryptAES(str, "key");
string decrypt = Crypt.DecryptAES(encrypt, "key");

Console.WriteLine($"Raw: {str}\nEncrypted: {encrypt}\nDecrypted: {decrypt}");
~~~
VB
~~~ vb
Dim str As String = "LeoCorpLibrary"
Dim encrypt As String = Crypt.EncryptAES(str, "key")
Dim decrypt As String = Crypt.DecryptAES(encrypt, "key")

Console.WriteLine("Raw: " + str + "\nEncrypted: " + encrypt + "\nDecrypted: " + decrypt)
~~~
[Go to top](#crypt)
## Extensions
The `Encrypt()` and `Decrypt()` methods are also available as extensions of the `string` type. They can be used when you import the `LeoCorpLibrary.Extensions` namespace.

[Click here](/Extensions) to go to the Extensions page.

[Go to top](#crypt)