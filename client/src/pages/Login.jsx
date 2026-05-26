import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from?.pathname || '/';

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      login(response, response.token);
      navigate(from, { replace: true });
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className="container py-20">
      <div className="mx-auto max-w-xl rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl">
        <h1 className="text-3xl font-semibold text-slate-900">Welcome Back</h1>
        <p className="mt-3 text-slate-600">Login to manage bookings and access your dashboard.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
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
              {...register('password', { required: 'Password is required' })}
              type="password"
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              placeholder="Enter your password"
            />
            {errors.password && <span className="text-sm text-red-500">{errors.password.message}</span>}
          </label>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <button className="w-full rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">Login</button>
          <p className="text-sm text-slate-600">
            Don’t have an account? <Link to="/register" className="text-primary font-semibold">Register now</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
