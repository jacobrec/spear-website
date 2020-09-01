TAG=spear-website
docker build --build-arg -t $TAG .
docker run -p 80:80 -d $TAG
