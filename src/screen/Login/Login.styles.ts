import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f131b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: 320,
    padding: 40,
    backgroundColor: '#27262a',
    borderWidth: 1,
    borderColor: '#383b42',
    borderRadius: 18,
    gap: 18,
  },

  title: {
    color: '#b8bcc3',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },

  subtitle: {
    color: '#b8bcc3',
    opacity: 0.7,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },

  input: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#383b42',
    backgroundColor: '#0f131b',
    color: '#b8bcc3',
    fontSize: 14,
  },

  button: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#383b42',
    alignItems: 'center',
  },

  buttonText: {
    color: '#b8bcc3',
    fontSize: 15,
  },
});