FROM alpine:3

RUN apk add --no-cache make go nodejs npm git bash

ARG HOST=spaceualberta.ca

# setup go stuff
ENV GOROOT /usr/lib/go
ENV GOPATH /go
ENV PATH /go/bin:$PATH

RUN go get github.com/jacobrec/jebs
RUN go get github.com/jacobrec/kamal/server
RUN go get github.com/jacobrec/kamal/cli

# setup kamal
RUN /go/src/github.com/jacobrec/kamal/install.sh

## kamal rules
RUN kamal add ${HOST} 127.0.0.1:3000
RUN kamal add jebs.${HOST} 127.0.0.1:8049
RUN kamal add admin.${HOST} 127.0.0.1:8049/author
RUN kamal add join.${HOST} 127.0.0.1:8081
RUN kamal ls

# setup jebs
# TODO: configure DB stuff


# setup website frontend
COPY . /home/app

CMD /home/app/docker_run.sh
