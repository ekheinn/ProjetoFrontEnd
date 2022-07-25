export default function Input({
	name,
	label,
	error,
	placeholder,
	type,
	register,
}) {
	return (
		<>
			<label>{label}</label>
			<p>{error}</p>
			<input
				{...register(name)}
				type={type || 'text'}
				placeholder={placeholder}
			/>
		</>
	)
}
