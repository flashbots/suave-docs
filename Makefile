.PHONY: docker docker-start

CUR_DIR := $(shell pwd)

docker: docker-deps docker-start

docker-shell:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /bin/bash

docker-deps:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /usr/local/bin/npm install

docker-start:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /usr/local/bin/npm start

docker-build:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /usr/local/bin/npm run build

docker-serve:
	docker run -p 3000:3000 --name suave-docs --rm -it -w /mnt -v $(CUR_DIR):/mnt node:20 /usr/local/bin/npm yarn serve

docker-build-serve: docker-build docker-serve

ping-searchengines:
	curl -s http://www.google.com/webmasters/sitemaps/ping?sitemap=https://suave-alpha.flashbots.net/sitemap.xml -o /dev/null
	curl -s http://www.bing.com/webmaster/ping.aspx?siteMap=https://suave-alpha.flashbots.net/sitemap.xml -o /dev/null
