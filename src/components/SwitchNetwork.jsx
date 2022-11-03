import { useNetwork, useSwitchNetwork, allChains } from 'wagmi'

function SwitchNetwork() {
 const { chain } = useNetwork()
 const { chains, error, isLoading, pendingChainId, switchNetwork } =
 useSwitchNetwork()

 return (
 <>
 {chain && <div>Connected to {chain.name}</div>}

 {allChains.map((x) => (
 <button
 disabled={!switchNetwork || x.id === chain?.id}
 key={x.id}
 onClick={() => switchNetwork?.(x.id)}
 >
 {x.name}
 {isLoading && pendingChainId === x.id && ' (switching)'}
 </button>
 ))}

 <div>{error && error.message}</div>
 </>
 )
}

export default SwitchNetwork
