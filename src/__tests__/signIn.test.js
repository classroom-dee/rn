import { render, fireEvent, waitFor } from '@testing-library/react-native';
// ...

import SignIn from '../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // Mock
      const handleSubmitStub = jest.fn();

      // Render
      const { getByPlaceholderText, getByText } = render(
        <SignIn onSubmit={handleSubmitStub} />
      );

      // Form input & submission
      fireEvent.changeText(getByPlaceholderText('Username'), 'test1');
      fireEvent.changeText(getByPlaceholderText('Password'), 'test1');
      fireEvent.press(getByText('Sign in'));

      await waitFor(() => {
        expect(handleSubmitStub).toHaveBeenCalledTimes(1);
        expect(handleSubmitStub).toHaveBeenCalledWith(
          {username: 'test1', password: 'test1'},
          expect.any(Object) // because the stube is called like this: stub({...argObject}, expect.any(Object))
        );
      });
    });
  });
});