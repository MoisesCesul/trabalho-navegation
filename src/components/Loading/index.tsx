import { ActivityIndicator, View } from "react-native";
import { Container, LoadingIndicator } from "./styled";

export function Loading(){
    return(
        <Container>
            <LoadingIndicator color="red" size='large' />
        </Container>
    )
}