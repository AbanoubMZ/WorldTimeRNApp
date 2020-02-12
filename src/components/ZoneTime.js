import React from 'react';
import{Text,View,StyleSheet,Image} from 'react-native';


const TimeZone=({url,location,flag})=>{
    return(
            <View style={styles.viewStyle}>
                <Image source={flag} style={styles.imageStyle}/>
                <Text style={styles.textStyle}>{location}</Text>
            </View>
    );
}

const styles=StyleSheet.create({
    
    viewStyle:{
        backgroundColor:'white',
        flexDirection:'row',
        width:'100%',
        height:60,
        borderColor:'black',
        alignContent:'center',
        margin:5,
        alignItems:'flex-start'
    },
    imageStyle:{
        height:40,
        width:40,
        marginTop:10,
        borderRadius:40/2,
        marginHorizontal:10,
    },
    textStyle:{
        marginTop:15,
        fontSize:18,
        alignSelf:'flex-start'
    }
});

export default TimeZone