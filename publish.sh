#!/bin/bash
rm -r _site
echo "Building en version"
jekyll build -d _site

RESOURCES=(_posts)
for res in ${RESOURCES[@]}
do
    echo "Making ru for $res"
    mv -T $res ${res}-en
    cp -r -T ${res}-ru $res
done

echo "Building ru version"
cp -r _posts-ru _posts
jekyll build --config _config-ru.yml -d _site/ru
for res in ${RESOURCES[@]}
do
    echo "Restoring en for $res"
    rm -r $res
    mv -T ${res}-en $res
done
