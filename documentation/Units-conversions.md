---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# UnitsConversions
## Introduction
To use these methods and features, do not forget to put this line of code in your "using" region:

C#

~~~ cs
using LeoCorpLibrary;
~~~

VB

~~~ vb
Imports LeoCorpLibrary
~~~
## Methods
## Distances
### a. MilesToKm
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

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

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

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
## Temperatures
### a. CelsiusToFahrenheit
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

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
### b. FahrenheitToCelsius
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

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
## Volumes
### a. M3ToLitre
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

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
### b. LitreToM3
**This function is available in version 3.9 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

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

## Distance
### a. FeetToMeters
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

The `FeetToMeters()` method allows you to convert feet to meters. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversions.FeetToMeters()
~~~
This method has two arguments:

| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | feet | Number of feet to convert | 4 |

Here's an example of usage:

C#

~~~ cs
double meters = UnitsConversions.FeetToMeters(5);
// Expected result: 1.52399999768352
~~~

VB

~~~ vb
Dim meters As Double = UnitsConversions.FeetToMeters(5)
' Expected result: 1.52399999768352
~~~
[Go to top](#unitsconversions)

### b. MetersToFeet
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

The `MetersToFeet()` method allows you to convert meters to feet. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversions.MetersToFeet()
~~~
This method has two arguments:

| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | meters | Number of meters to convert | 8.5 |

Here's an example of usage:

C#

~~~ cs
double feet = UnitsConversions.MetersToFeet(10);
// Expected result: 32.808399
~~~

VB

~~~ vb
Dim feet As Double = UnitsConversions.MetersToFeet(10)
' Expected result: 32.808399
~~~
[Go to top](#unitsconversions)

## Masses
### a. PoundsToKilograms
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

The `PoundsToKilograms()` method allows you to convert pounds to kilograms. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversions.PoundsToKilograms()
~~~
This method has two arguments:

| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | pounds | Number of pounds to convert | 12.4 |

Here's an example of usage:

C#

~~~ cs
double pounds = UnitsConversions.PoundsToKilograms(20);
// Expected result: 9.071847407607567
~~~

VB

~~~ vb
Dim pounds As Double = UnitsConversions.PoundsToKilograms(20)
' Expected result: 9.071847407607567
~~~
[Go to top](#unitsconversions)

### b. KilogramsToPounds
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

The `KilogramsToPounds()` method allows you to convert kilograms to pounds. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversions.KilogramsToPounds()
~~~
This method has two arguments:

| Value | Argument | Description | Example |
| :----: | :-------: | :---------: | :-----: |
| double | kg | Number of kilograms to convert | 12.4 |

Here's an example of usage:

C#

~~~ cs
double kg = UnitsConversions.KilogramsToPounds(14.5);
// Expected result: 31.96702799
~~~

VB

~~~ vb
Dim kg As Double = UnitsConversions.KilogramsToPounds(14.5)
' Expected result: 31.96702799
~~~
[Go to top](#unitsconversions)

## Time
### a. TimeUnitToSeconds
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

The `TimeUnitToSeconds` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to seconds.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversionsTimeUnitToSeconds()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| double | d | The time to convert |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 10; // Minutes
double tSeconds = UnitsConversions.TimeUnitToSeconds(t, TimeUnits.Minutes);

// tSeconds = 600
~~~

VB

~~~ vb
Dim t As Double = 10 ' Minutes
Dim tSeconds As Double = UnitsConversions.TimeUnitToSeconds(t, TimeUnits.Minutes)

' tSeconds = 600
~~~
[Go to top](#unitsconversions)

### b. TimeUnitToMinutes
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

The `TimeUnitToMinutes` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to minutes.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversionsTimeUnitToMinutes()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| double | d | The time to convert |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 1; // Hours
double tMinutes = UnitsConversions.TimeUnitToMinutes(t, TimeUnits.Minutes);

// tMinutes = 60
~~~

VB

~~~ vb
Dim t As Double = 1 ' Hours
Dim tMinutes As Double = UnitsConversions.TimeUnitToMinutes(t, TimeUnits.Minutes)

' tMinutes = 60
~~~
[Go to top](#unitsconversions)

### c. TimeUnitToHours
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

The `TimeUnitToHours` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to hours.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversionsTimeUnitToHours()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| double | d | The time to convert |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 120; // Minutes
double tHours = UnitsConversions.TimeUnitToHours(t, TimeUnits.Minutes);

// tHours = 2
~~~

VB

~~~ vb
Dim t As Double = 120 ' Minutes
Dim tHours As Double = UnitsConversions.TimeUnitToHours(t, TimeUnits.Minutes)

' tHours = 2
~~~
[Go to top](#unitsconversions)

### d. TimeUnitToDays
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

The `TimeUnitToDays` methods allows you to convert any `double` number that represent a [time unit](/Enums.html#b-timeunits) (hours, days...) to days.

It's in:

~~~ cs
LeoCorpLibrary.UnitsConversionsTimeUnitToDays()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| double | d | The time to convert |
| [``TimeUnits``](/Enums.html#b-timeunits) | timeUnits | The time unit (seconds, hours...) of the number to convert. |

Here's an example of usage:

C#

~~~ cs
double t = 72; // Hours
double tDays = UnitsConversions.TimeUnitToDays(t, TimeUnits.Hours);

// tDays = 3
~~~

VB

~~~ vb
Dim t As Double = 72 ' Hours
Dim tDays As Double = UnitsConversions.TimeUnitToDays(t, TimeUnits.Hours)

' tDays = 3
~~~
[Go to top](#unitsconversions)

## Data and Storage
### a. SizeUnitToByte
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

The `SizeUnitToByte()` method allows you to convert a size unit such as kilobyte, gigabyte to byte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.SizeUnitToByte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | i | The amount of storage to convert
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int kiloByte = 5000;
double byteVar = kiloByte.SizeUnitToByte(kiloByte, UnitType.Kilobyte);

// Expected value for byteVar: 5000000
~~~

VB

~~~ vb
Dim kiloByte As Integer = 5000
Dim byteVar As Double = kiloByte.SizeUnitToByte(kiloByte, UnitType.Kilobyte)

' Expected value for byteVar: 5000000
~~~
[Go to top](#unitsconversions)

### b. SizeUnitToKilobyte
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

The `SizeUnitToKilobyte()` method allows you to convert a size unit such as kilobyte, gigabyte to kilobyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.SizeUnitToKilobyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | i | The amount of storage to convert
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int megaByte = 50;
double kiloByte = megaByte.SizeUnitToKilobyte(megaByte, UnitType.Megabyte);

// Expected value for kiloByte: 50000
~~~

VB

~~~ vb
Dim megaByte As Integer = 50
Dim kiloByte As Double = megaByte.SizeUnitToKilobyte(megaByte, UnitType.Megabyte)

' Expected value for kiloByte: 50000
~~~
[Go to top](#unitsconversions)

### c. SizeUnitToMegabyte
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

The `SizeUnitToMegabyte()` method allows you to convert a size unit such as megabyte, gigabyte to megabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.SizeUnitToMegabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | i | The amount of storage to convert
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int gigaByte = 50;
double megaByte = gigaByte.SizeUnitToMegabyte(gigaByte, UnitType.Gigabyte);

// Expected value for megaByte: 50000
~~~

VB

~~~ vb
Dim gigaByte As Integer = 50
Dim megaByte As Double = gigaByte.SizeUnitToMegabyte(gigaByte, UnitType.Gigabyte)

' Expected value for megaByte: 50000
~~~
[Go to top](#unitsconversions)

### d. SizeUnitToGigabyte
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

The `SizeUnitToGigabyte()` method allows you to convert a size unit such as megabyte, petabyte to gigabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.SizeUnitToGigabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | i | The amount of storage to convert
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int megaByte = 4400;
double gigaByte = megaByte.SizeUnitToGigabyte(megaByte, UnitType.Megabyte);

// Expected value for gigaByte: 4
~~~

VB

~~~ vb
Dim megaByte As Integer = 4400
Dim gigaByte As Double = megaByte.SizeUnitToGigabyte(megaByte, UnitType.Megabyte)

' Expected value for gigaByte: 4
~~~
[Go to top](#unitsconversions)

### e. SizeUnitToTerabyte
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

The `SizeUnitToTerabyte()` method allows you to convert a size unit such as megabyte, petabyte to terabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.SizeUnitToTerabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | i | The amount of storage to convert
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int gigaByte = 2000;
double teraByte = gigaByte.SizeUnitToTerabyte(gigaByte, UnitType.Gigabyte);

// Expected value for teraByte: 2
~~~

VB

~~~ vb
Dim gigaByte As Integer = 2000
Dim teraByte As Double = gigaByte.SizeUnitToTerabyte(gigaByte, UnitType.Gigabyte)

' Expected value for teraByte: 2
~~~

[Go to top](#unitsconversions)

### f. SizeUnitToPetabyte
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

The `SizeUnitToPetabyte()` method allows you to convert a size unit such as megabyte, terabyte to petabyte. It returns a `double` value.

It's in:

~~~ cs
LeoCorpLibrary.Extensions.IntExtensions.SizeUnitToPetabyte()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| int | i | The amount of storage to convert
| UnitType | unitType | The source unit (kb, mb...) |

Here's an example of usage:

C#

~~~ cs
int teraByte = 6000;
double petaByte = teraByte.SizeUnitToPetabyte(teraByte, UnitType.Terabyte);

// Expected value for petaByte: 6
~~~

VB

~~~ vb
Dim teraByte As Integer = 6000
Dim petaByte As Double = teraByte.SizeUnitToPetabyte(teraByte, UnitType.Terabyte)

' Expected value for petaByte: 6
~~~

[Go to top](#unitsconversions)