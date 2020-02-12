import React,{useState,useEffect} from 'react';
import{Text,View,StyleSheet,Image,ImageBackground,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import wtz from '../api/wtz';

const TimeScreen=({navigation})=>{
    const [time,setTime]=useState('');

    const requestedLocation='Egypt';
    const getTimeApi=async (location)=>{
        try{
            const response=await wtz.get(location);
            setTime(response.data);
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getTimeApi('/Africa/Cairo');
    },[]);
    

    const handleDate= (offset)=>{
        var d=new Date();
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = new Date(utc + (3600000*offset));
        return nd.toLocaleTimeString();
    }
    return(
        <ImageBackground source={require('../images/day.png')} style={{width: '100%', height: '100%' , flex:1}} resizeMode='cover'>
            <TouchableOpacity onPress={()=>navigation.navigate('Country')}>
                <View style={styles.editLocationViewStyle}>
                    <MaterialIcons name='edit-location' style={styles.iconStyle}/>
                    <Text style={styles.editLocationStyle}>Edit Location</Text>
                </View> 
            </TouchableOpacity>

            <Text style={styles.CountryNameStyle}>{requestedLocation}</Text>
            <Text style={styles.timeStyle}>{handleDate(parseInt(time.utc_offset))}</Text>
        </ImageBackground>
    );
}

const styles=StyleSheet.create({
    editLocationViewStyle:{
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop:155,
        alignSelf:'center'    
    },
    editLocationStyle:{
        fontSize:12,
        color:'white',
    },
    iconStyle:{
        fontSize:23,
        color:'white',
        marginRight:3
    },
    
    CountryNameStyle:{
        marginTop:35,
        fontSize:22,
        color:'white',
        alignSelf:'center'
    },
    timeStyle:{
        marginTop:40,
        fontSize:30,
        color:'white',
        alignSelf:'center'
    }
});
export default TimeScreen