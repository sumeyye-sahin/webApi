import React, {useState, useEffect} from "react";
import { View, Text, Button,FlatList , ActivityIndicator} from "react-native";
import axios from "axios";
import UserCard from "./components/UserCard/UserCard";

function App(){

  const [loading, setLoading]= useState(true);
  const [users, setUsers]= useState([]);
  async function getApi (){
    const response= await axios.get("https://jsonplaceholder.typicode.com/users");
    setLoading(false);

    setUsers(response.data);
  }

  const renderItem=({item})=> <UserCard name={item.name} email={item.email} />

  useEffect(()=>{
    getApi();
  },[])

  return(
    <View>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : 

      <FlatList 
        data={users}
        renderItem={renderItem}
      
      />}
     
      
    </View>
  )
} 

export default App;