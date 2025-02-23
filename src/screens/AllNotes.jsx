import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import React from "react";
//Global State
import { useSelector } from "react-redux";
//Navigation
import { useNavigation } from "@react-navigation/native";
//delte function from userSlice
import { deleteNote } from "../redux/slice/NotesSlice";
import { useDispatch } from "react-redux";
const AllNotes = () => {
  const navigation = useNavigation();
  const notes = useSelector((state) => state.notes.notes);
  // console.log(users);
  //using dispatch for deleteNote method
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-slate-950 ">
      <View
        className="mb-6"
        style={{ marginTop: Platform.OS === "android" ? 45 : 0 }}
      >
        {notes.length ? (
          <FlatList
            data={notes}
            renderItem={({ item, index }) => (
              <View className="flex items-center justify-center my-5 mx-5">
                <View className="border border-gray-400 mx-10 rounded-xl flex-row justify-between w-96  ">
                  <View className="w-60 h-auto mx-2">
                    <Text className="text-xl text-gray-100 font-semibold mt-4 mb-2 ">
                      Title: {item.title}
                    </Text>
                    <Text className="text-xl text-gray-100 font-semibold  my-1 ">
                      Disc: {item.txt}
                    </Text>
                  </View>
                  <View className="flex-col items-center mx-2 ">
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("updateNote", {
                          //sending index and item to updateNote Screen, using navigation
                          index,
                          item,
                        });
                      }}
                    >
                      <Image
                        source={require("../../assets/pen.png")}
                        className="w-8 h-8 rounded-xl mt-2 mb-1 mr-1"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(deleteNote(index));
                      }}
                    >
                      <Image
                        source={require("../../assets/bin.png")}
                        className="w-8 h-8 rounded-xl mt-2 mb-1 mr-1"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        ) : (
          <View className="flex items-center justify-center">
            <Text className="text-gray-100 font-semibold text-2xl">
              No Notes available...
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("addNote")}
        className=" bg-slate-50 w-14 h-14  absolute
        bottom-10 right-8  rounded-2xl shadow-md shadow-slate-350 "
      >
        <Text className="text-gray-800 text-4xl font-bold self-center m-2">
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AllNotes;
