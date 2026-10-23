import { StyleSheet, Text, View } from "react-native";

function Stopwatch({ seconds, isRunning }) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <View style={styles.card}>
      <Text style={styles.label}>LAB TIMER</Text>

      <Text style={styles.time}>{`${mins}:${secs}`}</Text>

      <View
        style={[
          styles.pill,
          isRunning ? styles.pillRunning : styles.pillPaused,
        ]}
      >
        <Text
          style={[
            styles.pillText,
            isRunning ? styles.textRunning : styles.textPaused,
          ]}
        >
          {isRunning ? "Running…" : "Paused"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#4338ca",
    borderRadius: 22,
    padding: 22,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#4338ca",
    shadowOpacity: 0.35,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#c7d2fe",
    marginBottom: 6,
  },
  time: {
    fontSize: 64,
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: 12,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillRunning: {
    backgroundColor: "rgba(110, 231, 183, 0.25)",
  },
  pillPaused: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  pillText: {
    fontSize: 14,
    fontWeight: "700",
  },
  textRunning: {
    color: "#6ee7b7",
  },
  textPaused: {
    color: "#c7d2fe",
  },
});

export default Stopwatch;
