import { Pressable, StyleSheet, Text } from "react-native";

function AppButton({ title, onPress, variant = "primary", style }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, variant === "ghost" && styles.textGhost]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#4338ca",
  },
  success: {
    backgroundColor: "#10b981",
  },
  danger: {
    backgroundColor: "#ef4444",
  },
  ghost: {
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderColor: "#c7d2fe",
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  textGhost: {
    color: "#4338ca",
  },
});

export default AppButton;
