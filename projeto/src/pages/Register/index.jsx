import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../components/Input'
export default function Register() {
	const schema = yup.object().shape({
		name: yup
			.string()
			.required('Seu nome é obrigatório!')
			.min(3, 'Minimo de 3 letras'),
		age: yup.string().required('Sua idade é obrigatória!'),
		email: yup
			.string()
			.required('Seu email é obrigatório!')
			.email('E-mail inválido'),
		password: yup
			.string()
			.required('Sua senha é obrigatória!')
			.min(6, 'Minimo de 6 letras'),
		confirmPassword: yup
			.string()
			.required('Confirme sua senha!')
			.min(6, 'Minimo de 6 letras')
			.oneOf([yup.ref('password')], 'Senha não corresponde'),
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data) => {
		console.log(data)
	}
	return (
		<>
			<h1>Registro</h1>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					name={'name'}
					label={'Nome'}
					type={'text'}
					register={register}
					placeholder={'Digite aqui seu nome'}
					error={errors.name?.message && errors.name.message}
				/>

				<Input
					name={'email'}
					label={'E-mail'}
					type={'email'}
					register={register}
					placeholder={'Digite aqui seu email'}
					error={errors.email?.message && errors.email.message}
				/>

				<Input
					name={'age'}
					label={'Idade'}
					type={'number'}
					register={register}
					placeholder={'Digite aqui sua idade'}
					error={errors.age?.message && errors.age.message}
				/>

				<Input
					name={'password'}
					label={'Senha'}
					type={'password'}
					register={register}
					placeholder={'Digite aqui sua senha'}
					error={errors.password?.message && errors.password.message}
				/>

				<Input
					name={'confirmPassword'}
					label={'Confirme sua senha'}
					type={'password'}
					register={register}
					placeholder={'Confirme sua senha'}
					error={
						errors.confirmPassword?.message && errors.confirmPassword.message
					}
				/>

				<button type="submit">Cadastrar</button>
			</form>
		</>
	)
}
