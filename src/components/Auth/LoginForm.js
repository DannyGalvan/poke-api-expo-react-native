import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, TextInput, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import { User, userDetails} from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

export default function LoginForm(){

    const [error, setError] = useState('');
    const { login, user } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue)=>{           
            const {userName, password} = formValue;
            setError('')
            if (userName != User.userName || password != User.password) {
                setError("Usuario y/o Contraseña Incorrectos")
            }else{
               login(userDetails);
            }
        },
    });

    return (
      <View>
        <Text style={styles.title}>Iniciar Sesion</Text>
        <TextInput 
        placeholder='Nombre de Usuario'
        style={styles.input}
        autoCapitalize={'none'}
        value={formik.values.userName}
        onChangeText={(text)=>formik.setFieldValue('userName', text)}/>    
         <Text style={styles.error}>{formik.errors.userName}</Text>

        <TextInput 
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize={'none'}
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text)=>formik.setFieldValue('password', text)}/>    
        <Text style={styles.error}>{formik.errors.password}</Text>

       <View style={styles.button}>
        <Button             
            title='Iniciar Sesion'
            onPress={formik.handleSubmit}/>
        </View>       

        <Text style={styles.errorFooter}>{error}</Text>
      </View>
    )
}

function initialValues() {
    return {
        userName: "",
        password: ""
    }
}

function validationSchema() {
    return {
        userName: Yup.string().required("El usuario Es Obligatorio"),
        password: Yup.string().required("La Contraseña Es Obligatoria").min(9,"Debe Tener Minimo 9 Caracteres")
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 15,
        color: '#fff'
    },
    input:{
        height: 40,
        margin: 12,
        borderColor: '#fff',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        color: '#fff'
    },
    button:{
        height: 40,
        margin: 12,
        backgroundColor: 'black',
        color: 'white'
    },
    error:{
        color: 'red',
        textAlign: 'center',
        color: '#fff'
    },
    errorFooter:{
        color: 'red',
        textAlign: 'center',
        marginTop: 15,
        color: '#fff'
    }
})