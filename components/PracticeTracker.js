import { StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";

const GOAL = 5;

function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>PRACTICE PROBLEMS</Text>

      <Text style={styles.count}>{`Solved: ${solved}`}</Text>

      <View style={styles.dots}>
        {Array.from({ length: GOAL }).map((_, i) => (
          <View key={i} style={[styles.dot, i < solved && styles.dotOn]} />
        ))}
      </View>

      {solved >= GOAL && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Great job!</Text>
        </View>
      )}

      <View style={styles.row}>
        <AppButton title="Solve +1" onPress={onSolve} style={styles.flex} />
        <AppButton
          title="Reset"
          onPress={onReset}
          variant="ghost"
          style={styles.flex}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#0f172a",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
    color: "#64748b",
    marginBottom: 6,
  },
  count: {
    fontSize: 34,
    fontWeight: "800",
    color: "#0f172a",
    marginBottom: 14,
  },
  dots: {
    flexDirection: "row",
    marginBottom: 16,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#e2e8f0",
    marginRight: 10,
  },
  dotOn: {
    backgroundColor: "#10b981",
  },
  banner: {
    backgroundColor: "#d1fae5",
    borderRadius: 14,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  bannerText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#047857",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
  flex: {
    flex: 1,
  },
});

export default PracticeTracker;
