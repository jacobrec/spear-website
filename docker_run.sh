/go/src/github.com/jacobrec/kamal/start.sh
cd /home/app
npm i

node redirect.js& # start redirect server (join.spaceualberta.ca)
echo "Launched redirect server"

./deploy.sh
