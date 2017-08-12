.PHONY: all sitemap textfiles push

all: sitemap textfiles push

sitemap:
	python sitemap.py > sitemap.xml

textfiles:
	cd textfiles && \
        ./make_index.py > ./index.html

push:
	git add sitemap.xml textfiles/index.html && git commit -m "`date`" && git push


