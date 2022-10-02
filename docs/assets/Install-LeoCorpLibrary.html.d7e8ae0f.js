import{_ as t,r,o as i,c,b as a,d as e,e as o,a as n}from"./app.89131f9d.js";const p={},l=n('<h1 id="install-leocorplibrary" tabindex="-1"><a class="header-anchor" href="#install-leocorplibrary" aria-hidden="true">#</a> Install LeoCorpLibrary</h1><h2 id="using-visual-studio" tabindex="-1"><a class="header-anchor" href="#using-visual-studio" aria-hidden="true">#</a> Using Visual Studio</h2><h3 id="_1-add-the-library-to-a-project" tabindex="-1"><a class="header-anchor" href="#_1-add-the-library-to-a-project" aria-hidden="true">#</a> 1. Add the library to a project</h3>',3),d={href:"https://www.youtube.com/watch?v=Xdxqnl2g5qE",target:"_blank",rel:"noopener noreferrer"},u=n(`<p>If you wanna add LeoCorpLibrary, follow this steps:</p><ol><li><p>In Solution Explorer, right click to the project where you wanna add LeoCorpLibrary.</p></li><li><p>Click on the &quot;Manage NuGet Packages&quot; menu.</p></li></ol><p><img src="https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation 2020-05-08 135109.png" alt="NuGet package"></p><ol start="3"><li>A new tab has opened: make sure that your are in the &quot;Browse&quot; tab, and search &quot;LeoCorpLibrary&quot;, and then, click on the first result.</li></ol><p><img src="https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation 2020-05-08 135455.png" alt="Find the NuGet package"></p><ol start="4"><li>On the right, a panel opened: it shows all information about the package. Click on the &quot;Install&quot; button.</li></ol><p><img src="https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation 2020-05-08 135606.png" alt="Install"></p><ol start="5"><li>A new window has opened, click on &quot;OK&quot;. A second window may popup asking to accept the license. If it&#39;s the case, click on &quot;I accept&quot;.</li></ol><p><img src="https://raw.githubusercontent.com/Leo-Corporation/LeoCorp-Docs/master/Documentation/Images/LeoCorpLibrary/Annotation 2020-05-08 135839.png" alt="OK"></p><p>The reference <code>LeoCorpLibrary</code> has been added to the project. You can verify this by opening the <code>Reference</code> or <code>Dependencies</code> item in Solution Explorer.</p><h3 id="_2-start-coding" tabindex="-1"><a class="header-anchor" href="#_2-start-coding" aria-hidden="true">#</a> 2. Start Coding</h3><p>To call methods and use other features of LeoCorpLibrary, please add the following code in your <code>using</code> region (on top of the file).</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">LeoCorpLibrary</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Imports</span> LeoCorpLibrary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are using LeoCorpLibrary.Core, you need to adapt the code:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">LeoCorpLibrary<span class="token punctuation">.</span>Core</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Imports</span> LeoCorpLibrary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>In the most recent versions of Visual Studio, IntelliSense automatically import the reference to your code if you type the name of a class or of a namespace.</p></div><p>Check out the <a href="/Reference">reference</a> to get started.</p><h2 id="using-net-cli" tabindex="-1"><a class="header-anchor" href="#using-net-cli" aria-hidden="true">#</a> Using .NET CLI</h2>`,24),h={href:"https://docs.microsoft.com/en-us/dotnet/core/tools/",target:"_blank",rel:"noopener noreferrer"},m=n(`<div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>dotnet <span class="token keyword">add</span> package LeoCorpLibrary <span class="token operator">--</span>version <span class="token number">3.10</span><span class="token number">.0</span><span class="token number">.2109</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you are working with a solution with multiple projects, you may wanna use the command below:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>dotnet <span class="token keyword">add</span> <span class="token operator">&lt;</span>PROJECT<span class="token operator">&gt;</span> package LeoCorpLibrary <span class="token operator">--</span>version <span class="token number">3.10</span><span class="token number">.0</span><span class="token number">.2109</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Replace <code>&lt;PROJECT&gt;</code> with the path to your project file.</p></div><p>And that&#39;s it! You have successfully installed LeoCorpLibrary for your project!</p><h2 id="using-packagereference-with-net-core" tabindex="-1"><a class="header-anchor" href="#using-packagereference-with-net-core" aria-hidden="true">#</a> Using PackageReference with .NET Core</h2><p>To add a NuGet package in your project, you can follow these steps:</p><ol><li>Locate the <code>.csproj</code> file of your project.</li><li>Open it in a text editor.</li><li>Add an <code>ItemGroup</code> in the file (after the <code>PropertyGroup</code>) with the following syntax:</li></ol><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PackageReference</span> <span class="token attr-name">Include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LeoCorpLibrary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">Version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3.9.0.2108<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ItemGroup</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>You can restore the project/solution by running the following commands:</li></ol><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>dotnet restore <span class="token operator">&lt;</span>PROJECT<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>nuget restore <span class="token operator">&lt;</span>PROJECT<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p>Replace <code>&lt;PROJECT&gt;</code> with the path to your project file.</p></div>`,14);function g(b,v){const s=r("ExternalLinkIcon");return i(),c("div",null,[l,a("p",null,[a("a",d,[e("Click here"),o(s)]),e(" to see the support video.")]),u,a("p",null,[e("You can also install LeoCorpLibrary using the "),a("a",h,[e(".NET CLI"),o(s)]),e(". Type in a command line window (cmd, bash...) the following command:")]),m])}const y=t(p,[["render",g],["__file","Install-LeoCorpLibrary.html.vue"]]);export{y as default};
