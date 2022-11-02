import "./App.css";
import {WagmiConfig, createClient, configureChains, chain, allChains} from 'wagmi'
import { publicProvider } from "wagmi/providers/public";
import Profile from "./Connector";
import ContractFinder from "./ContractFinder";

const { chains, provider, webSocketProvider } = configureChains(
  allChains,
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

const conAddy = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"

function App() {
  return (
    <WagmiConfig client={client}>
      <div className="App">
        <Profile />
      </div>
      <div>
        <ContractFinder contractAddress={conAddy} />
      </div>
    </WagmiConfig>
  );
}

export default App;
