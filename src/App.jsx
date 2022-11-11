import "./App.css";
import { MantineProvider, Divider, Space } from "@mantine/core";
import { WagmiConfig, createClient, configureChains, allChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Header from "./components/Header";
import MainPanel from "./components/MainPanel";

const { chains, provider, webSocketProvider } = configureChains(allChains, [
    publicProvider(),
]);

const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
});

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <WagmiConfig client={client}>
                <div className="App">
                    <Header />
                </div>
                <Space h="xs" />
                <Divider my="sm" />
                <Space h="xs" />
                <div>
                    <MainPanel />
                </div>
            </WagmiConfig>
        </MantineProvider>
    );
}

export default App;
