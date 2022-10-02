import{_ as t,o as e,c as s,a as n}from"./app.89131f9d.js";const a={},l=n(`<h1 id="helpers" tabindex="-1"><a class="header-anchor" href="#helpers" aria-hidden="true">#</a> Helpers</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>To use these methods and features, do not forget to put this line of code in your &quot;using&quot; region:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">LeoCorpLibrary</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Imports</span> LeoCorpLibrary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="a-isurlvalid" tabindex="-1"><a class="header-anchor" href="#a-isurlvalid" aria-hidden="true">#</a> a. IsUrlValid</h3><p><strong>This function is available in version 3.11 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr></tbody></table></details><p>The <code>IsUrlValid()</code> method allows you to check if a specified URL is valid or not. It return a <code>double</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>Helpers<span class="token punctuation">.</span><span class="token function">IsUrlValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This method has one argument:</p><table><thead><tr><th style="text-align:center;">Type</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">url</td><td style="text-align:center;">The URL to check</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">bool</span></span> isValid <span class="token operator">=</span> Helpers<span class="token punctuation">.</span><span class="token function">IsUrlValid</span><span class="token punctuation">(</span><span class="token string">&quot;https://leocorporation.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// isValid = true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Dim</span> isValid <span class="token keyword">As</span> <span class="token keyword">Boolean</span> <span class="token operator">=</span> Helpers<span class="token punctuation">.</span>IsUrlValid<span class="token punctuation">(</span><span class="token string">&quot;https://leocorporation.dev/&quot;</span><span class="token punctuation">)</span>
<span class="token comment">&#39; isValid = true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#helpers">Go to top</a></p><h3 id="b-geturlprotocol" tabindex="-1"><a class="header-anchor" href="#b-geturlprotocol" aria-hidden="true">#</a> b. GetUrlProtocol</h3><p><strong>This function is available in version 3.11 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr></tbody></table></details><p>The <code>GetUrlProtocol()</code> method allows you to get the protocol of an URL. It returns a <code>string</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>Helpers<span class="token punctuation">.</span><span class="token function">GetUrlProtocol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This method has one argument:</p><table><thead><tr><th style="text-align:center;">Type</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">url</td><td style="text-align:center;">The URL to parse</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">string</span></span> protocol <span class="token operator">=</span> Helpers<span class="token punctuation">.</span><span class="token function">GetUrlProtocol</span><span class="token punctuation">(</span><span class="token string">&quot;https://leocorporation.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// protocol = &quot;https&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Dim</span> protocol <span class="token keyword">As</span> <span class="token keyword">String</span> <span class="token operator">=</span> Helpers<span class="token punctuation">.</span>GetUrlProtocol<span class="token punctuation">(</span><span class="token string">&quot;https://leocorporation.dev/&quot;</span><span class="token punctuation">)</span>
<span class="token comment">&#39; protocol = &quot;https&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#helpers">Go to top</a></p><h3 id="c-isurlhttps" tabindex="-1"><a class="header-anchor" href="#c-isurlhttps" aria-hidden="true">#</a> c. IsUrlHttps</h3><p><strong>This function is available in version 3.11 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr></tbody></table></details><p>The <code>IsUrlHttps()</code> method allows you to check if the URL&#39;s protocol is equal to &quot;https&quot;. It return a <code>bool</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>Helpers<span class="token punctuation">.</span><span class="token function">IsUrlHttps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This method has one argument:</p><table><thead><tr><th style="text-align:center;">Type</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">url</td><td style="text-align:center;">The URL to check</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token class-name"><span class="token keyword">bool</span></span> isHttps <span class="token operator">=</span> Helpers<span class="token punctuation">.</span><span class="token function">IsUrlHttps</span><span class="token punctuation">(</span><span class="token string">&quot;https://leocorporation.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// isHttps = true</span>

<span class="token class-name"><span class="token keyword">bool</span></span> isHttps2 <span class="token operator">=</span> Helpers<span class="token punctuation">.</span><span class="token function">IsUrlHttps</span><span class="token punctuation">(</span><span class="token string">&quot;http://leocorporation.dev/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// isHttp2s = false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Dim</span> isHttps <span class="token keyword">As</span> <span class="token keyword">Boolean</span> <span class="token operator">=</span> Helpers<span class="token punctuation">.</span>IsUrlHttps<span class="token punctuation">(</span><span class="token string">&quot;https://leocorporation.dev/&quot;</span><span class="token punctuation">)</span>
<span class="token comment">&#39; isHttps = true</span>

<span class="token keyword">Dim</span> isHttps2 <span class="token keyword">As</span> <span class="token keyword">Boolean</span> <span class="token operator">=</span> Helpers<span class="token punctuation">.</span>IsUrlHttps<span class="token punctuation">(</span><span class="token string">&quot;http://leocorporation.dev/&quot;</span><span class="token punctuation">)</span>
<span class="token comment">&#39; isHttp2s = false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#helpers">Go to top</a></p>`,50),o=[l];function r(i,p){return e(),s("div",null,o)}const d=t(a,[["render",r],["__file","Helpers.html.vue"]]);export{d as default};
