import { Pressable } from "react-native";
import { Ionicons} from  '@expo/vector-icons'

function IconButton() {

    return (<>
    <Pressable>
    <Ionicons name='star' size={24} color={'white'}></Ionicons>
    </Pressable>
    </>
    );
    
}
export default IconButton;