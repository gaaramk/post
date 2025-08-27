import { useForm } from 'react-hook-form'
import image from '../../assets/images/formImage.jpg'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CircleLoader } from 'react-spinners'
import { authContext } from '../../context/AuthContext'



// default values
const object = {
    email: '',
    password: '',
}

// validation schema
const schema = zod.object({
    email: zod.email('Invalid email address').nonempty('Email is required'),
    password: zod.string().nonempty('Password is required')
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
            'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character'
        ),
})


const Login = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { insertUserToken } = useContext(authContext);

    const navigate = useNavigate();


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
        axios.post(`https://linked-posts.routemisr.com/users/signin`, values).then((res) => {

            // save token in context
            insertUserToken(res.data.token)

            // save token in local storage
            localStorage.setItem('token', res.data.token)

            // show success message
            toast.success(res.data.message);

            // redirect to home
            setTimeout(() => {
                navigate('/home')
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
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold formHead'>Login</h1>

                        <form className='pt-5 lg:pt-12'>
                            {/* inputs */}
                            <div className='flex flex-col gap-4'>


                                {/* email */}
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

                                {/* password */}
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

                            </div>



                            {/* button */}
                            <div className='pt-5 md:pt-7 lg:pt-9'>
                                <button className='hover:bg-black bg-black/80
                                 text-white font-bold py-3 rounded-full
                                 cursor-pointer w-full'>
                                    {isLoading ? <CircleLoader color='white' size={20} /> : 'Login'}
                                </button>
                            </div>

                            {/* register */}
                            <div className='pt-5 md:pt-7 lg:pt-9'>
                                <p>Don't have an account? <Link to='/register' className='text-blue-500 hover:underline'>Register</Link></p>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Login