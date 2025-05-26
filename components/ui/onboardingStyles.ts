import { StyleSheet } from 'react-native';

export const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8f2fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 40, 
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    marginTop: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    opacity: 0.4,
    marginHorizontal: 5,
  },
  activeDot: {
    opacity: 1,
  },
  imageWrapper: {
    backgroundColor: '#fff2',
    borderRadius: 100,
    padding: 8,
    marginBottom: 22,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#f3eaff',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 60,
    marginBottom: 18,
  },
  buttonText: {
    color: '#8f2fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skipText: {
    color: '#fff',
    fontSize: 15,
    opacity: 0.8,
    textAlign: 'center',
  },
  imageAndDotsContainer: {
    alignItems: 'center',
    marginTop: 40, 
    marginBottom: 10, 
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    marginLeft: -25,
  },

});