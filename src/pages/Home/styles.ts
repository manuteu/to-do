import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1A1A1A',
    marginBottom: 10,
    paddingHorizontal: 20
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
  input: {
    padding: 16,
    height: 56,
    fontSize: 16,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    borderRadius: 6
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    marginBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
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
