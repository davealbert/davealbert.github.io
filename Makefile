.PHONY: all sitemap textfiles

all: sitemap textfiles

sitemap:
	python sitemap.py > sitemap.xml

textfiles:
	cd textfiles && \
        ./make_index.py > ./index.html


