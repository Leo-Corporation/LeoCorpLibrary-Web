---
home: true
heroText: LeoCorpLibrary
heroImage: /logo.png
tagline: A C# library with useful features for .NET Applications.
actions:
  - text: Get Started →
    link: /Install-LeoCorpLibrary
    type: primary
  - text: Reference
    link: /Reference
    type: secondary
features:
- title: Easy-to-use
  details: Using LeoCorpLibrary in a project is very easy and intuitive.
- title: Cross-Platform
  details: LeoCorpLibrary.Core can be used on any operating system supported by .NET. This means you can run the same code on Windows, Linux, and macOS.
- title: .NET Powered
  details: LeoCorpLibrary is available for .NET Framework 4.5+, .NET Core 3.1, .NET 5 and .NET 6.
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
sidebar: auto
---
# Welcome to LeoCorpLibrary
## Introduction
Welcome to LeoCorpLibrary's documentation. You will find here all the documentation of LeoCorpLibrary and LeoCorpLibrary.Core.

## Installation
[Learn more](/install-LeoCorpLibrary) about installation steps.

:::: code-group
::: code-group-item .NET CLI
~~~ powershell:no-line-numbers
dotnet add package LeoCorpLibrary --version 4.9.0.2208
~~~
:::

::: code-group-item Package Manager
~~~ sh:no-line-numbers
NuGet\Install-Package LeoCorpLibrary -Version 4.9.0.2208
~~~
:::

::: code-group-item PackageReference
~~~ xml:no-line-numbers
<PackageReference Include="LeoCorpLibrary" Version="4.9.0.2208" />
~~~
:::
::::

## What you need to know
The `LeoCorpLibrary` package is only available for Windows devices whereas the `LeoCorpLibrary.Core` package is available for all platforms.

In this documentation, there are some symbols that might be used to specify the compatibility of a method, function or other:

| Symbol | Signification |
| :----: | :-----------: |
| ✔ | Available |
| ❌ | Not available |
| ⚠ | Partially available |

## Breaking change with version 4.4
If you're upgrading from an older version of LeoCorpLibrary to version 4.4, you need to be aware of this change:

To use any enumeration, you'll need to import the `LeoCorpLibrary.Enums` namespace if you are using LeoCorpLibrary or the `LeoCorpLibrary.Core.Enums` namespace if you are using LeoCorpLibrary.Core.

## Documentation

### Get Started
- [1. Add the library to a project](/install-LeoCorpLibrary#1-add-the-library-to-a-project)
- [2. Start coding](/install-LeoCorpLibrary#2-start-coding)


### Functions
* [ColorsConverter](/Colors-converter)
* [Check updates](/Check-for-updates)
* [Crypt](/Crypt)
* [Environment](/Environment)
* [Extensions](/Extensions)
* [Generate a Guid](/Generate-a-Guid)
* [Generate a password](/Generate-a-password)
* [Helpers](/Helpers)
* [Load a file](/Load-a-file)
* [Logger](/Logger)
* [Mathematics functions](/Mathematics-functions)
* [NetworkConnection](/Verify-an-internet-connection)
* [Save a file](/Save-in-a-file)
* [Units Conversions](/Units-conversions)
* [User Interface](/User-Interface)


## Miscellaneous
* [Changes related to version 1.4](/Changes-related-to-version-1.4)
* [Compatibility](/Compatibility)
* [Enums](/Enums)
* [Exceptions](/Exceptions)