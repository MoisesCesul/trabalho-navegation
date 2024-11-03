
import { useNavigation } from '@react-navigation/native';
import { ButtonText, Container, LoginButton, StyledInput, Title } from "./styled";
import { useState } from 'react';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login pressed', { email, password });
    };

    return (
        <Container>
            <Title>Login</Title>
            <StyledInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor={"#fff"}
            />
            <StyledInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholderTextColor={"#fff"}
            />
            <LoginButton onPress={handleLogin}>
                <ButtonText>Log In</ButtonText>
            </LoginButton>
        </Container>
    );
}
