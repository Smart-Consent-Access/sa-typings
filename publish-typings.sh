#!/bin/bash

# Pushes any changes to git hub and releases a new version of typings to npm. For first time use run 'npm login' first.

# Package version, updated before publishing
version=1.0.2

# Commit note for github
release_note=$1

git_repo_id=Smart-Consent-Access/sa-typings

# Sets new package version
sed -i "s/\"version\": .*/\"version\": \"$version\",/" package.json

# Updates the typing version for ts SDK publish script
sed -i "s/typings_version=.*/typings_version=$version/" ../ao-sdk/publish-ts-sdk.sh

# Creates a temporary folder and clone the SDK repo into it
mkdir temp
(cd temp && git clone git@github.com:$git_repo_id.git)

# Copy the fils over to the temporary folder
rsync -rv --exclude=temp . temp/sa-typings

if [ "$release_note" = "" ]; then
    release_note="Minor update"
    echo "[INFO] No command line input provided. Set \$release_note to $release_note"
fi

# Adds the files and commit them.
cd temp/sa-typings && git add . && git commit -m "$release_note"

# Pushes (Forces) the changes in the local repository up to the remote repository
echo "Git pushing to git@github.com:$git_repo_id.git"
git push origin master 2>&1 | grep -v 'To https'

# Remove the temporary folder
cd ../../ && rm -rf temp/

npm publish --access public
