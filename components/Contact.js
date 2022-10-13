import {useState} from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { SEND_MESSAGE } from '../components/config/urls'
import  {successToast,errorToast} from '../components/Message/Message'
import { ToastContainer } from 'react-toastify';
import Alert from './Error/Alert'
import backend_instance from '../components/services/axios_backend'


const Contact = () => {
  const [_load_spinner_, set_load_spinner_] = useState(false)
  // const [_no_more_message_, set_no_more_message_] = useState(false)

  const ContactValidation = Yup.object().shape({
      email: Yup.string().email('Invalid email').required("Email required"),
      fullname:Yup.string().max(25, 'Nobody have that long name except Martian').required("Name required"),
      message:Yup.string().max(500, 'Ohh Darling that\'s to long message can you make it short').required("Ohhh darling you need to say something !!!!"),
    });

  return (
    <>
    {/* <div> */}
    <div className="bg-[#011627] ">
    <Formik
      initialValues={{
          email:"",
          fullname:"",
          message:"",
          added:null,
      }}
      validationSchema={ContactValidation}
      onSubmit={(values,actions) => {
        set_load_spinner_(true)
        let data = {
          email:values.email,
          fullname:values.fullname,
          message:values.message,
        }
        actions.setStatus(undefined);
        backend_instance({
          url:SEND_MESSAGE,
          method:"POST",
          data:data
        }).then((res)=>{
          try{
            // set_no_more_message_(true
            successToast("Message Send")
            set_load_spinner_(false)
          }catch(err){
            errorToast("Something went wrong")
          }
        }).catch((err)=>{
          try{
            // console.log(err.response.data.message)
            // console.log(err.response.data.availableIn)
            // console.log(Math.floor((parseInt(err.response.data.availableIn) / 60)/60))
            if(err.response){
              if(err.response.data.email){
                errorToast(err.response.data.email.error)
              }
            }else{
              errorToast("Message was not send")
            }
            if(err.response.data.availableIn){
              errorToast("wait for " + Math.floor((parseInt(err.response.data.availableIn) / 60)/60)+ " hrs")
            }
            set_load_spinner_(false)
          }catch(err){
            errorToast("something went wrong")
          }
        }).finally(()=>{
          set_load_spinner_(false)
        })
      }}
      >
        {({errors,status,touched}) => (
          <>
            {/* <div className="flex justify-center text-white"> */}
            <div className="m-auto w-[70%] p-3 outline outline-offset-2 outline-2 outline-blue-500/50">
            <center>
              <h1 className="text-white text-[30px] font-bold">
                Contact
              </h1>
            </center>
              <div className="m-auto w-[85%] ">
              <Form autoComplete="off" noValidate>
              <label className="text-white font-bold text-[20px] m-4">
                  E-Mail
              </label>
              <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  noValidate
                  className="m-2 block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
              {
                errors.email && touched.email
                ?
                  <>
                    <Alert error_data={errors.email}/>
                  </>
                :
                  null
                }
                <label className="text-white font-bold text-[20px] m-4">
                  Full-Name
                </label>
                <Field
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  noValidate
                  className="m-2  block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                {errors.fullname && touched.fullname
                ?
                  <>
                  <Alert error_data={errors.fullname}/>
                  </>
                :
                  null
                }
                <label className="text-white font-bold text-[20px] m-4">
                  Message
                </label>
                <Field
                  component="textarea"
                  rows="4"
                  id="subject"
                  type="text"
                  name="message"
                  placeholder="I will be happy to contact .."
                  className="m-2 block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-green appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

                >
                </Field>
                {errors.message && touched.message
                ?
                  <>
                    <Alert error_data={errors.message}/>
                  </>
                :
                  null
                }
                {(_load_spinner_)
                  ?
                  <button disabled type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                    <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                    </svg>
                    Sending ...
                  </button>
                  :
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                  >
                    Send E-Mail
                  </button>
                }
              </Form>
              </div>
            </div>
            </>
          )}

      </Formik>

      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
</>
  )
}

export default Contact