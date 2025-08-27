import { useForm } from 'react-hook-form'
import image from '../../assets/images/formImage.jpg'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'



// default values
const object = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
    dateOfBirth: '',
    gender: '',
}

// validation schema
const schema = zod.object({
    name: zod.string('Name must be a string')
        .nonempty('Name is required')
        .min(3, 'Name must be at least 3 characters long')
        .max(20, 'Name must be at most 20 characters long'),

    email: zod.email('Invalid email address').nonempty('Email is required'),
    password: zod.string().nonempty('Password is required')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
            'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    rePassword: zod.string().nonempty('Password is required')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
            'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
    dateOfBirth: zod.coerce.date('Date of birth must be a valid date')
        .refine(function (data) {
            return new Date().getFullYear() - data.getFullYear() >= 18 ? true : false
        }, 'You must be at least 18 years old')
    ,
    gender: zod.enum(['male', 'female'], 'Gender is required'),
}).refine(function (data) {
    if (data.password !== data.rePassword) {
        return false
    }
    return true
}, 'Passwords do not match')



const Register = () => {

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()


    // react hook form
    const { handleSubmit, register, formState } = useForm({
        defaultValues: object,

        resolver: zodResolver(schema),

        mode: 'onBlur',

    });

    // on submit
    const onSubmit = (values) => {
        setIsLoading(true)

        // send data to server
        axios.post(`https://linked-posts.routemisr.com/users/signup`, values).then((res) => {


            toast.success(res.data.message)


            setTimeout(() => {
                navigate('/login')
            }, 2000)



        }).catch((err) => {

            toast.error(err.response.data.error)
        }).finally(() => {
            setIsLoading(false)
        })
    }







    return (
        <>
            <section className="bg-white text-black w-11/12 md:w-10/12 lg:w-1/2 m-auto
            mt-10 md:mt-20 lg:mt-32 rounded-3xl shadow-2xl overflow-hidden">
                <div className='flex'>
                    {/* image */}
                    <figure className='hidden lg:block lg:w-1/3 py-7 pl-7'>
                        <img src={image} alt="" className='w-full h-full object-cover rounded-xl
                        shadow-2xl' />
                    </figure>

                    {/* form */}
                    <div className='w-full lg:w-2/3 p-7' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold formHead'>Register_</h1>

                        <form className='pt-5 lg:pt-12'>
                            {/* inputs */}
                            <div className='flex flex-col gap-4'>
                                <div>
                                    <input type="text"
                                        placeholder='Name'
                                        name='name'
                                        id='name'
                                        className='w-full my-2 p-2 border-b-3 border-gray-400 placeholder:text-gray-700 focus:outline-none
                                focus:border-b-3 focus:border-blue-500'
                                        {...register('name')}
                                    />

                                    {formState.errors.name && formState.touchedFields.name && <span className='text-red-500'>{formState.errors.name.message}</span>}

                                </div>


                                <div>
                                    <input type="email"
                                        placeholder='Email'
                                        name='email'
                                        id='email'
                                        className='w-full my-2 p-2 border-b-3 border-gray-400 placeholder:text-gray-700 focus:outline-none
                                focus:border-b-3 focus:border-blue-500'
                                        {...register('email')}
                                    />

                                    {formState.errors.email && formState.touchedFields.email && <span className='text-red-500'>{formState.errors.email.message}</span>}
                                </div>

                                <div>
                                    <input type="password"
                                        placeholder='Password'
                                        name='password'
                                        id='password'
                                        className='w-full my-2 p-2 border-b-3 border-gray-400 placeholder:text-gray-700 focus:outline-none
                                focus:border-b-3 focus:border-blue-500'
                                        {...register('password')}
                                    />

                                    {formState.errors.password && formState.touchedFields.password && <span className='text-red-500'>{formState.errors.password.message}</span>}
                                </div>

                                <div>
                                    <input type="password"
                                        name='rePassword'
                                        id='rePassword'
                                        placeholder='Re-Password'
                                        className='w-full my-2 p-2 border-b-3 border-gray-400 placeholder:text-gray-700 focus:outline-none
                                focus:border-b-3 focus:border-blue-500'
                                        {...register('rePassword')}
                                    />

                                    {formState.errors.rePassword && formState.touchedFields.rePassword && <span className='text-red-500'>{formState.errors.rePassword.message}</span>}
                                </div>

                            </div>

                            {/* date */}
                            <div className='pt-5 md:pt-7 lg:pt-9'>
                                <label htmlFor="date" className='text-2xl'>Birthday</label>

                                <input type="date"
                                    name='dateOfBirth'
                                    id='dateOfBirth'
                                    placeholder='Date'
                                    className='w-full my-2 p-2 border-b-3 border-gray-400 placeholder:text-gray-700 focus:outline-none
                                focus:border-b-3 focus:border-blue-500'
                                    {...register('dateOfBirth')}
                                />

                                {formState.errors.dateOfBirth && formState.touchedFields.dateOfBirth && <span className='text-red-500'>{formState.errors.dateOfBirth.message}</span>}
                            </div>

                            {/* gender */}
                            <div className='pt-5 md:pt-7 lg:pt-9'>

                                <h3 className='text-2xl pb-4'>Gender</h3>

                                <div className='flex gap-4'>
                                    <input type="radio" name="gender" value="male" id="male"
                                        {...register('gender')} />
                                    <label for="male">Male</label>
                                </div>

                                <div className='flex gap-4'>
                                    <input type="radio" name="gender" value="female" id="female"
                                        {...register('gender')}
                                    />
                                    <label for="female">Female</label>
                                </div>


                                {formState.errors.gender && formState.touchedFields.gender && <span className='text-red-500'>{formState.errors.gender.message}</span>}

                            </div>

                            {/* button */}
                            <div className='pt-5 md:pt-7 lg:pt-9'>
                                <button className='hover:bg-black bg-black/80
                                 text-white font-bold py-3 rounded-full
                                 cursor-pointer w-full'>
                                    {isLoading ? <CircleLoader color='white' size={20} /> : 'Sign Up'}
                                </button>
                            </div>

                            {/* login */}
                            <div className='pt-5 md:pt-7 lg:pt-9'>
                                <p>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Register