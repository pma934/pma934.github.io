@echo off
cd C:\Users\Hp\Desktop\dist
git add --all
set /a r=%random%
git commit -m '%r%'
git push origin master