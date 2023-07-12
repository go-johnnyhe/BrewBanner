// import emailjs from 'emailjs-com'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


// const SERVICE_ID = "service_885cw97";
// const TEMPLATE_ID = "template_76uilkx";
// const USER_ID = "aA9YXj15SJU7mu_rf";



// const Contact = () => {

//     const handleOnSubmit = (e) => {
//         e.preventDefault();
//         emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
//           .then((result) => {
//             console.log(result.text);
//             Swal.fire({
//               icon: 'success',
//               title: 'Message Sent Successfully'
//             })
//           }, (error) => {
//             console.log(error.text);
//             Swal.fire({
//               icon: 'error',
//               title: 'Ooops, something went wrong',
//               text: error.text,
//             })
//           });
//         e.target.reset()
//     }

//     return (
//     <div className="form-container">
//       <Form onSubmit={handleOnSubmit}>
//         <Form.Field
//           id='form-input-control-email'
//           control={Input}
//           label='Email'
//           name='user_email'
//           placeholder='Email…'
//           required
//           icon='mail'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='user_name'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-textarea-control-opinion'
//           control={TextArea}
//           label='Message'
//           name='user_message'
//           placeholder='Message…'
//           required
//         />
//         <Button type='submit' color='green'>Submit</Button>
//       </Form>
//     </div>
//     )
// }

// export default Contact

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_885cw97', 'template_76uilkx', form.current, 'aA9YXj15SJU7mu_rf')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
          })
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact-form'>
      <div>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='John Doe' required />
      <label>Email</label>
      <input type="email" name="user_email" placeholder='johndoe@gmail.com' required />
      <label>Message</label>
      <textarea name="user_message" required />
      </div>
      <button className='learn-more' type="submit" value="Send" style={{width: '100%'}}>Submit</button>
    </form>
  );
};