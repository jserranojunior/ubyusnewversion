
FROM golang:1.17.6

WORKDIR /app

RUN go run tidy
RUN go install github.com/cespare/reflex@latest

ENTRYPOINT reflex -c /app/reflex.conf'
