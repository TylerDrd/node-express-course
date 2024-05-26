// npm - global command, comes with node

// local dependency - use only in a particular Project  
// npm i <package name>

// global dependency - use in any project
// npm install -g <package name>

//package.json - manifest file(stores imp info about project/package)
//manual approach (create package.json in the root, create properties etc)  - 1
//npm init (step by step, press enter to skip)   - 2
//npm init -y (everything default)   - 3

//package.json is imp for downloading dependencies - npm <package name>
//after installing a package, all packages are stored in npm_modules folder
//as it stores all dependency details, we store all the dependency names in gitignore
//that way, we do not have to pass the node modules when making a repo which could take 
//lot of space, we just clone the repo and run npm i to get all dependency in the project.json
//given that project.json is present in the clone

//gitignore is a file that contains all the files that are ignored by the search control
