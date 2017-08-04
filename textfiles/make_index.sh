#!/bin/bash

echo "">index.html;find . -name "*.txt" -type f -exec echo '<a href="{}">{}</a>' >>index.html \;

