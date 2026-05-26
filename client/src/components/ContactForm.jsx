import { useForm } from 'react-hook-form';

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-2xl font-semibold text-slate-900">Contact Us</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Name
          <input
            {...register('name', { required: 'Name is required' })}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm"
            placeholder="Enter your full name"
          />
          {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-700">
          Phone Number
          <input
            {...register('phone', { required: 'Phone number is required' })}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm"
            placeholder="Enter phone number"
          />
          {errors.phone && <span className="text-sm text-red-500">{errors.phone.message}</span>}
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-700">
        Message
        <textarea
          {...register('message', { required: 'Message is required' })}
          className="min-h-[140px] rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm"
          placeholder="How can we help you today?"
        />
        {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
      </label>
      <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-white transition hover:bg-secondary">
        Submit Request
      </button>
      {isSubmitSuccessful && <p className="text-sm text-green-600">Thanks! We will contact you soon.</p>}
    </form>
  );
}

export default ContactForm;
