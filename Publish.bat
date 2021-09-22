@echo off
git pull
git add .
git commit -m "Deployed"
git push
echo Published!
PAUSE