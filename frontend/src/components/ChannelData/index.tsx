import React, { useRef, useEffect } from 'react';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messagesRef.current;
        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);
    return(
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(18).keys()).map(n => (
                    <ChannelMessage author="DevPedroHB" date="15/11/2020" content="recriando a interface do Discord" />
                ))}
                <ChannelMessage
                    author="Tim Paulo Maia"
                    date="15/11/2020"
                    content={
                        <>
                            <Mention>@DevPedroHB</Mention>, eu uso um framework chamado AngularJS
                        </>
                    }
                    hasMention
                    isBot
                />
                <ChannelMessage author="DevPedroHB" date="15/11/2020" content="esquece isso mlk e usa ReactJS que não é um framework" />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;