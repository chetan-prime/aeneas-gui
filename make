#!/bin/sh

rm -rf build/default

polymer build -v || (
  echo Error Building polymer
  exit
)

cd build/default || exit

if   [ "$1" = "--windows" ]; then
  ../../node_modules/.bin/electron-packager ./ --platform=win32 --arch=ia32 --icon=../../icon.ico
elif [ "$1" = "--osx" ]; then
  ../../node_modules/.bin/electron-packager ./ --platform=darwin --arch=x64 --icon=../../icon.png
else
  ../../node_modules/.bin/electron-packager ./ --icon=../../icon.png
  cd ../..
  ./Recipe
fi


