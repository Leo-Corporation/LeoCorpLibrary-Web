@echo off
npx vuepress build -d ../docs && powershell New-Item -Path ./../docs -Name "CNAME" -ItemType "file" -Value "leocorplibrary.leocorporation.dev" &&  copy sitemap.xml ../docs/sitemap.xml