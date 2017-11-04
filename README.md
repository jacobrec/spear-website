## setup
1. Install go
2. Get files with `go get github.com/jacobrec/spearserver`
3. Install mysql server
4. In mysql create a database and a user and grant that user all privaliges on that database
1. Place .passwords file in the src/github.com/jacobrec/spearserver directory
5. From the src/github.com/jacobrec/spearserver directory build the project with `go build`
2. run with -setup from the src/github.com/jacobrec/spearserver directory
3. run normally from the src/github.com/jacobrec/spearserver directory to start webserver 

### passwords file
should have the name .passwords
file should be 3 lines and read like this. the username, password, and database refer to the sql database and user you just created
```
username
password
database
```
