import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import './signup.css'

const Signup = () => {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .min(4, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        email: Yup.string()
        .email('Invalid email')
        .required('Required'),
        password: Yup.string()
        .min(6, 'Password is Too Weak')
        .matches(/^(?=.*[a-z])(?=.*[!@#$%^&*])/, 'Must Contain 6 Characters and 1 special Case Character')
        .required('Password is Required'),
        passwordConfirm: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'Password must Match'
        )
    });

    const initial = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
   }

    const SubmitForm = (values) => {
        console.log(values)
    }
  return (
    <>
        <div className="signup-container">
            <div className="cancel"></div>
            <div className="signup-row">
               <Formik
                    initialValues={initial}
                    validationSchema={SignupSchema}
                    onSubmit={SubmitForm}
                >
                {({ errors, touched }) => (
                    <form>
                        <div className="signup-input">
                          <label htmlFor="name">Name</label>

                            <Field
                             type="text"
                             name='name' 
                             placeholder='John Doe'
                             className={`input ${touched.firstName && errors.firstName ? 'fail' : 'pass'}`}
                            />
                        </div>
                        {errors.name && touched.name ? (
                            <div>{errors.name}</div>
                        ) : null}
                        <div className="signup-input">
                            <label htmlFor="email">E-mail</label>
                            <Field
                             type="text" 
                             name='email' 
                             placeholder='exaple@gmail.com'
                             className={`input ${touched.email && errors.email ? 'fail' : 'pass'}`}
                             />
                        </div>
                        {errors.email && touched.email ? (
                            <div>{errors.email}</div>
                        ) : null}
                        <div className="signup-input">
                           <label htmlFor="password">Password</label>
                            <Field 
                            type="password" 
                            name='password' 
                            placeholder=''
                            className={`input ${touched.password && errors.password ? 'fail' : 'pass'}`}
                            />
                        </div>
                        {errors.password && touched.password ? (
                            <div>{errors.password}</div>
                        ) : null}
                        <div className="signup-input">
                           <label htmlFor="name">Confirm Password</label>
                            <Field
                             type="password" 
                             name='passwordConfirm' 
                             placeholder=''
                             className={`input ${touched.passwordConfirm && errors.passwordConfirm ? 'fail' : 'pass'}`}
                            />
                        </div>
                        {errors.passwordConfirm && touched.passwordConfirm ? (
                            <div>{errors.passwordConfirm}</div>
                        ) : null}
                        <div className="lower-level">
                            <button type='submit'>Submit</button>
                            <span><Link to='/'>forget password?</Link></span>
                        </div>
                    </form>
                )}
                </Formik>
            </div>
            <div className="signup-col-two">
               <div className="social-link-1"></div>
               <div className="social-link-2"></div>
               <div className="social-link-3"></div>
            </div>
        </div>
    </>
  )
}

export default Signup