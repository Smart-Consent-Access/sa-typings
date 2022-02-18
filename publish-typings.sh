#!/bin/bash

release_note=$1

./git_push.sh $release_note

npm publish --access public