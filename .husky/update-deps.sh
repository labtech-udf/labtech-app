
#!/bin/zsh
. "$(dirname "$0")/_/husky.sh"

IFS=$'\n'
# regex supports mono-repos with a package.json at root-level and at package-level
PACKAGE_LOCK_REGEX="(^packages\/.*\/package-lock\.json)|(^package-lock\.json)"
# extract all paths to package-lock.json files 
PACKAGES=("$(git diff --name-only HEAD@{1} HEAD | grep -E "$PACKAGE_LOCK_REGEX")")

if [[ ${PACKAGES[@]} ]]; then
  for package in $PACKAGES; do
    echo "📦 $package was changed. Running npm install to update your dependencies..."
    DIR=$(dirname package)
    cd "$DIR" && npm install
  done
fi