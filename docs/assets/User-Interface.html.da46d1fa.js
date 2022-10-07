import{_ as e,o as t,c as n,a}from"./app.397e6efa.js";const s={},r=a(`<h1 id="ui" tabindex="-1"><a class="header-anchor" href="#ui" aria-hidden="true">#</a> UI</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>To use these methods and features, do not forget to put this line of code in your &quot;using&quot; region:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">LeoCorpLibrary<span class="token punctuation">.</span>UI</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token keyword">Imports</span> LeoCorpLibrary<span class="token punctuation">.</span>UI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="winformshelpers" tabindex="-1"><a class="header-anchor" href="#winformshelpers" aria-hidden="true">#</a> WinFormsHelpers</h2><h3 id="a-centercontrolonform" tabindex="-1"><a class="header-anchor" href="#a-centercontrolonform" aria-hidden="true">#</a> a. CenterControlOnForm</h3><p><strong>This function is available in version 2.3 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr></tbody></table></details><p>The <code>CenterControlOnForm()</code> method allows you to center a <code>Control</code> inside a <code>Form</code>.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterControlOnForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It has two variations:</p><p><strong>Variation 1</strong></p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterControlOnForm</span><span class="token punctuation">(</span><span class="token class-name">Control</span> control<span class="token punctuation">,</span> <span class="token class-name">Form</span> form<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Control</td><td style="text-align:center;">control</td><td style="text-align:center;">The control to center</td></tr><tr><td style="text-align:center;">Form</td><td style="text-align:center;">form</td><td style="text-align:center;">The form where the control is going to be center</td></tr></tbody></table><p><strong>Variation 2</strong></p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterControlOnForm</span><span class="token punctuation">(</span><span class="token class-name">Control</span> control<span class="token punctuation">,</span> <span class="token class-name">Form</span> form<span class="token punctuation">,</span> <span class="token class-name">ControlAlignment</span> controlAlignment<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Control</td><td style="text-align:center;">control</td><td style="text-align:center;">The control to center</td></tr><tr><td style="text-align:center;">Form</td><td style="text-align:center;">form</td><td style="text-align:center;">The form where the control is going to be center</td></tr><tr><td style="text-align:center;"><a href="#controlalignment">ControlAlignment</a></td><td style="text-align:center;">controlAlignment</td><td style="text-align:center;">The alignment of the control (<code>Vertical</code>, <code>Horizontal</code> or <code>Both</code>)</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token comment">// Variation 1</span>
<span class="token class-name">Label</span> label <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Label</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
label<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">;</span>
WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterControlOnForm</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;this&quot; is the current object, here, it&#39;s a Form</span>

<span class="token comment">// Variation 2</span>
WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterControlOnForm</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">,</span> VerticalAlignment<span class="token punctuation">.</span>Vertical<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Center the label vertically</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code><span class="token comment">&#39; Variation 1</span>
<span class="token keyword">Dim</span> label <span class="token keyword">As</span> Label <span class="token operator">=</span> <span class="token keyword">New</span> Label<span class="token punctuation">(</span><span class="token punctuation">)</span>
label<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">&quot;Hi!&quot;</span>
WinFormsHelpers<span class="token punctuation">.</span>CenterControlOnForm<span class="token punctuation">(</span>label<span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">)</span> <span class="token comment">&#39; &quot;Me&quot; is the current object, here, it&#39;s a Form</span>

<span class="token comment">&#39; Variation 2</span>
WinFormsHelpers<span class="token punctuation">.</span>CenterControlOnForm<span class="token punctuation">(</span>label<span class="token punctuation">,</span> this<span class="token punctuation">,</span> VerticalAlignment<span class="token punctuation">.</span>Vertical<span class="token punctuation">)</span> <span class="token comment">&#39; Center the label vertically</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="#ui">Go to top</a></p><h3 id="b-centerformonscreen" tabindex="-1"><a class="header-anchor" href="#b-centerformonscreen" aria-hidden="true">#</a> b. CenterFormOnScreen</h3><p><strong>This function is available in version 2.3 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u2714</td></tr></tbody></table></details><p>The <code>CenterFormOnScreen()</code> method allows you to center a <code>Form</code> inside the primary <code>Screen</code>.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterFormOnScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It has one argument:</p><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Form</td><td style="text-align:center;">form</td><td style="text-align:center;">The Form to center inside a Screen</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>WinFormsHelpers<span class="token punctuation">.</span><span class="token function">CenterFormOnScreen</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Center the form</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code>WinFormsHelpers<span class="token punctuation">.</span>CenterFormOnScreen<span class="token punctuation">(</span><span class="token keyword">Me</span><span class="token punctuation">)</span> <span class="token comment">&#39; Center the form</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="#ui">Go to top</a></p><h2 id="screenhelpers" tabindex="-1"><a class="header-anchor" href="#screenhelpers" aria-hidden="true">#</a> ScreenHelpers</h2><h3 id="a-getscreendpifromwinform" tabindex="-1"><a class="header-anchor" href="#a-getscreendpifromwinform" aria-hidden="true">#</a> a. GetScreenDPIFromWinForm</h3><p><strong>This function is available in version 3.7 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr></tbody></table></details><p>The <code>GetScreenDPIFromWinForm()</code> method allows you to get the current screen DPI from a <code>System.Windows.Forms.Form</code>. It returns a <code>double</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenDPIFromWinForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It has one argument:</p><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Form</td><td style="text-align:center;">form</td><td style="text-align:center;">The Form to get the DPI of</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenDPIFromWinForm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get the screen DPI</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code>ScreenHelpers<span class="token punctuation">.</span>GetScreenDPIFromWinForm<span class="token punctuation">(</span><span class="token keyword">Me</span><span class="token punctuation">)</span> <span class="token comment">&#39; Get the screen DPI</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="#ui">Go to top</a></p><h3 id="b-getscreendpifromwpfwindow" tabindex="-1"><a class="header-anchor" href="#b-getscreendpifromwpfwindow" aria-hidden="true">#</a> b. GetScreenDPIFromWPFWindow</h3><p><strong>This function is available in version 3.7 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr></tbody></table></details><p>The <code>GetScreenDPIFromWPFWindow()</code> method allows you to get the current screen DPI from a <code>System.Windows.Window</code>. It returns a <code>double</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenDPIFromWPFWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It has one argument:</p><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Window</td><td style="text-align:center;">window</td><td style="text-align:center;">The window to get the DPI of</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenDPIFromWPFWindow</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get the screen DPI</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code>ScreenHelpers<span class="token punctuation">.</span>GetScreenDPIFromWPFWindow<span class="token punctuation">(</span><span class="token keyword">Me</span><span class="token punctuation">)</span> <span class="token comment">&#39; Get the screen DPI</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="#ui">Go to top</a></p><h3 id="c-getscreenscalingfromwinform" tabindex="-1"><a class="header-anchor" href="#c-getscreenscalingfromwinform" aria-hidden="true">#</a> c. GetScreenScalingFromWinForm</h3><p><strong>This function is available in version 3.7 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr></tbody></table></details><p>The <code>GetScreenScalingFromWinForm()</code> method allows you to get the current screen scale from a <code>System.Windows.Forms.Form</code>. It returns a <code>double</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenScalingFromWinForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It has one argument:</p><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Form</td><td style="text-align:center;">form</td><td style="text-align:center;">The form to get the scale of</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenScalingFromWinForm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get the screen scale</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code>ScreenHelpers<span class="token punctuation">.</span>GetScreenScalingFromWinForm<span class="token punctuation">(</span><span class="token keyword">Me</span><span class="token punctuation">)</span> <span class="token comment">&#39; Get the screen scale</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="#ui">Go to top</a></p><h3 id="d-getscreenscalingfromwpfwindow" tabindex="-1"><a class="header-anchor" href="#d-getscreenscalingfromwpfwindow" aria-hidden="true">#</a> d. GetScreenScalingFromWPFWindow</h3><p><strong>This function is available in version 3.7 and higher.</strong></p><details><summary>Compatibility</summary><table><thead><tr><th style="text-align:center;">Frameworks</th><th style="text-align:center;">LeoCorpLibrary</th><th style="text-align:center;">LeoCorpLibrary.Core</th></tr></thead><tbody><tr><td style="text-align:center;">.NET 6</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET 5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Core 3.1</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr><tr><td style="text-align:center;">.NET Framework 4.5</td><td style="text-align:center;">\u2714</td><td style="text-align:center;">\u274C</td></tr></tbody></table></details><p>The <code>GetScreenScalingFromWPFWindow()</code> method allows you to get the current screen scale from a <code>System.Windows.Window</code>. It returns a <code>double</code> value.</p><p>It&#39;s in:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>LeoCorpLibrary<span class="token punctuation">.</span>UI<span class="token punctuation">.</span>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenScalingFromWPFWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It has one argument:</p><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Argument</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">Window</td><td style="text-align:center;">window</td><td style="text-align:center;">The window to get the scale of</td></tr></tbody></table><p>Here&#39;s an example of usage:</p><p>C#</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>ScreenHelpers<span class="token punctuation">.</span><span class="token function">GetScreenScalingFromWPFWindow</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Get the screen scale</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>VB</p><div class="language-vb ext-vb line-numbers-mode"><pre class="language-vb"><code>ScreenHelpers<span class="token punctuation">.</span>GetScreenScalingFromWPFWindow<span class="token punctuation">(</span><span class="token keyword">Me</span><span class="token punctuation">)</span> <span class="token comment">&#39; Get the screen scale</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="#ui">Go to top</a></p><h2 id="controlalignment" tabindex="-1"><a class="header-anchor" href="#controlalignment" aria-hidden="true">#</a> ControlAlignment</h2><p><code>ControlAlignment</code> is an enumeration which has three elements:</p><ul><li>Horizontal</li><li>Vertical</li><li>Both</li></ul><p>This enumeration can be used in the <a href="#a-centercontrolonform"><code>CenterControlOnForm()</code></a> method.</p><p><a href="#ui">Go to top</a></p>`,103),o=[r];function l(c,i){return t(),n("div",null,o)}const d=e(s,[["render",l],["__file","User-Interface.html.vue"]]);export{d as default};