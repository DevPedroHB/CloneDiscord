import React from 'react';
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const ServerName: React.FC = () => {
    return(
        <Container>
            <Profile>
                <Avatar />
                <UserData>
                    <strong>DevPedroHB</strong>
                    <span>#0992</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
}

export default ServerName;