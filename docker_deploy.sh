TAG=spear-website
docker build -t $TAG .
docker run -p 80:80 -d $TAG
