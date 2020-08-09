TAG=spear-website
docker build --build-arg HOST=reckhard.ca -t $TAG .
#docker run -p 80:80 -d $TAG
