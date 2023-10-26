import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput, Button, ToastAndroid, TouchableOpacity} from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';

export const RegisterScreen =() =>{
 
    return (
        <View style={styles.container}>
    
          <Image
            source={ require('../../../../assets/chef.jpg') }
             style={styles.imageBackground }
              
               />
             <View style ={styles.logoContainer}> 
                  <Image 
                   source={ require('../../../../assets/user_image.png')}
                   style={ styles.logoImage}
                  />
    
                  <Text style={styles.logoText}>SELECIONA UNA IMAGEN</Text>
             </View>
              
               
            <View style={ styles.form }>
              <Text style={styles.formText}>REGISTRARSE </Text>
              <View style={styles.formInput}>
                       <Image
                            style={styles.formIcon}
                            source ={ require('../../../../assets/user.png')}
                       />
                       <TextInput
                            style={styles.formTextInput}
                            placeholder='Nombres'
                            keyboardType='default'
                        />
                </View>

                <View style={styles.formInput}>
                       <Image
                            style={styles.formIcon}
                            source ={ require('../../../../assets/my_user.png')}
                       />
                       <TextInput
                            style={styles.formTextInput}
                            placeholder='Apellidos'
                            keyboardType='default'
                        />
                </View>

                <View style={styles.formInput}>
                       <Image
                            style={styles.formIcon}
                            source ={ require('../../../../assets/phone.png')}
                       />
                       <TextInput
                            style={styles.formTextInput}
                            placeholder='Telefono'
                            keyboardType='numeric'
                        />
                </View>


                <View style={styles.formInput}>
                       <Image
                            style={styles.formIcon}
                            source ={ require('../../../../assets/email.png')}
                       />
                       <TextInput
                            style={styles.formTextInput}
                            placeholder='Correo electronico'
                            keyboardType='email-address'
                        />
                </View>
                <View style={styles.formInput}>
                      <Image
                      style={styles.formIcon}
                      source ={ require('../../../../assets/confirm_password.png')}
                      
                       />
                       <TextInput
                       style={styles.formTextInput}
                       placeholder='Contraseña'
                       keyboardType='default'
                       secureTextEntry={true}
                       />
                </View>
    
                <View style ={{marginTop:30 }}> 
    
                      <RoundedButton text='CONFIRMAR' onPress={() => ToastAndroid.show('HOLA' , ToastAndroid.SHORT)}/>
               
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
          height: '70%',
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
        top:'5%',
        alignItems:'center'
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
      formTextInput:{
         flex:1,
        borderBottomWidth: 1,
        borderBottomColor:'black',
        marginLeft:15
    
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
     