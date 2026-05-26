import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { submitBooking } from '../services/bookingService';

function BookingForm() {
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await submitBooking(data);
      setSuccess('Booking confirmed! Our team will reach out soon.');
      reset();
    } catch (error) {
      setSuccess('Unable to complete booking. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Full Name
          <input {...register('customerName', { required: 'Name is required' })} className="rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="Enter your name" />
          {errors.customerName && <span className="text-sm text-red-500">{errors.customerName.message}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Mobile Number
          <input {...register('mobileNumber', { required: 'Mobile number is required' })} className="rounded-2xl border border-slate-200 bg-slate-50 p-3" placeholder="Enter mobile number" />
          {errors.mobileNumber && <span className="text-sm text-red-500">{errors.mobileNumber.message}</span>}
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-700">
        Address
        <textarea {...register('address', { required: 'Address is required' })} className="rounded-3xl border border-slate-200 bg-slate-50 p-4" placeholder="Enter full address" rows="3" />
        {errors.address && <span className="text-sm text-red-500">{errors.address.message}</span>}
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Service Type
          <select {...register('serviceType', { required: 'Select a service type' })} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <option value="">Choose service</option>
            <option value="AC Repair">AC Repair</option>
            <option value="AC Installation">AC Installation</option>
            <option value="AC Gas Filling">AC Gas Filling</option>
            <option value="Ac Maintenance">Ac Maintenance</option>
          </select>
          {errors.serviceType && <span className="text-sm text-red-500">{errors.serviceType.message}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Preferred Date
          <input type="date" {...register('preferredDate', { required: 'Date is required' })} className="rounded-2xl border border-slate-200 bg-slate-50 p-3" />
          {errors.preferredDate && <span className="text-sm text-red-500">{errors.preferredDate.message}</span>}
        </label>
      </div>
      <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-white text-sm font-semibold hover:bg-secondary transition">
        Submit Booking
      </button>
      {success && <p className="text-sm text-emerald-600">{success}</p>}
    </form>
  );
}

export default BookingForm;
