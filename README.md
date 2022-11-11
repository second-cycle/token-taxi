-created React app
-using wagmi library

-app sends tokens from one wallet to another
-leave token address block empty to send ETH

-currently sendAmount is

-transfer function working, input token amount and recipient required (errors need to be handled better, also only can send ERC20 tokens right now, cannot send network coin ei- ETH)

TODO's:

-need to add WalletConnect

-improve styling/layout

    -change color of Network text when network is changed

-make send amount *10**18 (or whatever the contract decimals are)

-currenlty upon successful transaction an etherscan link is provided, this needs to change to provide the block explorer for the current network

-possibly a "confirm transaction" modal

**currently working on function to find balances for all erc20 tokens in wallet


-this will be the initial version. Ideally we use something like dexscreener.com to search token contracts regardless of network
-also we should create the option to display all tokens currently in connected wallet (similar to zapper.fi


-add all of the above features for erc 721/1155 



if you would like to assist in token.taxi development please join telegram channel: https://t.me/+6jsHUNHoZis1MTlh


![token-taxi-ui-draft-1](https://user-images.githubusercontent.com/111910438/199877075-84be9d0f-e00c-4e0f-9382-1822dd23fcb5.jpeg)

