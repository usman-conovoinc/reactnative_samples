// @ts-nocheck
import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, ActivityIndicator, FlatList } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

// import { getUsers } from "./src/redux/ducks/user.js";
// import { getFollowers } from "./src/redux/ducks/followers.js";

import { getUsers } from './src/redux/slices/userSlice.js';
import { getFollowers } from './src/redux/slices/followersSlice.js';
import { hp, wp } from "./src/SizeClass.js";


const CardView = React.memo((props) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: props.user.avatar }} style={styles.avatar} />
      <View style={{ paddingTop: 10 }}>
        <View style={styles.dataContainer}>
          <Text>Name: </Text>
          <Text>{props.user.first_name}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text>Last Name: </Text>
          <Text>{props.user.last_name}</Text>
        </View>
        <View style={styles.dataContainer}>
          <Text>Email: </Text>
          <Text>{props.user.email}</Text>
        </View>
      </View>
    </View >
  )
})

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getFollowers());
  }, [dispatch]);

  const { users } = useSelector((state) => {
    return state.users
  });

  const { followers } = useSelector((state) => {
    return state.followers
  });

  console.log(users);
  console.log(followers);

  const showUser = (item) => {

  }

  const renderUser = useCallback(({ item }) => {
    return (<CardView key={item.id} user={item} />)
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#005569" }}>

      <View style={{ flex: 1, paddingHorizontal: 12, backgroundColor: "#fff" }}>
        < FlatList style={{ paddingVertical: 4, flexGrow: 0 }}
          horizontal={true}
          data={followers}
          keyExtractor={user => user.id.toString()}
          renderItem={renderUser}
        // onEndReached={fetchMore}
        // onEndReachedThreshold={0.1}
        />

        <ScrollView horizontal={false}>
          {users?.map((user) => {
            return <CardView key={user.id} user={user} />
          })}
          <ScrollView
            horizontal={true}>
            {followers?.map((user) => {
              return <CardView key={user.id} user={user} />
            })}
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: "#00000030",
    borderWidth: 0.2,
    borderRadius: 5,
    flexDirection: 'row',
    margin: 4,
    height: wp("17%"),
    alignItems: 'center'
  },
  dataContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  avatar: {
    borderRadius: 5,
    width: wp("12%"),
    height: wp("12%"),
    marginLeft: 10,
    marginVertical: 10
  }
});

export default App;
