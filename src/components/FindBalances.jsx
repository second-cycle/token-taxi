import axios from "axios";

const FindBalances = async () => {
    const address = "0x7fd9626768D02F61da6754EC7B0382FeA8110781";
    const etherscanCall = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&apikey=IVIC44B3R4T44RPR7WQ4SGUV1AMYH89GH1`;
    const response = await axios.get(etherscanCall);

    const txs = await response.data.result;
    const numberOfTxs = await txs.length;
    await console.log(numberOfTxs);

    return <div>balance</div>;
};

export default FindBalances;
