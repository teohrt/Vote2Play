[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Vote2Play!
Vote2Play is an EXTREMELY exciting voting game built using Smart Contracts on a private blockchain and a cool web app front end!

* The project is built on a RESTful API interfacing with a local blockchain, compiling, deploying and interacting with blockchain accounts and smart contracts.
* The front is being built using React.

### Prerequisites
* node
* npm
* geth
* puppeth

After navigating to the downloaded repository, you will need to create a local blockchain for the deployment and interaction of smart contracts.
### Setting up a single node POA local blockchain
* Navigate to blockchainAPI/blockchain and create the directory 'node' and run the command:
```
geth --datadir /node account new
```
St whatever password you want. Record the password in 'password.txt' and the account string in 'accounts.txt'. Also, replace the account string found in 'runChain'. Keep that string in your clipboard for easy access later.
* Now to create the genesis.json. Run the command:
```
puppeth
```
Specify any network name for your blockchain. Type 2 to configure a new genesis file. Enter 2 again to choose the Clique - Proof of Authority consensus protocol. Then type in the amount of time you want blocks to take. Paste your account string when prompted for an account to seed with Eth and to designate an account to seal blocks. Navigate to the Manage option and then to Deploy Genesis. Name the file, 'genesis.json'.
Run the command:
```
./initGenesis
```
Your local blockchain is ready to go! Let's turn it on.
navigate to the parent directory, blockchainAPI,and run the command:
```
./runChain
```
###Start the REST API and Web Server
*  In another terminal, navigate to the blockchainAPI directory and start the API with the command:
```
node app.js
```
* In a third and final terminal, navigate to the blockchainAPI directory and run the command:
```
npm start
```