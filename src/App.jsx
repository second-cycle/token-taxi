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

const conAddy = "0x27c70cd1946795b66be9d954418546998b546634"

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="App">
        <Profile />
        <SwitchNetwork />
      </div>
      <div>
        <TokenBalance contractAddress={"0x27c70cd1946795b66be9d954418546998b546634"} />
        <TransferERC20 />
      </div>
    </WagmiConfig>
  );
}

export default App;
