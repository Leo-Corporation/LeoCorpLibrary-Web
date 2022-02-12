---
footer: MIT Licensed | Copyright © 2022 Léo Corporation and contributors
---
# Load
## Introduction
::: warning Warning
We recommand that you use either [`ListViewContentXML`](#b-listviewcontentxml) or [`ListViewContentJson`](#c-listviewcontentjson) instead of our custom system which is old and outdated.
:::
### a. Required configuration

To use the following methods, you need to use the version 1.7 or higher of LeoCorpLibrary, and put this at the top of your code file:

C#
~~~ cs
using LeoCorpLibrary;
~~~
VB
~~~ vb
Imports LeoCorpLibrary
~~~
### b. How it works
To understand how the system works, read [save system](/save-in-a-file). 

1. The system is going to read the file
2. The system is going to separate the elements
3. The system is going to separate the columns
4. From these informations, it will generate a `ListViewItem`.
5. Then it loads the `ListViewItem` inside the specified ListView.
## Functions
### a. ListViewContentCustom
**This function is available in version 1.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |


</details>

The `ListViewContentCustom()` method enables you to load the content of a ListView from a file.
We recommand that you se these following parameters for your ListView:

- ``Details`` vue mode
- ``FullRowSelect`` = true

There is two variations of the method:

**Variation 1**
~~~ cs
LeoCorpLibrary.Load.ListViewContentCustom(ListView listView1, string filePath) {...}
~~~
| Valeur | Paramètre | Description |
| :----: | :-------: | :---------: |
| ListView | listView | The ListView to load the content to |
| string | filePath | The file location where the content is |

**Variation 2**
~~~ cs
LeoCorpLibrary.Load.ListViewContentCustom(ListView listView1, string filePath, string itemSplit, string columnSplit) {...}
~~~
| Valeur | Paramètre | Description |
| :----: | :-------: | :---------: |
| ListView | listView | ListView to load the content to |
| string | filePath | The file location where the content is |
| string | itemSplit | The element sparator |
| string | columnSplit | The column separator |

Here's an example of usage:

C#
~~~ cs
// Variation 1
LeoCorpLibrary.Load.ListViewContentCustom(listView1, @"C:\content.txt");

// Variation 2
LeoCorpLibrary.Load.ListViewContentCustom(listView1, @"C:\content.txt", "/*E*/", "/*C*/");
~~~
VB
~~~ vb
' Variation 1
LeoCorpLibrary.Load.ListViewContentCustom(ListView1, "C:/content.txt")

' Variation 2
LeoCorpLibrary.Load.ListViewContentCustom(ListVew1, "C:/content.txt", "/*E*/", "/*C*/")
~~~

::: tip Note
In the examples, you might noticed that instead of simply writting `Load.ListViewContentCustom`, it is written `LeoCorpLibrary.Load.ListViewContentCustom`. This because of a conflict with `Load` which is an event in Windows Forms.
:::

[Go to top](#load)
### b. ListViewContentXML
**This function is available in version 2.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ✔ | ❌ |

</details>

The `ListViewContentXML()` method allows you to load a XML file that contains a listview's content.
We recommand that you use these following parameters for your ListView:

- ``Details`` vue mode
- ``FullRowSelect`` = true

It has two arguments:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| ListView | listView | ListView where it's content needs to be saved |
| string | filePath | File location where to save the ListView's content |

Here's an example of usage:

C#
~~~ cs
LeoCorpLibrary.Load.ListViewContentXML(listView1, "C:/test.xml");
~~~
VB
~~~ vb
LeoCorpLibrary.Load.ListViewContentXML(listView1, "C:/test.xml")
~~~
Imput:
~~~ xml
<?xml version="1.0" encoding="utf-8"?>
<ArrayOfArrayOfString xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <ArrayOfString>
    <string>Test1</string>
    <string>Test2</string>
    <string>Test3</string>
  </ArrayOfString>
  <ArrayOfString>
    <string>Test4</string>
    <string>Test5</string>
    <string>Test6</string>
  </ArrayOfString>
  <ArrayOfString>
    <string>Test7</string>
    <string>Test7</string>
    <string>Test8</string>
  </ArrayOfString>
</ArrayOfArrayOfString>
~~~
Expected Output:
| Column 1 | Column 2 | Column 3 |
| :------: | :------: | :------: |
| Test 1 | Test 2 | Test 3 |
| Test 4 | Test 5 | Test 6 |
| Test 8 | Test 8 | Test 9 |

[Go to top](#load)
### c. ListViewContentJSON
**This function is available in version 2.7 and higher.**

<details>
<summary>Compatibility</summary>

| Frameworks | LeoCorpLibrary | LeoCorpLibrary.Core |
| :-----: | :----------------: | :---------------------: |
| .NET 6 | ✔ | ❌ |
| .NET 5 | ✔ | ❌ |
| .NET Core 3.1 | ✔ | ❌ |
| .NET Framework 4.5 | ❌ | ❌ |


</details>

The `ListViewContentJSON()` method allows you to load a listview's content from a JSON file.
We recommand that you use these following parameters for your ListView:

- ``Details`` vue mode
- ``FullRowSelect`` = true

It has two arguments:
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| ListView | listView | ListView where it's content needs to be saved |
| string | filePath | File location where to save the ListView's content |

Here's an example of usage:

C#
~~~ cs
LeoCorpLibrary.Load.ListViewContentJSON(listView1, "C:/test.json");
~~~
VB
~~~ vb
LeoCorpLibrary.Load.ListViewContentJSON(listView1, "C:/test.json")
~~~
Imput:
~~~ json
[
    [
        "Test1",
        "Test2",
        "Test3"
    ],
    [
        "Test4",
        "Test5",
        "Test6"
    ],
    [
        "Test7",
        "Test7",
        "Test8"
    ]
]
~~~
Expected Output:
| Column 1 | Column 2 | Column 3 |
| :------: | :------: | :------: |
| Test 1 | Test 2 | Test 3 |
| Test 4 | Test 5 | Test 6 |
| Test 8 | Test 8 | Test 9 |

[Go to top](#load)