import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Image ,TextInput, Button, ToastAndroid, TouchableOpacity} from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel'
import { CustomTextInput } from '../../components/CustomTextInput';

export default function HomeScreen() {

          const { email, password, onChange} = useViewModel();

          const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>

      <Image
        source={ require('../../../../assets/chef.jpg') }
         style={styles.imageBackground }
          
           />
         <View style ={styles.logoContainer}> 
              <Image 
               source={ require('../../../../assets/logo.png')}
               style={ styles.logoImage}
              />

              <Text style={styles.logoText}>FOOD APP</Text>
         </View>
          
           
         <View style={ styles.form }>

          <Text style={styles.formText}>INGRESAR </Text>

          <CustomTextInput
              image={require('../../../../assets/email.png')}
              placeholder='Correo electronico'
              keyboardType='email-address'
              property='email'
              onChangeText={ onChange}
              value={email}
          
          />
          <CustomTextInput
              image={require('../../../../assets/password.png')}
              placeholder='Contraseña'
              keyboardType='default'
              property='password'
              onChangeText={ onChange}
              value={password}
              secureTextEntry={ true }
          
          />
          
           

            <View style ={{marginTop:30 }}> 

                  <RoundedButton text='LOGIN' onPress={() => {
                    console.log('Email: '+ email);
                    console.log('Password: '+ password);

                  }}/>
           {/*  <Button
                   title='ENTRAR'
                   onPress={ () => ToastAndroid.show('CLICK', ToastAndroid.LONG)}
                   color={'orange'} 
            />*/}
            </View>

            <View style={ styles.formRegister}>
              <Text>No tienes cuenta</Text>
              <TouchableOpacity onPress={() =>navigation.navigate('RegisterScreen')}>
                <Text style ={ styles.formRegisterText}>Registrate</Text>
              </TouchableOpacity>
              
            </View>

         </View>

         

    </View>
  );
}

// HOT RELOAD

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
  imageBackground: {
     width : '100%',
     height: '100%',
     opacity: 1,
     bottom:'30%',
   
  },
  form:{
      width: '100%',
      height: '40%',
      backgroundColor:'white',
      position:'absolute',
      bottom: 0,
      borderTopLeftRadius:40,
      borderTopRightRadius:40,
      padding:30
  },
  logoContainer:{
    position:'absolute',
    alignSelf: 'center',
    top:'15%'
  },
  logoImage:{
    width: 110,
    height: 100
  },
  logoText:{
    color: 'white',
    textAlign:'center',
    fontSize:20,
    marginTop:10,
   // fontWeight:'hold'
  },
  formText:{
    fontWeight:'bold',
    fontSize: 16

  },
 
  formIcon:{
    width:25,
    height:25,
    marginTop:5
  }, 
  formInput:{
    flexDirection:'row',
    marginTop: 30

  },
  formTextInput:{
    flex:1,
   borderBottomWidth: 1,
   borderBottomColor:'black',
   marginLeft:15

 },
  formRegister:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:30

  },
  formRegisterText:{
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor:'orange',
    fontWeight:'bold',
    marginLeft:10
  }

  
 
});
 