#!/usr/bin/env bash

# temp folder to store previous build if something went wrong
TEMP_FOLDER=/home/ubuntu/www/temp
BUILD_FOLDER=/home/ubuntu/www/eyemo.app

yarn build && \
ssh eyemo_dev "
  mkdir -p $TEMP_FOLDER &&
  rm -rf $TEMP_FOLDER/** &&
  cp -r $BUILD_FOLDER/** $TEMP_FOLDER &&
  rm -rf $BUILD_FOLDER/**
" && \
scp -rp build/** eyemo_dev:$BUILD_FOLDER
