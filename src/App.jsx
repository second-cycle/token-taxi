import "./App.css";
import { MantineProvider } from "@mantine/core";
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
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <WagmiConfig client={client}>
        <div className="bg-indigo-200 w-full h-screen">
          <Header />
        </div>
        <div>
          <TokenSearchBar />
          
        </div>
      </WagmiConfig>
    </MantineProvider>
  );
}

export default App;
