function ReviewCard({ review }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <img
          src={review.image}
          alt={review.customerName}
          className="h-14 w-14 rounded-full object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/seed/avatar/200/200'; }}
        />
        <div>
          <h4 className="font-semibold text-slate-900">{review.customerName}</h4>
          <div className="flex items-center gap-1 text-sm text-amber-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
        </div>
      </div>
      <p className="text-sm leading-7 text-slate-600">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;
