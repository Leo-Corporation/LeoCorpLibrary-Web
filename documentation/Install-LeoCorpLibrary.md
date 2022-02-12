---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Install LeoCorpLibrary
## Using Visual Studio
### 1. Add the library to a project
[Click here](https://www.youtube.com/watch?v=Xdxqnl2g5qE) to see the suport video.

If you wanna add LeoCorpLibrary, follow this steps:

1. In Solution Explorer, right click to the project where you wanna add LeoCorpLibrary.

2. Click on the "Manage NuGet Packages" menu.

![Package Nuget](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135109.png)


3. A new tab has opened: make sure that your are in the "Browse" tab, and search "LeoCorpLibrary", and then, click on the first result.

![Rechercher le package NuGet](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135455.png)

4. On the right, a panel opened: it shows all the informations about the package. Click on the "Install" button.

![Installer](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135606.png)

5. A new window has opened, click on "OK". A second window may popup asking to accept the license. If it's the case, click on "I accept".

![OK](https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation%202020-05-08%20135839.png)

The reference ``LeoCorpLibrary`` has been aded to the project. You can verify this by opening the `Reference` or `Dependencies` item in Solution Explorer.

### 2. Start Coding
To call methods and use other features of LeoCorpLibrary, please add the following code in your `using` region (on top of the file).

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~

If you are using LeoCorpLibrary.Core, you need to adapt the code:

C#
~~~ cs
using LeoCorpLibrary.Core;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~

::: tip Note
In the most recent versions of Visual Studio, IntelliSense automatically import the reference to your code if you type the name of a class or of a namespace.
:::

Check out the [reference](/Reference) to get started.
## Using .NET CLI
You can also install LeoCorpLibrary using the [.NET CLI](https://docs.microsoft.com/en-us/dotnet/core/tools/).
Type in a command line window (cmd, bash...) the following command:
~~~ sh
dotnet add package LeoCorpLibrary --version 3.10.0.2109
~~~

If you are working with a solution with multiple projects, you may wanna use the command below:
~~~ sh
dotnet add <PROJECT> package LeoCorpLibrary --version 3.10.0.2109
~~~

::: tip Note
Replace `<PROJECT>` with the path to your project file.
:::

And that's it! You have sucessfully installed LeoCorpLibrary for your project!

## Using PackageReference with .NET Core
To add a NuGet package in your project, you can follow these steps:
1. Locate the `.csproj` file of your project.
2. Open it in a text editor.
3. Add an `ItemGroup` in the file (after the `PropertyGroup`) with the following synthax:
~~~ xml
<ItemGroup>
    <PackageReference Include="LeoCorpLibrary" Version="3.9.0.2108" />
</ItemGroup>
~~~
4. You can restore the project/solution by running the following commands:
~~~ sh
dotnet restore <PROJECT>
~~~
Or
~~~ sh
nuget restore <PROJECT>
~~~

::: tip Note
Replace `<PROJECT>` with the path to your project file.
:::