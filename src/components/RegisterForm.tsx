import {Button, Card} from '@rneui/base';
import {Input} from '@rneui/themed';
import {Controller, useForm} from 'react-hook-form';
import {Credentials} from '../types/Localtypes';
import {useUser} from '../hooks/apiHooks';

const RegisterForm = () => {
  const {postUser, getUsernameAvailable, getEmailAvailable} = useUser();
  const initValues = {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: initValues,
    mode: 'onBlur',
  });

  const doRegister = async (inputs: Credentials) => {
    await postUser(inputs);
  };

  return (
    <Card>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Käyttäjänimi vaaditaan vitun pelle',
          },
          validate: async (value) => {
            try {
              const {available} = await getUsernameAvailable(value);
              console.log('username available?', value, available);
              return available ? available : 'Username taken';
            } catch (error) {
              console.log((error as Error).message);
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.username?.message}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          // pattern: {
          //   value:
          //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
          //   message:
          //     'Password must contain at least 5 characters, 1 special character (@, $, !, %, *, #, ?, &), and 1 number',
          // },
          required: {value: true, message: 'is required'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
      />

      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'is required'},
          validate: (value) =>
            value !== getValues().password ? true : 'Passwords do not match',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Confirm password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.confirmPassword?.message}
          />
        )}
        name="confirmPassword"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
          required: {value: true, message: 'is required'},
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Invalid email address',
          },
          validate: async (value) => {
            try {
              const {available} = await getEmailAvailable(value);
              return available ? available : 'Email taken';
            } catch (error) {
              console.log((error as Error).message);
            }
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.email?.message}
            autoCapitalize="none"
          />
        )}
        name="email"
      />
      <Button title="Register" onPress={handleSubmit(doRegister)} />
    </Card>
  );
};

export default RegisterForm;
