import { Center, Flex, NumberInput, Stack, Text, TextInput, Space } from "@mantine/core"
import { useState } from "react"
import TokenInfo from "./TokenInfo"
import TransferERC20 from "./TransferERC20"

const TokenSearchBar = () => {
    const [selectedToken, selectToken] = useState('')
    const [sendValue, setSendValue] = useState('')
    const [selectedRecipient, selectRecipient] = useState('')

    return (
        <div>
            <Flex justify="center" align="center">
            
            <Stack align="center">
            <Space h="xl" />
            <Space h="xl" />
                <form>
                    <TextInput placeholder="token address" type="text" name="token" value={selectedToken} onChange={(e) => selectToken(e.target.value)}/>
                </form>
                <TokenInfo contractAddress={selectedToken} />
                <form>
                    <TextInput placeholder="amount" type="number" name="sendValue" value={sendValue} onChange={(e) => setSendValue(e.target.value)}/>
                    <Space h="lg" />
                    <TextInput placeholder="recipient" type="text" name="recipient" value={selectedRecipient} onChange={(e) => selectRecipient(e.target.value)}/>
                </form>
                <TransferERC20 tokenAddress={selectedToken} recipient={selectedRecipient} sendValue={sendValue}/>
            </Stack>
            </Flex>

        </div>
    )
}

export default TokenSearchBar