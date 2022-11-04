import "./App.css";
import {WagmiConfig, createClient, configureChains, chain, allChains} from 'wagmi'
import { publicProvider } from "wagmi/providers/public";
import TokenInfo from "./components/TokenInfo";
import TransferERC20 from "./components/TransferERC20";
import Header from "./components/Header";
import TokenSearchBar from "./components/TokenSearchBar";

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
        <Header />
      </div>
      <div>
        <TokenSearchBar />
        
      </div>
    </WagmiConfig>
  );
}

export default App;
