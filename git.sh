###
 # @Description: 
 # @Version: 
 # @Autor: MrSong
 # @Date: 2020-07-16 11:40:18
 # @LastEditors: MrSong
 # @LastEditTime: 2020-08-12 13:34:32
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:song-jun/myJs.git master:master

cd -
