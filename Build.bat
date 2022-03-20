@echo off
vuepress build documentation -d docs && powershell New-Item -Path ./docs -Name "CNAME" -ItemType "file" -Value "leocorplibrary.leocorporation.dev"
cd documentation
copy sitemap.xml ..\docs