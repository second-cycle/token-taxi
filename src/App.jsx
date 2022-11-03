import "./App.css";
import {WagmiConfig, createClient, configureChains, chain, allChains} from 'wagmi'
import { publicProvider } from "wagmi/providers/public";
import Profile from "./components/Connector";
import TokenBalance from "./components/TokenBalance";
import TransferERC20 from "./components/TransferERC20";
import SwitchNetwork from "./components/SwitchNetwork";

const { chains, provider, webSocketProvider } = configureChains(
  allChains,
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const conAddy = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="App">
        <Profile />
        <SwitchNetwork />
      </div>
      <div>
        <TokenBalance contractAddress={conAddy} />
        <TransferERC20 />
      </div>
    </WagmiConfig>
  );
}

export default App;
