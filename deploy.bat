@echo off
cd /d e:\github\loko-space
copy /Y index_patched.html index.html
powershell -Command "(Get-Content data.js -Raw) -replace '\"showWatermark\":true','\"showWatermark\":false' -replace '\"showGDevelopSplash\":true','\"showGDevelopSplash\":false' -replace '\"adaptGameResolutionAtRuntime\":true','\"adaptGameResolutionAtRuntime\":false' -replace '\"sizeOnStartupMode\":\"scaleOuter\"','\"sizeOnStartupMode\":\"default\"' | Set-Content data.js -NoNewline"
git add -A && git commit -m "update game build" && git push
echo Done!
pause
