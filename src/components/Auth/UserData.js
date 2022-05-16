import {StyleSheet, View, Text, Button} from 'react-native'
import React from 'react'
import useAuth from "../../hooks/useAuth";

export default function UserData() {
  const {auth, logout} = useAuth();

  return (
    <View style={styles.content}>
        <View style={styles.titleBlock}>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.title}>{`${auth.fistname} ${auth.lastname} `}</Text>
        </View>
        <View>
            <ItemMennu title="Nombre: " text={`${auth.fistname} ${auth.lastname} `}/>
            <ItemMennu title="username: " text={auth.username} />
            <ItemMennu title="Email: " text={auth.email} />
            <ItemMennu title="Total Favoritos: " text={`0 Pokemons`} />
        </View>
        <Button title="Desconectarse" onPress={logout} style={styles.btnLogout}/>
    </View>
  )
}

function ItemMennu(props){
    const {title, text}  =props;

    return(
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}</Text>
            <Text>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    content:{
        marginHorizontal:20,
        marginTop: 20,
    },
    titleBlock:{
        marginBottom:30,
    },
    title:{
        fontWeight:"bold",
        fontsize:22,
    },
    dataContent:{
        marginBottom: 20,
    },
    itemMenu:{
        flexDirection:"row",
        paddingVertical:20,
        borderBottomWidth: 1,
        borderColor: "#CFCFCF"
    },
    itemMenuTitle:{
        fontWeight: "bold",
        paddingRight: 19,
        width: 120,
    },
    btnLogout:{
        paddingTop:20,
    }
})