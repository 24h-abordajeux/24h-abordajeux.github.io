#!/bin/sh
mkdir assets && npm run build && mv dist/assets/* assets/ && mv dist/index.html index.html && git add * && git commit -m "deploy" && git push --force origin dist

