---
footer: MIT Licensed | Copyright © 2021 Léo Corporation and contributors
---
# Save
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
Here's how the Save system works:

1. The system is going to separate the elements with a separator which is by default `(*E*)`.
2. The system is going to separate the elements' columns with a separator which is by default `(*C*)`
3. The system save this content in a specified file.

Here's an example of a file:
~~~
Test1(*C*)Test2(*C*)Test3(*E*)Test4(*C*)Test5(*C*)Test6(*E*)Test7(*C*)Test7(*C*)Test8(*E*)
~~~
::: tip Note
You can save the file in any formats, even custom ones: The system doesn't care.
:::

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

The `ListViewContentCustom()` method enables you to save the content of a ListView.
We recommand that you use these following parameters for your ListView:

- ``Details`` vue mode
- ``FullRowSelect`` = true

There is two variations of the method:

**Variation 1**
~~~ cs
Save.ListViewContentCustom(ListView listview, string filePath) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| ListView | listView | ListView where it's content needs to be saved |
| string | filePath | File location where to save the ListView's content |

**Variation 2**
~~~ cs
Save.ListViewContentCustom(ListView listView, string filePath, string itemSplit, string columnSplit) {...}
~~~
| Value | Argument | Description |
| :----: | :-------: | :---------: |
| ListView | listView | ListView where it's content needs to be saved |
| string | filePath | File location where to save the ListView's content |
| string | itemSplit | Elements separator |
| string | columnSplit | Columns separator |

Here's an example of usage:

C#
~~~ cs
// Variation 1
Save.ListViewContentCustom(listView1, @"C:\content.txt");

// Variation 2
Save.ListViewContentCustom(listView1, @"C:\content.txt", "/*E*/", "/*C*/");
~~~
VB
~~~ vb
' Variation 1
Save.ListViewContentCustom(ListView1, "C:/content.txt")

' Variation 2
Save.ListViewContentCustom(ListVew1, "C:/content.txt", "/*E*/", "/*C*/")
~~~
[Go to top](#save)
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

The `ListViewContentXML()` method allows you to save a listview's content into a XML file.
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
Save.ListViewContentXML(listView1, "C:/test.xml");
~~~
VB
~~~ vb
Save.ListViewContentXML(listView1, "C:/test.xml")
~~~
Imput:
| Column 1 | Column 2 | Column 3 |
| :------: | :------: | :------: |
| Test 1 | Test 2 | Test 3 |
| Test 4 | Test 5 | Test 6 |
| Test 7 | Test 8 | Test 9 |

Expected Output:
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
    <string>Test8</string>
    <string>Test9</string>
  </ArrayOfString>
</ArrayOfArrayOfString>
~~~
[Go to top](#save)

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

The `ListViewContentJSON()` method allows you to save a listview's content.
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
Save.ListViewContentJSON(listView1, "C:/test.json");
~~~
VB
~~~ vb
Save.ListViewContentJSON(listView1, "C:/test.json")
~~~
Imput:
| Column 1 | Column 2 | Column 3 |
| :------: | :------: | :------: |
| Test 1 | Test 2 | Test 3 |
| Test 4 | Test 5 | Test 6 |
| Test 7 | Test 8 | Test 9 |

Expected Output:
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
        "Test8",
        "Test9"
    ]
]
~~~
[Go to top](#save)