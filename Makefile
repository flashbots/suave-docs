.PHONY: docker docker-start

CUR_DIR := $(shell pwd)

docker:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /bin/bash

docker-start:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /usr/local/bin/yarn start
