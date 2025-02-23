import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../redux/slice/NotesSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const UpdateNote = () => {
  //accecss user old data using route
  const route = useRoute();
  //using dispatch for addNote method
  const dispatch = useDispatch();
  // for navigation
  const navigation = useNavigation();
  //input fields
  const [title, setTitle] = React.useState(route.params.item.title);
  const [txt, setTxt] = React.useState(route.params.item.txt);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-950">
      <View className="w-full flex-col items-center justify-center">
        {/* Title */}
        <TextInput
          placeholder="Enter your title"
          value={title}
          onChangeText={setTitle}
          placeholderTextColor={"#9AA6B2"}
          keyboardType="default"
          className="p-2 bg-gray-700 text-gray-100 rounded-lg"
          style={styles.inputStyle}
          maxLength={70}
        />
        {/* Discription */}
        <TextInput
          placeholder="Enter your discription"
          value={txt}
          onChangeText={setTxt}
          placeholderTextColor={"#9AA6B2"}
          keyboardType="email-address"
          className="p-2 bg-gray-700 text-gray-100 rounded-lg mt-4"
          style={styles.inputStyle}
          maxLength={50}
        />
        <TouchableOpacity
          onPress={() => {
            dispatch(
              updateNote({
                index: route.params.index,
                data: { title, txt },
              })
            );
            navigation.navigate("allNotes");
          }}
          className="bg-gray-700 w-50 h-14 p-2 mt-8 rounded-2xl items-center justify-center"
        >
          <Text className="text-gray-200 font-semibold text-lg self-center m-2">
            Update Note
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UpdateNote;
const styles = StyleSheet.create({
  inputStyle: {
    width: "90%",
    height: 50,
  },
});
