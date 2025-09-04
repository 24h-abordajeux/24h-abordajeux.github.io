#!/bin/sh
git checkout -b dist && mkdir assets && npm run build && mv dist/assets/* assets/ && mv dist/index.html index.html && git add * && git commit -m "deploy" && git push --force origin dist && git checkout main && git branch -D dist

