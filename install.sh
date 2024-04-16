#!/bin/bash

## install nvm package
## choose the latest version
NVM_VERSION="v0.39.7"
wget -qO- "https://raw.githubusercontent.com/nvm-sh/nvm/${NVM_VERSION}/install.sh" | bash

## install nodejs and pick the latest LTS version
nvm install --lts

## now the installation of nodejs is done, 
## now you can start your nodejs project development

## Initialise npm project
#First create a directory for your project
PROJECT_NAME="hardhat-testing"
mkdir "$PROJECT_NAME"
cd $PROJECT_NAME

## Initialise npm project
## This will create a package.json file
npm init -y

## now initialise(package-lock.json)
npm i -y

##Now install hardhat
npm install --save-dev hardhat

##now create a project from hardhat defaults
## choose the defaults when prompted.
##This will create a project
npx hardhat init

## compile and test the default contract 
##This commands(compile) will create artifacts directory
npx hardhat compile

## now test
npx hardhat test
##if you want to test only a single, then you can use
## npx hardhat test <testfilename>

## if you want to clean hardhat directory
## this will delete the artifacts directory nad you can compile to generate again.
npx hardhat clean

## if you want to install env config library
## this will be used to hide your important data.
## create .env file to store all import and hide this from users.

npm install dotenv && touch .env

## if you want to install openzeppelin contracts
npm install @openzeppelin/contracts
## if you want to upgradeable files of thiss verions.
npm install @openzeppelin/contracts-upgradeable @openzeppelin/contracts