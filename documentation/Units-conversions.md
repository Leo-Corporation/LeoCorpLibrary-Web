---
footer: MIT Licensed | Copyright © 2021 Léo Corporation and contributors
---
# UnitsConversions
## Introduction
To use these methods and features, do not forget to put this line of code on top of your code file:

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~

# UnitsConversions
## Methods
### a. MilesToKm
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.7.2 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ✔ |

</details>

This methods allows you to convert miles to kilometers. It returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.UnitsConversions.MilesToKm()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | miles | Number of mile(s) to convert |

Here's an example of usage:

C#
~~~ cs
double km = UnitsConversions.MilesToKm(10);
// Expected result:
// 16.09344 km
~~~
VB
~~~ vb
Dim km As Double = UnitsConversions.MilesToKm(10)
' Expected result:
' 16.09344 km
~~~
[Go to top](#unitsconversions)
### b. KmToMiles
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.7.2 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ✔ |

</details>

This method allows you to convert kilometers to miles. It return a ``double``value.

It's in:
~~~ cs
LeoCorpLibrary.UnitsConversions.KmToMiles()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | kilometers | Number of kilometers(s) to convert |

Here's an example of usage:

C#
~~~ cs
double miles = UnitsConversions.KmToMiles(10);
// Expected result :
// 6.2137119223733395 miles
~~~
VB
~~~ vb
Dim miles As Double = UnitsConversions.KmToMiles(10)
' Expected result :
' 6.2137119223733395 miles
~~~
[Go to top](#unitsconversions)
### c. CelsiusToFahrenheit
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.7.2 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ✔ |

</details>

This method allows you to convert Celsius (°C) to Fahrenheit (°F). It returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.UnitsConversions.CelsiusToFahrenheit()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | celsius | Number of celsius to convert |

Here's an example of usage:

C#
~~~ cs
double f = UnitsConversions.CelsiusToFahrenheit(25);
// Expected result:
// 77°F
~~~
VB
~~~ vb
Dim f As Double = UnitsConversions.CelsiusToFahrenheit(25)
' Expected result:
' 77°F
~~~
[Go to top](#unitsconversions)
### d. FahrenheitToCelsius
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.7.2 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ✔ |

</details>

This method allows you to convert Fahrenheit (°F) to Celsius (°C). It returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.UnitsConversions.FahrenheitToCelsius()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | fahrenheit | Number of fahrenheit to convert |

Here's an example of usage:

C#
~~~ cs
double c = UnitsConversions.FahrenheitToCelsius(68);
// Expected result:
// 20°C
~~~
VB
~~~ vb
Dim c As Double = UnitsConversions.FahrenheitToCelsius(68)
' Expected result:
' 20°C
~~~
[Go to top](#unitsconversions)
### e. M3ToLitre
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.7.2 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ✔ |

</details>

This method allows you to convert Cubic meters (m³) to Litre (L). It returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.UnitsConversions.M3ToLitre()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double | m3 | Number of cubic meter(s) to convert |

Here's an example of usage:

C#
~~~ cs
double l = UnitsConversions.M3ToLitre(10);
// Expected result:
// 10000L
~~~
VB
~~~ vb
Dim l As Double = UnitsConversions.M3ToLitre(10)
' Expected result:
' 10000L
~~~
[Go to top](#unitsconversions)
### f. LitreToM3
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Framework | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-------: | :------------: | :-----------------: |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.7.2 | ✔ | ✔ |
| .NET Framework 4.5 | ❌ | ✔ |

</details>

This method allows you to convert Litre (L) to Cubic meters (m³). It returns a ``double`` value.

It's in:
~~~ cs
LeoCorpLibrary.UnitsConversions.LitreToM3()
~~~
This method has one argument:
| Type | Argument | Description | 
| :--: | :-------: | :---------: |
| double |  | Number of mile(s) to convert |

Here's an example of usage:

C#
~~~ cs
double m3 = UnitsConversions.LitreToM3(2500);
// Expected result:
// 2.5 m³
~~~
VB
~~~ vb
Dim m3 As Double = UnitsConversions.LitreToM3(2500)
' Expected result:
' 2.5 m³
~~~
[Go to top](#unitsconversions)