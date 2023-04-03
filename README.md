# Getting started with the application
It is a voting application developed using web3.
You can access the application at
https://voting-dapp-ioepog6y0-akshita44.vercel.app/

While accessing the above application you will only get voter rights.

If you want to run the application as an admin and as a voter then you should follow the following steps-
1. Clone the repository and run npm install.
2. Open remix ide and create a new file in the remix ide contracts folder and paste the election.sol file present inside the folder "contract" in the repository. Then, Compile and Deploy the contract, selecting the Injected provider as the environment.
3. Once the contract gets deployed, copy the contract address and replace the CONTRACT_ADDRESS variable in the constants file in the constant folder with the contract address.
4. Replace the content of the "ABI.json" file with the ABI copied from the remix ide.
5. Now, you are good to go. Start the react-app using npm start.
6. As soon as the website loads on the browser you will get the meta mask popup to connect your metamask account with the website.
7. The first address you used to connect with the website becomes the admin.

## PreRequisities:
You should have a metamask account.

## Deployment Link
https://voting-dapp-ioepog6y0-akshita44.vercel.app/

## Project Demonstration Link
https://www.youtube.com/watch?v=OaHzDafJb0s
### Application Workflow

The application consists of two users:
1 Admin
2 Voter

#### Admin functionalities
1. Admin will have the right to create elections, start voting, and end and delete the elections.
2. First, the admin will create the elections and add the candidates standing in the election.
3. Minimum of two candidates are required to start the election.
4. A voter can cast his vote only after the voting for that election has started and after he is verified by the admin.
5. After voting, the admin will end the elections.
6. The result of the election can be checked by both the admin and the voters.

#### Voter functionalities
1. Voters can register themselves and cast their votes once they are verified.
2. Voters can check the results of the elections that have ended.
