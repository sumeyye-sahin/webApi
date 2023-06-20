import React from "react";
import { View, Text} from "react-native";

function UserCard(props){
    return(
        <View>
        <Text>{props.name}</Text>
        <Text>{props.email}</Text>
        </View>
    )
    }   
export default UserCard;