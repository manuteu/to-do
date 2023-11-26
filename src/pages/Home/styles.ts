import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 48,
    zIndex: 10,
    marginTop: -30
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  infoGroup: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  createText: {
    fontSize: 14,
    color: '#4EA8DE'
  },
  concludedText: {
    color: '#8284FA',
    fontSize: 14
  },
  numberBox: {
    borderRadius: 50,
    backgroundColor: '#333333'
  },
  number: {
    color: '#D9D9D9',
    fontSize: 12,
    paddingVertical: 6,
    paddingHorizontal: 12
  }
});
