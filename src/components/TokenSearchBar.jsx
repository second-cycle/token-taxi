import { useState } from "react"
import TokenInfo from "./TokenInfo"
import TransferERC20 from "./TransferERC20"

const TokenSearchBar = () => {
    const [selectedToken, selectToken] = useState('')
    const [sendValue, setSendValue] = useState('')
    const [selectedRecipient, selectRecipient] = useState('')

    return (
        <div>
            <form>
                <label>
                    <input type="text" name="token" value={selectedToken} onChange={(e) => selectToken(e.target.value)}/>
                </label>
            </form>
            <TokenInfo contractAddress={selectedToken} />
            <form>
                <label>
                    <input type="number" name="sendValue" value={sendValue} onChange={(e) => setSendValue(e.target.value)}/>
                    <input type="text" name="recipient" value={selectedRecipient} onChange={(e) => selectRecipient(e.target.value)}/>
                </label>
            </form>
            <TransferERC20 tokenAddress={selectedToken} recipient={selectedRecipient} sendValue={sendValue}/>
        </div>
    )
}

export default TokenSearchBar