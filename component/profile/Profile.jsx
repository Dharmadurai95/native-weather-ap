import { Image, Text, TouchableOpacity, View } from 'react-native'
import { profileStyle } from './profile.style'
import AntDesign from '@expo/vector-icons/AntDesign';


const Profile = ({avatar_url,login,openLink,html_url}) => {
    return (
        <View style={profileStyle.container}>
            <View style={profileStyle.header}>
                <View>
                    <Image style={profileStyle.image} source={{ uri:avatar_url }} />

                </View>
                <View style={profileStyle.text}>
                    <Text style={profileStyle.title}>{login}</Text>
                    <Text style={profileStyle.content}>Hi I am beginner for react native , let's get in touch!</Text>
                </View>
            </View>
            <View style={profileStyle.social}>
                <TouchableOpacity style={profileStyle.icon}>

                    <AntDesign name="twitter" size={24} color="#1da1f2" />
                </TouchableOpacity>
                <TouchableOpacity style={profileStyle.icon}>

                    <AntDesign name="linkedin-square" size={24} color="#0a66c2" />
                </TouchableOpacity>
                <TouchableOpacity style={profileStyle.icon} onPress={()=>openLink(html_url)}>
                    <AntDesign name="github" size={24} color="#333" />

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Profile