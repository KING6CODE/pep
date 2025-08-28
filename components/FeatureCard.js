export default function FeatureCard({ title, text }) {
return (
<div className="card p-6">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="mt-2 text-slate-600">{text}</p>
</div>
);
}
