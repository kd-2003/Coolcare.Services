import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      login(response, response.token);
      navigate('/');
    } catch (error) {
      setErrorMessage('Unable to create account. Try again with a different email.');
    }
  };

  return (
    <section className="container py-20">
      <div className="mx-auto max-w-xl rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl">
        <h1 className="text-3xl font-semibold text-slate-900">Create Account</h1>
        <p className="mt-3 text-slate-600">Register to start booking AC repair, installation and home services instantly.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Full name
            <input
              {...register('name', { required: 'Name is required' })}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              placeholder="John Doe"
            />
            {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Email address
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Password
            <input
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must have at least 6 characters' } })}
              type="password"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              placeholder="Enter a strong password"
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-700">
            Confirm password
            <input
              {...register('confirmPassword', {
                required: 'Confirm your password',
                validate: (value) => value === watch('password') || 'Passwords do not match',
              })}
              type="password"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}
          </label>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <button className="w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">Register</button>
          <p className="text-sm text-slate-600">
            Already registered? <Link to="/login" className="text-primary font-semibold">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
