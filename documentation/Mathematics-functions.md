---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Maths
## Introduction
To uses these functions and features, do not forget to put this line of code in your "using" region:

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~
## Maths Functions
There are multiple functions available in this part of LeoCorpLibrary.

### a. Sum
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `Sum()` method enables you to do a sum of ``double`` numbers.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Sum()
~~~
You need to specify the numbers which you wanna get the sum of, in the argument section of the method.

::: tip Note
You can specify negative numbers.
:::

Here's an example of usage:

C#
~~~ cs
double numberSum = Maths.Sum(0, 2, 5, 6, 4);
~~~
VB
~~~ vb
Dim numberSum As Double = Maths.Sum(0, 2, 5, 6, 4)
~~~
[Go to top](#maths)
### b. GetBiggestNumber
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetBiggestNumber()` allows you to get the biggest number among `double` numbers that are specified. Returns a ``double``value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.GetBiggestNumber()
~~~

::: tip Note
You can use negative numbers
:::

Here's an example of usage:

C#
~~~ cs
double biggestNumber = Maths.GetBiggestNumber(0, 2, 3, 4, 5, 9, 8, 1);
~~~
VB
~~~ vb
Dim biggestNumber As Double = Maths.GetBiggestNumber(0, 2, 3, 4, 5, 9, 8, 1)
~~~
[Go to top](#maths)
### c. GetLowestNumber
**This function is available in version 1.3.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetLowestNumber()` method allows you to get the lowest number among `double` numbers that are specified. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.GetLowestNumber()
~~~

::: tip Note
You can use negative numbers.
:::

Here's an example of usage:

C#
~~~ cs
double lowestNumber = Maths.GetLowestNumber(0, 2, -1, 2.32);
~~~
VB
~~~ vb
Dim lowestNumber As Double = Maths.GetLowestNumber(0, 2, -1, 2.32)
~~~
[Go to top](#maths)
### d. RadiansToDegrees
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `RadiansToDegrees()` method allows you to convert radians to degrees. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.RadiansToDegrees()
~~~

It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radians | Radians to convert | 1.5 |

Here's an example of usage:

C#
~~~ cs
double degrees = Maths.RadiansToDegrees(1.57079633);
// Expected result: 90°
~~~
VB
~~~ vb
Dim degrees As Double =  Maths.RadiansToDegrees(1.57079633)
' Expected result: 90°
~~~
[Go to top](#maths)
### e. DegreesToRadians
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `DegreesToRadians()` method allows you to convert degrees to radians. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.DegreesToRadians()
~~~

It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | degrees | Degrees to convert | 60 |

Here's an example of usage:

C#
~~~ cs
double degrees = Maths.DegreesToRadians(90);
// Expected result: 1.57079633
~~~
VB
~~~ vb
Dim degrees As Double =  Maths.DegreesToRadians(90)
' Expected result: 1.57079633
~~~
[Go to top](#maths)

### e. IsInteger
**This function is available in version 3.11 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsInteger()` method allows you to check if a `double` number is an integer (`int`) or not.

It's in:
~~~ cs
LeoCorpLibrary.Maths.IsInteger()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | number | The number to test |

Here's an example of usage:

C#
~~~ cs
bool isInt = Maths.IsInteger(10.5);
// isInt = false

bool isInt2 = Maths.IsInteger(4);
// IsInt2 = true
~~~
VB
~~~ vb
Dim isInt As Boolean = Maths.IsInteger(10.5);
' isInt = false

Dim isInt2 As Boolean = Maths.IsInteger(4);
' IsInt2 = true
~~~
[Go to top](#maths)

### f. GetOpposite
**This function is available in version 4.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetOpposite()` method allows you to get the opposite of a specified number. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.GetOpposite()
~~~

::: tip Note
You can use negative numbers.
:::

This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | n | The number to get the opposite |

Here's an example of usage:

C#
~~~ cs
double x = 54;
double oppositeOfX = Maths.GetOpposite(x);

// oppositeOfX = -54
~~~
VB
~~~ VB
Dim x As Double = 54
Dim oppositeOfX As Double = Maths.GetOpposite(x)

' oppositeOfX = -54
~~~
[Go to top](#maths)

### g. Factorial
**This function is available in version 4.2 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `Factorial()` method allows you to get the factorial of a specified number. It returns an `int` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Factorial()
~~~

::: warning Remark
If the factorial of the specified number is greater than `int.MaxValue`, the method will either return 0, or a wrong result.
:::

This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | n | The number to get the factorial |

Here's an example of usage:

C#
~~~ cs
int x = 5;
int f = Maths.Factorial(x);

// f = 520
~~~
VB
~~~ vb
Dim x As Integer = 5
Dim f As Integer = Maths.Factorial(x)

' f = 520
~~~
[Go to top](#maths)

## Circle
### a. GetArea
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetArea()` method allows you to get the area of circle. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Circle.GetArea()
~~~
This method has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Circle's radius | 15.12 |

Here's an example of usage:

C#
~~~ cs
double circleArea = Maths.Circle.GetCircleArea(12.458);
~~~
VB
~~~ vb
Dim circleArea As Double = Maths.Circle.GetCircleArea(12.458)
~~~
[Go to top](#maths)
### b. GetPerimeter
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetPerimeter()` allows you to get the perimeter of a circle. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Circle.GetPerimeter()
~~~
This method has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Circle's radius | 14.1 |

Here's an example of usage:

C#
~~~ cs
double circlePerimeter = Maths.Circle.GetPerimeter(11.2);
~~~
VB
~~~ vb
Dim circlePerimeter As Double = Maths.Circle.GetPerimeter(11.2)
~~~
[Go to top](#maths)
## Rectangle
### a. GetDiagonal
**This function is available in version 3.2 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetDiagonal()` method allows you to get a rectangle's diagonal.
It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Rectangle.GetDiagonal()
~~~
This method has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | width | Rectangle's width/base | 4.12 |
| double | length | Rectangle's length | 8.5 |

Here's an example of usage:

C#
~~~ cs
double diagonal = Maths.Rectangle.GetDiagonal(4.12, 8.5); // Get diagonal
~~~
VB
~~~ vb
Dim diagonal As Double = Maths.Rectangle.GetDiagonal(4.12, 8.5) ' Get diagonal
~~~
[Go to top](#maths)
### b. GetArea
**This function is available in version 3.10 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetArea()` method allows you to get a rectangle's area. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Rectangle.GetArea()
~~~
This method has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | width | Rectangle's width/base | 6 |
| double | length | Rectangle's length | 12.2 |

Here's an example of usage:

C#
~~~ cs
double area = Maths.Rectangle.GetArea(5, 10);
// area = 50
~~~
VB
~~~ vb
Dim area = Maths.Rectangle.GetArea(5, 10)
' area = 50
~~~
[Go to top](#maths)

## Triangle
### a. GetArea
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetArea()` method allows you to get the area of a triangle. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Triangle.GetArea()
~~~
This method has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | height | Triangle's height | 5.48 |
| double | width | Triangle's width/base | 4.12 |

Here's an example of usage:

C#
~~~ cs
double triangleArea = Maths.Triangle.GetArea(5.48, 4.12);
~~~
VB
~~~ vb
Dim triangleArea As Double = Maths.Triangle.GetArea(5.48, 4.12)
~~~
[Go to top](#maths)
### b. GetPerimeter
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetPerimeter()` method allows you to get the perimeter of a triangle. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Triangle.GetPerimeter()
~~~
This method has three arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side1 | Triangle's side | 5.48 |
| double | side2 | Triangle's side | 4.12 |
| double | side3 | Triangle's side | 6 |

Here's an example of usage:

C#
~~~ cs
double trianglePerimeter = Maths.Triangle.GetPerimeter(5.48, 4.12, 6);
~~~
VB
~~~ vb
Dim trianglePerimeter As Double = Maths.Triangle.GetPerimeter(5.48, 4.12, 6)
~~~
[Go to top](#maths)
### c. IsBuildable
**This function is available in version 1.3 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsBuildable()` method allows you to know if the specified dimensions can build a triangle. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Triangle.IsBuildable()
~~~
This method has three arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side1 | Triangle's side | 4.5 |
| double | side2 | Triangle's side | 9.1 |
| double | side3 | Triangle's side | 12.45 |

Here's an example of usage:

C#
~~~ cs
bool isBuildable = Maths.Triangle.IsBuildable(4.5, 9.1, 12.45);
~~~
VB
~~~ vb
Dim isBuildable As Bool = Maths.Triangle.IsBuildable(4.5, 9.1, 12.45)
~~~
[Go to top](#maths)
### d. GetHypotenuse
**This function is available in version 3.2 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetHypotenuse()` method allows you to get a triangle's hypotenuse from the two other sides. (Pythagoras) It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Triangle.GetHypotenuse()
~~~
This method has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side1 | Triangle's side | 4.5 |
| double | side2 | Triangle's side | 6.1 |

Here's an example of usage:

C#
~~~ cs
double hypotenuse = Maths.Triangle.GetHypotenuse(4.5, 6.1); // Get the hypotenuse
~~~
VB
~~~ vb
Dim hypotenuse As Double = Maths.Triangle.GetHypotenuse(4.5, 6.1) ' Get the hypotenuse
~~~
[Go to top](#maths)
### e. IsRight
**This function is available in version 3.10 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `IsRight()` method allows you to get if a triangle is right or not. It returns a `bool` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Triangle.IsRight()
~~~
This method has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side1 | Triangle's side | 4.5 |
| double | side2 | Triangle's side | 6.1 |
| double | side3 | Triangle's side | 8 |

Here's an example of usage:

C#
~~~ cs
bool isRight = Maths.Triangle.IsRight(3, 4, 5);
// isRight = true
~~~
VB
~~~ vb
Dim isRight As Boolean = Maths.Triangle.IsRight(3, 4, 5)
' isRight = true
~~~
[Go to top](#maths)

## Cube
### a. GetVolume
**This function is available in version 1.8 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetVolume()` method allows you to get the volume of a cube.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Cube.GetVolume()
~~~

This method has two variation:

**Variation 1**
~~~ cs
GetVolume(double side, double height) {...}
~~~
Here's the arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side | Cube's side | 7.1 |
| double | height | Cube's height | 3.8 |

**Variation 2**
~~~ cs
GetVolume(double side) {...}
~~~
Here's the arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side | Cube's side | 8 |

Here's an example of usage:

C#
~~~ cs
// In the case of a rectangular prism
double volume = Maths.Cube.GetVolume(12, 14);

// In the case of a cube
double volumeCube = Maths.Cube.GetVolume(12);
~~~
VB
~~~ vb
' In the case of a rectangular prism
Dim volume As Double = Maths.Cube.GetVolume(12, 14)

' In the case of a cube
Dim volumeCube As Double = Maths.Cube.GetVolume(12)
~~~
[Go to top](#maths)
### b. GetEdge
**This function is available in version 1.8.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetEdge()` method enables you to get the edge of a cube. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Cube.GetEdge()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | area | Area of the cube | 41.5 |

Here's an example of usage:

C#
~~~ cs
double areaBase = Maths.Cube.GetEdge(31);
~~~
VB
~~~ vb
Dim areaBase As Double = Maths.Cube.GetEdge(31)
~~~
[Go to top](#maths)
## Cylinder
### a. GetVolume
**This function is available in version 1.8 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetVolume()` method enables you to get the volume of a cylinder. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Cylinder.GetVolume()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Cylinder's radius | 4.5 |
| double | height | Cylinder's height | 7 |

Here's an example of usage:

C#
~~~ cs
// Get the volume of a cylinder
double volume = Maths.Cylinder.GetVolume(13, 5);
~~~
VB
~~~ vb
' Get the volume of a cylinder
Dim volume As Double = Maths.Cylinder.GetVolume(13, 5)
~~~
[Go to top](#maths)
### b. GetHeight
**This function is available in version 1.8.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetHeight()` method enables you to get the height of a cylinder. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Cylinder.GetHeight()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Cylinder's radius | 4.5 |
| double | area | Cylinder's area | 21 |

Here's an example of usage:

C#
~~~ cs
double height = Maths.Cylinder.GetHeight(5, 21);
~~~
VB
~~~ vb
Dim height As Double = Maths.Cylinder.GetHeight(5, 21)
~~~
[Go to top](#maths)
### c. GetBaseArea
**This function is available in version 1.8.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetBaseArea()` method allows you to get the area of the base of a cylinder. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Cylinder.GetBaseArea()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Cylinder's radius | 12 |

Here's an example of usage:

C#
~~~ cs
double baseArea = Maths.Cylinder.GetBaseArea(10);
~~~
VB
~~~ vb
Dim baseArea As Double = Maths.Cylinder.GetBaseArea(10)
~~~
[Go to top](#maths)
## Pyramid
### a. GetVolume
**This function is available in version 1.8 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetVolume()` method allows you to get the volume of a pyramid. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Pyramid.GetVolume()
~~~
It has three arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | length | Length of the pyramid | 4.5 |
| double | width | Width of the pyramid | 7 |
| double | height | Height of the pyramid | 8.9 |

Here's an example of usage:

C#
~~~ cs
// Get the volume of a pyramid
double volume = Maths.Pyramid.GetVolume(13, 5, 15);
~~~
VB
~~~ vb
' Get the volume of a pyramid
Dim volume As Double = Maths.Pyramid.GetVolume(13, 5, 15)
~~~
[Go to top](#maths)
### b. GetHeight
**This function is available in version 1.8.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetHeight()` method allows you to get the height of a pyramid. Returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Pyramid.GetHeight()
~~~
It has three arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | length | Length of the pyramid | 4.5 |
| double | width | Width of the pyramid | 7 |
| double | volume | Volume of the pyramid  | 8.9 |

Here's an example of usage:

C#
~~~ cs
double height = Maths.Pyramid.GetHeight(10, 10, 100).
~~~
VB
~~~ vb
Dim height As Double = Maths.Pyramid.GetHeight(10, 10, 100)
~~~
[Go to top](#maths)
### c. GetLengthBase
**This function is available in version 1.8.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetLengthBase()` allows you to get the length of the base of a pyramid. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Pyramid.GetLengthBase()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | areaBase | Base's area | 9.9 |
| double | width | Width | 12 |

Here's an example of usage:

C#
~~~ cs
double lengthBase = Maths.Pyramid.GetLengthBase(100, 10);
~~~
VB
~~~ vb
Dim lengthBase As Double = Maths.Pyramid.GetLengthBase(100, 10)
~~~
[Go to top](#maths)
### d. GetWidthBase
**This function is available in version 1.8.1 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetWidthBase()` allows you to get the width of the base of a pyramid. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Pyramid.GetWidthBase()
~~~
It has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | areaBase | Base's area | 6.1 |
| double | length | Length | 15 |

Here's an example of usage:

C#
~~~ cs
double widthBase = Maths.Pyramid.GetWidthBase(100, 10);
~~~
VB
~~~ vb
Dim widthBase As Double = Maths.Pyramid.GetWidthBase(100, 10)
~~~
[Go to top](#maths)
## Hexagon
### a. GetArea
**This function is available in version 3.2 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetArea()` method allows you to get the area of an hexagon from the length of it's side. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Hexagon.GetArea()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side | Length of the hexagon's side | 8 |

Here's an example of usage:

C#
~~~ cs
double hexagonArea = Maths.Hexagon.GetArea(8); // Get the area
~~~
VB
~~~ vb
Dim hexagonArea As Double = Maths.Hexagon.GetArea(8) ' Get the area
~~~
[Go to top](#maths)
### b. GetPerimeter
**This function is available in version 3.2 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetPerimeter()` method allows you to get the perimeter of a hexagon.
It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Hexagon.GetPerimeter()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side | Length of the hexagon's side | 7.2 |

Here's an example of usage:

C#
~~~ cs
double hexagonPerimeter = Maths.Hexagon.GetPerimeter(7.2); // Get perimeter
~~~
VB
~~~ vb
Dim hexagonPerimeter As Double = Maths.Hexagon.GetPerimeter(7.2) ' Get perimeter
~~~
[Go to top](#maths)
## Diamond
### a. GetArea
**This function is available in version 3.2 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetArea()` method allows you to get the area of a diamond. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Diamond.GetArea()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | diag1 | Length of the diamond's diagonal | 4.5 |
| double | diag2 | Length of the diamond's diagonal | 7.5 |

Here's an example of usage:

C#
~~~ cs
double diamondArea = Maths.Diamond.GetArea(4.5, 7.5); // Get area
~~~
VB
~~~ vb
Dim diamondArea As Double = Maths.Diamond.GetArea(4.5, 7.5) ' Get area
~~~
[Go to top](#maths)
### b. GetPerimeter
**This function is available in version 3.2 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetPerimeter()` method allows you to get the area of a diamond. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Diamond.GetPerimeter()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | side | Length of the diamond's side | 8 |

Here's an example of usage:

C#
~~~ cs
double diamondPerimeter = Maths.Diamond.GetPerimeter(8); // Get perimeter
~~~
VB
~~~ vb
Dim diamondPerimeter As Double = Maths.Diamond.GetPerimeter(8) ' Get perimeter
~~~
[Go to top](#maths)
## Sphere
### a. GetArea
**This function is available in version 3.8 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetArea()` method allows you to get the area of a sphere from its radius. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Sphere.GetArea()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Radius of the sphere | 10 |

Here's an example of usage:

C#
~~~ cs
double area = Maths.Sphere.GetArea(10);
// Expected output:
// 1256.6370614359173
~~~
VB
~~~ vb
Dim area As Double = Maths.Sphere.GetArea(10)
' Expected output:
' 1256.6370614359173
~~~
[Go to top](#maths)

### b. GetVolume
**This function is available in version 3.8 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetVolume()` method allows you to get the volume of a sphere from its radius. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Sphere.GetVolume()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | Radius of the sphere | 10 |

Here's an example of usage:

C#
~~~ cs
double volume = Maths.Sphere.GetVolume(10);
// Expected output:
// 4188.790204786391
~~~
VB
~~~ vb
Dim volume As Double = Maths.Sphere.GetVolume(10)
' Expected output:
' 4188.790204786391
~~~
[Go to top](#maths)

## Cone
### a. GetVolume
**This function is available in version 3.10 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetVolume()` method allows you to get the volume of a cone. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Cone.GetVolume()
~~~
This method has two arguments:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | radius | The radius of the cone | 10.4 |
| double | height | The height of the cone | 9.5 |

Here's an example of usage:

C#
~~~ cs
double volume = Maths.Cone.GetVolume(5, 20);
// volume = 523.5987755982989
~~~
VB
~~~ vb
Dim volume As Double = Maths.Cone.GetVolume(5, 20)
' volume = 523.5987755982989
~~~

[Go to top](#maths)

## Trigonometry functions
![SohCahToa](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/sohcahtoa.png)

### a. GetTriangleOpposedSideFromHypotenuse
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetTriangleOpposedSideFromHypotenuse()` allows you to get a triangle's opposed side from an angle, and its hypotenuse. Returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Trigonometry.GetTriangleOpposedSideFromHypotenuse()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | angle | The angle value (in radians) | 1.2 |
| double | hypotenuse | The hypotenuse length value | 12 |

Here's an example of usage:

![Image](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/drawtriangle.png)


C#
~~~ cs
double opposedSide = Maths.Trigonometry.GetTriangleOpposedSideFromHypotenuse(1.05, 10);
// Expected result: 8.66
// Actual result: 8.67423225594017
~~~
VB
~~~ vb
Dim opposedSide As Double = Maths.Trigonometry.GetTriangleOpposedSideFromHypotenuse(1.05, 10)
' Expected result: 8.66
' Actual result: 8.67423225594017
~~~
[Go to top](#maths)

### b. GetTriangleOpposedSideFromAdjacent
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetTriangleOpposedSideFromAdjacent()` method allows you to get a triangle's opposed side from an angle, and its adjacent side. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Trigonometry.GetTriangleOpposedSideFromAdjacent()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | angle | The angle value (in radians) | 1.02 |
| double | adjacent | The adjacent side length value | 5 |

Here's an example of usage:

![Image](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/drawtriangle.png)


C#
~~~ cs
double opposedSide = Maths.Trigonometry.GetTriangleOpposedSideFromAdjacent(1.05, 5);
// Expected result: 8.66
// Actual result: 8.716576549915851
~~~
VB
~~~ vb
Dim opposedSide As Double = Maths.Trigonometry.GetTriangleOpposedSideFromAdjacent(1.05, 5)
' Expected result: 8.66
' Actual result: 8.716576549915851
~~~
[Go to top](#maths)

### c. GetTriangleAdjacentSideFromHypotenuse
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetTriangleAdjacentSideFromHypotenuse()` method allows you to get a triangle's adjacent side from an angle, and its hypotenuse. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Trigonometry.GetTriangleAdjacentSideFromHypotenuse()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | angle | The angle value (in radians) | 1.02 |
| double | hypotenuse | The hypotenuse side length value | 5 |

Here's an example of usage:

![Image](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/drawtriangle.png)


C#
~~~ cs
double adjacentSide = Maths.Trigonometry.GetTriangleAdjacentSideFromHypotenuse(1.05, 10);
// Expected result: 5
// Actual result: 4.97571047891727
~~~
VB
~~~ vb
Dim opposedSide As Double = Maths.Trigonometry.GetTriangleAdjacentSideFromHypotenuse(1.05, 10)
' Expected result: 5
' Actual result: 4.97571047891727
~~~
[Go to top](#maths)

### d. GetTriangleAdjacentSideFromOpposedSide
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetTriangleAdjacentSideFromOpposedSide()` method allows you to get a triangle's adjacent side from an angle, and its opposed side. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Trigonometry.GetTriangleAdjacentSideFromOpposedSide()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | angle | The angle value (in radians) | 1.2 |
| double | opposed | The opposed side length value | 8.6 |

Here's an example of usage:

![Image](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/drawtriangle.png)


C#
~~~ cs
double adjacentSide = Maths.Trigonometry.GetTriangleAdjacentSideFromOpposedSide(1.05, 8.66);
// Expected result: 5
// Actual result: 4.967546576576329
~~~
VB
~~~ vb
Dim adjacentSide As Double = Maths.Trigonometry.GetTriangleAdjacentSideFromOpposedSide(1.05, 8.66)
' Expected result: 5
' Actual result: 4.967546576576329
~~~
[Go to top](#maths)

### e. GetTriangleHypotenuseFromOpposedSide
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetTriangleHypotenuseFromOpposedSide()` method allows you to get a triangle's hypotenuse from an angle, and its opposed side. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Trigonometry.GetTriangleHypotenuseFromOpposedSide()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | angle | The angle value (in radians) | 1.2 |
| double | opposed | The opposed side length value | 8.6 |

Here's an example of usage:

![Image](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/drawtriangle.png)


C#
~~~ cs
double hypotenuse = Maths.Trigonometry.GetTriangleHypotenuseFromOpposedSide(1.05, 8.66);
// Expected result: 10
// Actual result: 9.98359248920223
~~~
VB
~~~ vb
Dim hypotenuse As Double = Maths.Trigonometry.GetTriangleHypotenuseFromOpposedSide(1.05, 8.66)
' Expected result: 10
' Actual result: 9.98359248920223
~~~
[Go to top](#maths)

### f. GetTriangleHypotenuseFromAdjacentSide
**This function is available in version 3.5 and higher**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `GetTriangleHypotenuseFromAdjacentSide()` method allows you to get a triangle's hypotenuse from an angle, and its adjacent side. Returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.Maths.Trigonometry.GetTriangleHypotenuseFromAdjacentSide()
~~~
It has one argument:
| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | angle | The angle value (in radians) | 1.2 |
| double | adjacent | The adjacent side length value | 8.6 |

Here's an example of usage:

![Image](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/drawtriangle.png)


C#
~~~ cs
double hypotenuse = Maths.Trigonometry.GetTriangleHypotenuseFromAdjacentSide(1.05, 5);
// Expected result: 10
// Actual result: 10.04881618652381
~~~
VB
~~~ vb
Dim hypotenuse As Double = Maths.Trigonometry.GetTriangleHypotenuseFromAdjacentSide(1.05, 5)
' Expected result: 10
' Actual result: 10.04881618652381
~~~
[Go to top](#maths)