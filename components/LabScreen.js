import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import useStopwatch from "../hooks/useStopwatch";
import AppButton from "./AppButton";
import PracticeTracker from "./PracticeTracker";
import Stopwatch from "./StopWatch";

function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const seconds = useStopwatch(isRunning);

  const handleSolve = () => setSolved((s) => s + 1);
  const handleReset = () => setSolved(0);
  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>IT313 • LABORATORY SESSION</Text>
      <Text style={styles.title}>Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch seconds={seconds} isRunning={isRunning} />

      <View style={styles.row}>
        <AppButton
          title="Start"
          onPress={handleStart}
          variant="success"
          style={styles.flex}
        />
        <AppButton
          title="Stop"
          onPress={handleStop}
          variant="danger"
          style={styles.flex}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  content: {
    paddingTop: 56,
    paddingHorizontal: 18,
    paddingBottom: 32,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#4338ca",
    marginBottom: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  flex: {
    flex: 1,
  },
});

export default LabScreen;
