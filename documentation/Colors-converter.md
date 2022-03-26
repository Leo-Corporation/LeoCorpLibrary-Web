---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# ColorsConverter
## Introduction
To use all the methods and other features of LeoCorpLibrary, don't forget to add this line on top of your file of code:

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~
## Classes and structures
To convert colors, LeoCorpLibrary uses custom classes and structures.

### ColorsConverter
`ColorsConverter` is a class that contains all of the methods to convert colors.

#### a. RGBtoHEX
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to convert a RGB color to a [`HEXColor`](#hexcolor). 
It's in:

~~~ cs
LeoCorpLibrary.ColorsConverter.RGBtoHEX()
~~~
There is two variations of this method:

**Variation 1 :**

~~~ cs
ColorsConverter.RGBtoHEX(Color color) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Color | color | Color |

**Variation 2 :**

~~~ cs
ColorsConverter.RGBtoHEX(int red, int green, int blue) {...}
~~~

| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| int | red | Red | 125 |
| int | green | Green | 45 |
| int | blue | Blue | 255 |

You can either use the ``System.Drawing.Color`` structure or put each RGB values.

::: tip Note
If, in the second variation of the method, you put an invalid number, the [`RGBInvalidValueException`](/Exceptions.html#rgbinvalidvalueexception) will be thrown.
:::

Example of usage:

C#

~~~ cs
// Example 1 :
HEXColor hexColor = ColorsConverter.RGBtoHEX(125, 45, 255);
Console.WriteLine(hexColor.Value); // Write value
// Example 2 :
Color color = Color.FromArgb(125, 45, 255)
HEXColor hexColor = ColorsConverter.RGBtoHEX(color);
Console.WriteLine(hexColor.Value); // Write value
~~~

VB

~~~ vb
' Example 1 :
Dim hexColor As HEXColor = ColorsConverter.RGBtoHEX(125, 45, 255)
Console.WriteLine(hexColor.Value) ' Write value
' Example 2 :
Dim color As Color = Color.FromArgb(125, 45, 255)
HEXColor hexColor As HEXColor = ColorsConverter.RGBtoHEX(color)
Console.WriteLine(hexColor.Value) ' Write value
~~~

[Go to top](#colorsconverter)

#### b. HEXtoRGB
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to convert a HEX color to a RGB color. Returns a ``Color``.

It's in:

~~~ cs
LeoCorpLibrary.ColorsConverter.RGBtoHEX()
~~~
Here's this method's argument:


| Value | Argument | Description |
| :----: | :-------: | :---------: |
| [HEXColor](#hexcolor) | hexColor | HEX Color |

::: tip Note
If you put an incorrect HEX value for `hexColor`, the [`HEXInvalidValueException`](/Exceptions.html#hexinvalidvalueexception) will be thrown.
:::

Example of usage:

C#

~~~ cs
HEXColor hexColor = new HEXColor();
hexColor.Value = "ffffff";
Color color = ColorsConverter.HEXtoRGB(hexColor);
~~~

VB

~~~ vb
Dim hexColor As HEXColor = New HEXColor()
hexColor.Value = "ffffff"
Dim color As Color = ColorsConverter.HEXtoRGB(hexColor)
~~~

[Go to top](#colorsconverter)

#### c. RGBtoHSV
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to convert a RGB color to a [`HSVColor`](#hsvcolor).

It's in:

~~~ cs
LeoCorpLibrary.ColorsConverter.RGBtoHSV()
~~~
There is two variations of this method:

**Variation 1 :**

~~~ cs
ColorsConverter.RGBtoHSV(Color color) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Color | color | Color |

**Variation 2 :**

~~~ cs
ColorsConverter.RGBtoHSV(int red, int green, int blue) {...}
~~~

| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| int | red | Red | 125 |
| int | green | Green | 45 |
| int | blue | Blue | 255 |

You can either use the `System.Drawing.Color` structure or put each value individually.

::: tip Note
If in the second variation, you put an incorrect RGB color, the [`RGBInvalidValueException`](/Exceptions.html#rgbinvalidvalueexception) will be thrown.
:::

Example of usage:

C#

~~~ cs
// Example 1 :
HSVColor hsvColor = ColorsConverter.RGBtoHSV(125, 45, 255);
// Example 2 :
Color color = Color.FromArgb(125, 45, 255)
HSVColor hsvColor = ColorsConverter.RGBtoHSV(color);
~~~

VB

~~~ vb
' Example 1 :
Dim hsvColor As HSVColor = ColorsConverter.RGBtoHSV(125, 45, 255)
' Example 2 :
Dim color As Color = Color.FromArgb(125, 45, 255)
HSVColor hsvColor As HSVColor = ColorsConverter.RGBtoHSV(color)
~~~

[Go to top](#colorsconverter)

#### d. HEXtoHSV
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method enables you to convert a HEX color to a [`HSVColor`](#hsvcolor)

It's in:

~~~ cs
LeoCorpLibrary.ColorsConverter.HEXtoHSV()
~~~
It has only one argument:


| Value | Argument | Description |
| :----: | :-------: | :---------: |
| [HEXColor](#hexcolor) | hexColor | HEX Color |

::: tip Note
If you put an incorrect HEX value for `hexColor`, the [`HEXInvalidValueException`](/Exceptions.html#hexinvalidvalueexception) will be thrown.
:::

Example of usage:

C#

~~~ cs
HEXColor hexColor = new HEXColor();
hexColor.Value = "ffffff";
HSVColor hsvColor = ColorsConverter.HEXtoHSV(hexColor);
~~~

VB

~~~ vb
Dim hexColor As HEXColor = New HEXColor()
hexColor.Value = "ffffff"
HSVColor hsvColor = ColorsConverter.HEXtoHSV(hexColor)
~~~

[Go to top](#colorsconverter)

### HEXColor
The ``HEXColor`` structure allows to some methods to work correctly. It stocks the HEX value in a `string`.

To access the HEX value, you can use this example:

C#

~~~ cs
HEXColor hexColor = ColorsConverter.RGBtoHEX(125, 12, 255);
Console.WriteLine(hexColor.Value);
~~~

VB

~~~ vb
Dim hexColor As HEXColor = ColorsConverter.RGBtoHEX(125, 12, 255)
Console.WriteLine(hexColor.Value)
~~~


#### a. FromRGB
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to create a ``HEXColor`` form a RGB `Color`.

It's in:


~~~ cs
LeoCorpLibrary.HEXColor.FromRGB()
~~~
There is two variation of this method:

**Variation 1**

~~~ cs
HEXColor.FromRGB(Color color) {...}
~~~

**Variation 2**

~~~ cs
HEXColor.FromRGB(int red, int green, int blue) {...}
~~~

You can either use the `System.Drawing.Color` structure or put each value individually.

::: tip Note
If in the second variation, you put an incorrect RGB color, the [`RGBInvalidValueException`](/Exceptions.html#rgbinvalidvalueexception) will be thrown.
:::

Example of usage:

C#

~~~ cs
// Example 1 :
Color color = Color.FromRGB(125, 12, 255);
HEXColor hexColor = HEXColor.FromRGB(color);
// Example 2 :
HEXColor hexColor = HEXColor.FromRGB(125, 12, 255);
~~~

VB

~~~ vb
' Example 1 :
Dim color As Color = Color.FromRGB(125, 12, 255)
Dim hexColor As HEXColor = HEXColor.FromRGB(color)
' Example 2 :
Dim hexColor As HEXColor = HEXColor.FromRGB(125, 12, 255)
~~~

[Go to top](#colorsconverter)

### HSVColor
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The ``HSVColor`` structure allows other methods to work properly. It stocks the value of an HSV color:
- **H**ue
- **S**aturation
- **V**alue

Here's an example of code that you can use to get the different values:

C#

~~~ cs
HSVColor hsvColor = ColorsConverter.RGBtoHSV(125, 12, 255);
Console.WriteLine(hsvColor.Hue.ToString() + "\n" + hsvColor.Saturation.ToString() + "\n" + hsvColor.Value.ToString());
~~~

VB

~~~ vb
Dim hsvColor As HSVColor = ColorsConverter.RGBtoHSV(125, 12, 255)
Console.WriteLine(hsvColor.Hue.ToString() + vbNewLine + hsvColor.Saturation.ToString() + vbNewLine + hsvColor.Value.ToString())
~~~

[Go to top](#colorsconverter)

#### a. FromRGB
**This function is available in version 1.5 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

This method allows you to create a HSV color from a RGB color.
Returns a `HSVColor`.

It's in:


~~~ cs
LeoCorpLibrary.HSVColor.FromRGB()
~~~
There is two variation of this method:

**Variation 1**

~~~ cs
HSVColor.FromRGB(Color color) {...}
~~~
**Variation 2**

~~~ cs
HSVColor.FromRGB(int red, int green, int blue) {...}
~~~
You can either use the `System.Drawing.Color` structure or put each value individually.

::: tip Note
If in the second variation, you put an incorrect RGB color, the [`RGBInvalidValueException`](/Exceptions.html#rgbinvalidvalueexception) will be thrown.
:::

Example of usage:

C#

~~~ cs
// Example 1 :
Color color = Color.FromRGB(125, 12, 255);
HSVColor hsvColor = HSVColor.FromRGB(color);
// Example 2 :
HSVColor hsvColor = HSVColor.FromRGB(125, 12, 255);
~~~

VB

~~~ vb
' Example 1 :
Dim color As Color = Color.FromRGB(125, 12, 255)
Dim hsvColor As HSVColor = HSVColor.FromRGB(color)
' Example 2 :
Dim hsvColor As HSVColor = HSVColor.FromRGB(125, 12, 255)
~~~

[Go to top](#colorsconverter)