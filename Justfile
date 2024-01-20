set shell := ["bash", "-c"]
image := "gp_frontend"
engine := "docker --context=rootless"

build:
  {{engine}} build -t {{image}} -f Dockerfile --no-cache .

run:
  {{engine}} run --rm -it -d -p 3000:3000 {{image}}
