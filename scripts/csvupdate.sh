#! /bin/bash

cd politicamentecorretto
git clean -fxd
git reset --hard HEAD
git pull
cd ..

curl -o politicamentecorretto/_data/unapromessa.json http://dev.ondata.it/projs/people/andy/unapromessa/unapromessa.json

python politicamentecorretto/scripts/github2CSV.py politicamentecorretto/_data/issues.csv politicamentecorretto/_data/issuesjson.json politicamentecorretto/_data/issuesgeojson.json

cd politicamentecorretto
git add _data
#git add vittime.md
git commit -m "auto CSV update $(date -Iseconds)"
git pull --rebase
git push

git clean -fxd
git reset --hard HEAD
cd ..
