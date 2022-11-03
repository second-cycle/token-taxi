import { useAccount, useConnect, useDisconnect, useEnsName, useNetwork } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function Profile() {
 const { address, isConnected } = useAccount()
 const { chain, chains } = useNetwork()
 const { data: ensName } = useEnsName({ address })
 const { connect } = useConnect({
    connector: new InjectedConnector(),
 })
 const { disconnect } = useDisconnect()

 if (isConnected) return (
    <>
        <div>Connected to {ensName ?? address}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
        <>
            {chain && <div>Connected to {chain.name}</div>}
        </>
    </>
    )

 return <button onClick={() => connect()}>Connect Wallet</button>
}

export default Profile