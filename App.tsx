import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/StackNavigation";
import { DataContext } from "./src/app/utils/Context";
import { TodoItemProps } from "./src/app/todo/TodoItem";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [tasks, setTasks] = useState<TodoItemProps[]>([]);
  return (
    <SafeAreaProvider>
      <DataContext.Provider value={{ tasks, setTasks }}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </DataContext.Provider>
    </SafeAreaProvider>
  );
}
