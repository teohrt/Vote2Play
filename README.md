[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Vote2Play!
Vote2Play is an EXTREMELY exciting voting game that utilizes the interaction and deployment of smart contracts on a private blockchain! For this DApp to function, there are three things that need to be functioning: 

* The blockchain
* The node server running the Blockchain API
* The node server running the React front end

## Prerequisites and dependencies
* node
* npm

Navigate to the root of the downloaded repository and install the project's dependencies by running the command:
```
npm install
```
After this, you will need to create a local blockchain for the deployment and interaction of smart contracts.
## Setting up a legit single node POA local blockchain
* Navigate to blockchainAPI/blockchain and create a directory named 'node'. Run the command:
```
geth --datadir /node account new
```
Set a password. Record the password in 'password.txt' and the account string output in 'accounts.txt'. Also, replace the account string found in the 'runChain' shell script with the one just created. Keep that string in your clipboard for easy access later.

* Now to create your blockchain's genesis.json file with the help of a CLI. Run the command:
```
puppeth
```
Specify any network name for your blockchain. Type 2 to configure a new genesis file. Enter 2 again to choose the Clique - Proof of Authority consensus protocol. Type in the amount of time you want blocks to take. (I like one second in this situation) Paste your account string when prompted for an account to seed with Eth and to designate an account to seal blocks. Navigate to the Manage option and then to Deploy Genesis. Make sure to name the file, 'genesis.json'.
* When you've finished creating the genesis file, run the command:
```
./initGenesis
```
Your local blockchain is ready to go, so let's get it up and running!

* Navigate to the parent directory, blockchainAPI, and run the command:
```
./runChain
```

## Starting the REST API and Web App front end
* In another terminal, navigate to the blockchainAPI directory and start the API with the command:
```
node app.js
```
* In a third and final terminal, navigate to the root of the repository and run the command:
```
npm start
```

The application is up and running! Enjoy!