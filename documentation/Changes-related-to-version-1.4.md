---
footer: MIT Licensed | Copyright © 2021 Léo Corporation and contributors
---
# Changes related to version 1.4
## Introduction
The version 1.4 of LeoCorpLibrary has brought new changes to the code organization. This means that you'll have to rewrite the code that you were using.
## What are the changes?
We have modified the classes to be `static`, which means that you will no longer need to use the `new` keyword.

Here's an example:

**Before (C#)**
~~~ cs
new Maths().Sum(1, 2, 2.2);
~~~
**After (C#)**
~~~ cs
Maths.Sum(1, 2, 2.2);
~~~
The same thing applies to Visual Basic:

**Before (Visual Basic)**
~~~ vb
New Maths().Sum(1, 2, 2.2)
~~~
**After (Visual Basic)**
~~~ vb
Maths.Sum(1, 2, 2.2)
~~~
We have also added XML documentation, which means that you can access parts of the documentation directly from your IDE.

If you upgrade from older version of LeoCorpLibrary, your IDE will show you errors tha you'll need to correct. If your code is already adpated to version 1.4, no changes will be needed.