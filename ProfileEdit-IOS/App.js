import React, { useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Button, Platform, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation, route }) {

  const [image, setImage] = useState('https://picsum.photos/id/237/200/300');
  const [name, setName] = useState((route.params && route.params.name) ? route.params.name : 'Carrie Sanders') ;
  const [email, setEmail] = useState((route.params && route.params.email) ? route.params.email : 'carrie_sanders@gmail.com') ;
  const [phone, setPhone] = useState((route.params && route.params.phone) ? route.params.phone : '2342543456') ;
  const [about, setAbout] = useState((route.params && route.params.about) ? route.params.about : 'Hey I am UI/UX Designer with very good expereince in React Native and ReactJS.') ;
  console.log(route.params)

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {
    setName((route.params && route.params.name) ? route.params.name: 'Carrie Sanders')
    setEmail((route.params && route.params.email) ? route.params.email: 'carrie_sanders@gmail.com')
    setPhone((route.params && route.params.phone) ? route.params.phone: '2342543456')
    setAbout((route.params && route.params.about) ? route.params.about: 'Hey I am UI/UX Designer with very good expereince in React Native and ReactJS.')
  }, [route.params]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        <Text style={{ fontSize: 30, padding: 10 }}>Edit Profile</Text>
        <View style={{height: 300, background:'#eee'}}>
          <View style={{flex: 1, alignItems:'center', justifyContent: 'center'}}>
            <View style={{width:'100%',display:'flex', flexDirection: 'row-reverse'}}>
              <Ionicons name="pencil" size={24} onPress={pickImage}></Ionicons>
            </View>
            {image && <Image source={{ uri: image }} style={{ marginTop:10,width: 200, height: 200, borderRadius: 100 }} />}
            <Text style={{marginTop: 15, fontWeight: 'bold'}}>PROFILE PHOTO</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Details', {type:'name',name: name,email: email,phone:phone,about:about})} style={{display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection: 'row', borderBottomColor: '#ccc',borderBottomWidth: 1}}>
            <View>
              <Text style={{  padding: 10, marginTop:10, fontWeight: 'bold' }}>NAME</Text>
              <Text style={{  padding: 10 }}>{name}</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" size={24} onPress={pickImage}  color={'#ccc'}></Ionicons>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details', {type:'email',name: name,email: email,phone:phone,about:about})} style={{display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection: 'row', borderBottomColor: '#ccc',borderBottomWidth: 1}}>
            <View>
              <Text style={{  padding: 10, marginTop:10, fontWeight: 'bold' }}>EMAIL</Text>
              <Text style={{  padding: 10 }}>{email}</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" size={24} onPress={pickImage}  color={'#ccc'}></Ionicons>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details', {type:'phone',name: name,email: email,phone:phone,about:about})} style={{display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection: 'row', borderBottomColor: '#ccc',borderBottomWidth: 1}}>
            <View>
              <Text style={{  padding: 10, marginTop:10, fontWeight: 'bold' }}>PHONE</Text>
              <Text style={{  padding: 10 }}>{phone}</Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" size={24} onPress={pickImage}  color={'#ccc'}></Ionicons>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Details', {type:'about',name: name,email: email,phone:phone,about:about})} style={{display:'flex',justifyContent:'space-between', alignItems:'center', flexDirection: 'row', borderBottomColor: '#ccc',borderBottomWidth: 1}}>
            <View style={{ width: '80%'}}>
              <Text style={{  padding: 10, marginTop:10, fontWeight: 'bold' }}>ABOUT</Text>
              <Text style={{  padding: 10 }}>
                {about}
              </Text>
            </View>
            <View>
              <Ionicons name="chevron-forward" size={24} onPress={pickImage}  color={'#ccc'}></Ionicons>
            </View>
          </TouchableOpacity>

        </View>
        
      </View>
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation, route }) {
  const [type, setType] = useState((route.params && route.params.type) ? route.params.type : 'name') ;
  const [name, setName] = useState((route.params && route.params.name) ? route.params.name : 'Carrie Sanders') ;
  const [email, setEmail] = useState((route.params && route.params.email) ? route.params.email : 'carrie_sanders@gmail.com') ;
  const [phone, setPhone] = useState((route.params && route.params.phone) ? route.params.phone : '2342543456') ;
  const [about, setAbout] = useState((route.params && route.params.about) ? route.params.about : 'Hey I am UI/UX Designer with very good expereince in React Native and ReactJS.') ;
  console.log(route.params)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{padding:10}}>
        <Ionicons name="arrow-back" size={24} onPress={() => navigation.navigate('Home', {type:'name',name: name,email: email,phone:phone,about:about})}></Ionicons>
      </View>
      <View style={{ flex: 1,justifyContent:'center', alignItems:'center'}}>

        { (type == 'name') &&
          <View style={{flex: 1, justifyContent:'space-between'}}>
            <View  style={{marginTop: 100}}>
              <Text style={{marginBottom: 20, fontWeight: 'bold'}}>ENTER NAME</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 250 }}
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
            <View style={{marginBottom: 100, marginTop: 20}}>
              <Button
                onPress={() => navigation.navigate('Home', {type:'name',name: name,email: email,phone:phone,about:about})}
                title="Update"
                color="#000000"
                accessibilityLabel="Go Back"
              />
            </View>
          </View>
         }  

        { (type == 'email') &&
          <View style={{flex: 1, justifyContent:'space-between'}}>
            <View  style={{marginTop: 100}}>
              <Text style={{marginBottom: 20, fontWeight: 'bold'}}>ENTER EMAIL</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 250 }}
                onChangeText={(text) => setEmail(text)}
                value={email}
              />
            </View>
            <View style={{marginBottom: 100, marginTop: 20}}>
              <Button
                onPress={() => navigation.navigate('Home', {type:'email',name: name,email: email,phone:phone,about:about})}
                title="Update"
                color="#000000"
                accessibilityLabel="Go Back"
              />
            </View>
          </View>
         } 


        { (type == 'phone') &&
          <View style={{flex: 1, justifyContent:'space-between'}}>
            <View  style={{marginTop: 100}}>
              <Text style={{marginBottom: 20, fontWeight: 'bold'}}>ENTER PHONE</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 250 }}
                onChangeText={(text) => setPhone(text)}
                value={phone}
              />
            </View>
            <View style={{marginBottom: 100, marginTop: 20}}>
              <Button
                onPress={() => navigation.navigate('Home', {type:'phone',name: name,email: email,phone:phone,about:about})}
                title="Update"
                color="#000000"
                accessibilityLabel="Go Back"
              />
            </View>
          </View>
         } 


        { (type == 'about') &&
          <View style={{flex: 1, justifyContent:'space-between'}}>
            <View  style={{marginTop: 100}}>
              <Text style={{marginBottom: 20, fontWeight: 'bold'}}>ENTER ABOUT</Text>
              <TextInput
                multiline = {true}
                numberOfLines = {6}
                style={{borderColor: 'gray', borderWidth: 1, width: 250 }}
                onChangeText={(text) => setAbout(text)}
                value={about}
              />
            </View>
            <View style={{marginBottom: 100, marginTop: 20}}>
              <Button
                onPress={() => navigation.navigate('Home', {type:'about',name: name,email: email,phone:phone,about:about})}
                title="Update"
                color="#000000"
                accessibilityLabel="Go Back"
              />
            </View>
          </View>
         } 

      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={DetailsScreen}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
