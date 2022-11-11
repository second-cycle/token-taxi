import { Flex, Stack, TextInput, Space } from "@mantine/core";
import { useState } from "react";
import SendTransaction from "./SendTransaction";
import TokenInfo from "./TokenInfo";
import SendERC20 from "./SendERC20";

const TokenSearchBar = () => {
    const [selectedToken, selectToken] = useState("");
    const [amount, setAmount] = useState("");
    const [selectedRecipient, selectRecipient] = useState("");

    return (
        <div>
            <Flex justify="center" align="center">
                <Stack align="center">
                    <form>
                        <TextInput
                            placeholder="token address"
                            type="text"
                            name="token"
                            value={selectedToken}
                            onChange={(e) => selectToken(e.target.value)}
                        />
                    </form>
                    <TokenInfo contractAddress={selectedToken} />
                    <form>
                        <TextInput
                            placeholder="recipient"
                            type="text"
                            name="recipient"
                            value={selectedRecipient}
                            onChange={(e) => selectRecipient(e.target.value)}
                        />
                        <Space h="lg" />
                        <TextInput
                            placeholder="amount"
                            type="number"
                            name="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </form>
                    {selectedToken ? (
                        <SendERC20
                            tokenAddress={selectedToken}
                            recipient={selectedRecipient}
                            amount={amount}
                        />
                    ) : (
                        <SendTransaction
                            recipient={selectedRecipient}
                            amount={amount}
                        />
                    )}
                </Stack>
            </Flex>
        </div>
    );
};

export default TokenSearchBar;
