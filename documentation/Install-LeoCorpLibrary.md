---
footer: MIT Licensed | Copyright © 2021 Léo Corporation and contributors
---
# Install LeoCorpLibrary

## 1. Add the library to a project
[Click here](https://www.youtube.com/watch?v=Xdxqnl2g5qE) to see the suport video.

If you wanna add LeoCorpLibrary, follow this steps:

1. In Solution Explorer, right click to the project where you wanna add LeoCorpLibrary.

2. Click on the menu "Manage NuGet Packages"

![Package Nuget](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135109.png)


3. A new tab has opened: make sure that your are in the "Browse" tab, and search "LeoCorpLibrary", and click on the first result

![Rechercher le package NuGet](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135455.png)

4. On the right, a panel opened: it shows all the informations of the package. Click on the "Install" button.

![Installer](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135606.png)

5. A new window has opened, click on "OK". A second window may popup asking to accept the license. If it's the case, click on "I accept".

![OK](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135839.png)

The reference ``LeoCorpLibrary`` has been aded to the project. You can verify this by opening the `Reference` or `Dependencies` item in Solution Explorer.

## 2. Start Coding
To call methods and use other features of LeoCorpLibrary, please add the following code in your `using` region (on top of the file).

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~

::: tip Note
In the most recent versions of Visual Studio, IntelliSense automatically import the reference to your code if you type the name of a class or of a namespace.
:::