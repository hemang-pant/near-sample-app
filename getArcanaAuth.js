import { AuthProvider } from '@arcana/auth';

const auth = new AuthProvider("xar_test_cb0a3bc5de2c506bd33ef79f4c381bf964f21375", {
  theme: 'light',
  network: 'testnet',
  connectOptions: {
    compact: true
  }
});

const getAuth = () => {
  return auth;
};

export { getAuth };
