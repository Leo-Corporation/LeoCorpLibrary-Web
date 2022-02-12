---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# UI
## Introduction
To use these methods and features, do not forget to put this line of code in your "using" region:

C#
~~~ cs
using LeoCorpLibrary.UI;
~~~
VB
~~~ vb
Imports LeoCorpLibrary.UI
~~~
## WinFormsHelpers
### a. CenterControlOnForm
**This function is available in version 2.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `CenterControlOnForm()` method allows you to center a `Control` inside a `Form`.

It's in:
~~~ cs
LeoCorpLibrary.UI.WinFormsHelpers.CenterControlOnForm()
~~~

It has two variations:

**Variation 1**
~~~ cs
WinFormsHelpers.CenterControlOnForm(Control control, Form form) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Control | control | The control to center |
| Form  | form | The form where the control is going to be center |

**Variation 2**
~~~ cs
WinFormsHelpers.CenterControlOnForm(Control control, Form form, ControlAlignement controlAlignement) {...}
~~~

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Control | control | The control to center |
| Form  | form | The form where the control is going to be center |
| [ControlAlignement](#controlalignement) | controlAlignement | The alignement of the control (``Vertical``, ``Horizontal`` or ``Both``) |

Here's an example of usage:

C#
~~~ cs
// Variation 1
Label label = new Label();
label.Text = "Hi!";
WinFormsHelpers.CenterControlOnForm(label, this); // "this" is the current object, here, it's a Form

// Variation 2
WinFormsHelpers.CenterControlOnForm(label, this, VerticalAlignement.Vertical); // Center the label vertically
~~~
VB
~~~ vb
' Variation 1
Dim label As Label = New Label()
label.Text = "Hi!"
WinFormsHelpers.CenterControlOnForm(label, Me) ' "Me" is the current object, here, it's a Form

' Variation 2
WinFormsHelpers.CenterControlOnForm(label, this, VerticalAlignement.Vertical) ' Center the label vertically
~~~
[Go to top](#ui)

### b. CenterFormOnScreen
**This function is available in version 2.3 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ✔ |
| .NET 5 | ✔ | ✔ |
| .NET Core 3.1 | ✔ | ✔ |
| .NET Framework 4.5 | ✔ | ✔ |

</details>

The `CenterFormOnScreen()` method allows you to center a `Form` inside the primary `Screen`.

It's in:
~~~ cs
LeoCorpLibrary.UI.WinFormsHelpers.CenterFormOnScreen()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Form | form | The Form to center inside a Screen |

Here's an example of usage:

C#
~~~ cs
WinFormsHelpers.CenterFormOnScreen(this); // Center the form
~~~
VB
~~~ vb
WinFormsHelpers.CenterFormOnScreen(Me) ' Center the form
~~~
[Go to top](#ui)

## ScreenHelpers
### a. GetScreenDPIFromWinForm
**This function is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `GetScreenDPIFromWinForm()` method allows you to get the current screen DPI from a `System.Windows.Forms.Form`. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.UI.ScreenHelpers.GetScreenDPIFromWinForm()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Form | form | The Form to get the DPI of |

Here's an example of usage:

C#
~~~ cs
ScreenHelpers.GetScreenDPIFromWinForm(this); // Get the screen DPI
~~~
VB
~~~ vb
ScreenHelpers.GetScreenDPIFromWinForm(Me) ' Get the screen DPI
~~~
[Go to top](#ui)

### b. GetScreenDPIFromWPFWindow
**This function is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `GetScreenDPIFromWPFWindow()` method allows you to get the current screen DPI from a `System.Windows.Window`. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.UI.ScreenHelpers.GetScreenDPIFromWPFWindow()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Window | window | The window to get the DPI of |

Here's an example of usage:

C#
~~~ cs
ScreenHelpers.GetScreenDPIFromWPFWindow(this); // Get the screen DPI
~~~
VB
~~~ vb
ScreenHelpers.GetScreenDPIFromWPFWindow(Me) ' Get the screen DPI
~~~
[Go to top](#ui)

### c. GetScreenScalingFromWinForm
**This function is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |


</details>

The `GetScreenScalingFromWinForm()` method allows you to get the current screen scale from a `System.Windows.Forms.Form`. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.UI.ScreenHelpers.GetScreenScalingFromWinForm()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Form | form | The form to get the scale of |

Here's an example of usage:

C#
~~~ cs
ScreenHelpers.GetScreenScalingFromWinForm(this); // Get the screen scale
~~~
VB
~~~ vb
ScreenHelpers.GetScreenScalingFromWinForm(Me) ' Get the screen scale
~~~
[Go to top](#ui)

### d. GetScreenScalingFromWPFWindow
**This function is available in version 3.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |


</details>

The `GetScreenScalingFromWPFWindow()` method allows you to get the current screen scale from a `System.Windows.Window`. It returns a `double` value.

It's in:
~~~ cs
LeoCorpLibrary.UI.ScreenHelpers.GetScreenScalingFromWPFWindow()
~~~

It has one argument:

| Value | Argument | Description |
| :----: | :-------: | :---------: |
| Window | window | The window to get the scale of |

Here's an example of usage:

C#
~~~ cs
ScreenHelpers.GetScreenScalingFromWPFWindow(this); // Get the screen scale
~~~
VB
~~~ vb
ScreenHelpers.GetScreenScalingFromWPFWindow(Me) ' Get the screen scale
~~~
[Go to top](#ui)

## ControlAlignement
``ControlAlignement`` is an enumeration which has three elements:
- Horizontal
- Vertical
- Both

This enumeration can be used in the [``CenterControlOnForm()``](#a-centercontrolonform) method.


[Go to top](#ui)