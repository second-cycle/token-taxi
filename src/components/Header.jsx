import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsName,
    useNetwork,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import {
    Button,
    Flex,
    Group,
    SimpleGrid,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import FindBalances from "./FindBalances";

const Profile = () => {
    const { address, isConnected } = useAccount();
    const { chain, chains } = useNetwork();
    const { data: ensName } = useEnsName({ address });
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();

    return (
        <div>
            <Flex
                align="center"
                justify="center"
                direction="column"
                gap="sm"
                wrap="wrap"
            >
                <Title order={1}>Token Taxi</Title>
                {isConnected && <div>{chain && <div>{chain.name}</div>}</div>}
                {ensName ?? address}
                {isConnected ? (
                    <Button onClick={() => disconnect()}>Disconnect</Button>
                ) : (
                    <Button onClick={() => connect()}>Connect Wallet</Button>
                )}
            </Flex>
        </div>
    );
};

export default Profile;
