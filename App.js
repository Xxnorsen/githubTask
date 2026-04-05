// App.js
import { Alert, Button, View } from 'react-native';

export default function App() {
    return (
        <View style={{ marginTop: 50 }}>
            <Button
                title="Click Me"
                onPress={() => Alert.alert("hi!", "kenzy")}
            />
        </View>
    );
}