import { useAccount, useConnect, useDisconnect, useEnsName, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import {Button, Flex, Group, SimpleGrid, Stack, Text, Title} from '@mantine/core'

const Profile = () => {
    const { address, isConnected } = useAccount()
    const { chain, chains } = useNetwork()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
       connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()
   

   
    return (
        <div>

            <Group position="center">
                <div>
                    <Flex align="center" justify="center" direction="column" gap="sm" wrap="wrap">
                        <Title order={1}>token.taxi</Title>
                        {isConnected && <div>{chain && <div>{chain.name}</div>}</div>}
                    </Flex>
                    <Flex align="center" justify="center" direction="column" gap="sm" wrap="wrap">
                        {isConnected ? <Button onClick={() => disconnect()}>{ensName ?? address}</Button> : <Button onClick={() => connect()}>Connect Wallet</Button>}
                    </Flex>
                </div>

            </Group>

            
        </div>
    )
   }


export default Profile