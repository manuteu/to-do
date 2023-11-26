import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#262626',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 10
  },
  taskName: {
    fontSize: 14,
    color: '#F2F2F2'
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.8
  },
});
