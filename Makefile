.PHONY: docker docker-start

docker:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(pwd):/mnt node:20 /bin/bash

docker-start:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(pwd):/mnt node:20 /usr/local/bin/yarn start
