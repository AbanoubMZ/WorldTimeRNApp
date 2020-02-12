import React,{useState,useEffect} from 'react';
import{Text,View,Image,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ZoneTime from '../components/ZoneTime';
import { ScrollView } from 'react-native-gesture-handler';
const CountryListScreen=({navigation})=>{
    const countries=[
        {url:'Europe/London' ,location: 'London',flag:require('../images/uk.png') },
        {url:'Europe/Berlin',location: 'Germany',flag:require( '../images/germany.png')},
        {url:'Europe/Athens' ,location: 'Athens',flag:require('../images/greece.png' )},
        {url:'Africa/Cairo' ,location: 'Cairo',flag:require('../images/egypt.png' )},
        {url:'Africa/Nairobi' ,location: 'Nairobi',flag:require('../images/kenya.png') },
        {url:'America/New_York' ,location: 'New York',flag:require('../images/usa.png') },
        {url:'America/Chicago' ,location: 'Chicago',flag:require('../images/usa.png') },
        {url:'Asia/Seoul' ,location: 'Seoul',flag:require('../images/south_korea.png') },
        {url:'Asia/Jakarta' ,location: 'Jakarta',flag:require('../images/indonesia.png')}
    ];
    return(
        <View style={styles.containerStyle}>
            <ScrollView>
            <FlatList
                data={countries}
                keyExtractor={(country)=>country.location}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Result',{url:item.url,location:item.location})} >
                            <ZoneTime url={item.url} location={item.location} flag={item.flag}/>
                        </TouchableOpacity>
                    )
                }}
            />
            </ScrollView>
        </View>
    
    );
}


const styles=StyleSheet.create({
    containerStyle:{
        height:'100%',
        width:'100%',
        backgroundColor:'#f2f2f2'
    }
});

export default CountryListScreen