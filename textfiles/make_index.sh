#!/bin/bash

echo "<html><body>">index.html;find . -name "*.txt" -type f -exec echo '<a href="{}">{}</a><br />' >>index.html \; ;echo "</body></html>" >> index.html

