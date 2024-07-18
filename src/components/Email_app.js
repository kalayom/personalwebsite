import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button ,FormGroup,Checkbox} from 'semantic-ui-react';
import Swal from "sweetalert2";

const SERVICE_ID = "service_yce1o1r";
const TEMPLATE_ID = "template_uvwi99d";
const PUBLIC_KEY = "o8U4Blk3i2sLbnlfR";

// account-o8U4Blk3i2sLbnlfR
// service-service_yce1o1r
// Template ID:template_uvwi99d

export default function Email_app(){

  // const [formData, setFormData] = useState({
  //   User_name : '',
  //   User_email : '',
  //   Phone_number : '',
  //   User_message : '',
  //   Agriculture : false,
  //   Machinery : false,
  //   Constraction: false,
  //   Health : false,
  // });

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === 'checkbox' ? checked : value, // Handle checkbox
  //   });
  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID,e.target, PUBLIC_KEY)
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

  
  {/* --- handleOnSubmit method --- */}
    return (
    <div className="email-app">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='User_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='User_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-phone-number'
          control={Input}
          label='Phone number'
          name='Phone_number'
          placeholder='Phone number'
          required
          icon='phone'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='User_message'
          placeholder='Message…'
          required
        />
         {/* <FormGroup inline>

         <Form.Field
          control={Checkbox}
          label='Agriculture'
          name='Agriculture'
          Value='Agriculture'
          onChange={handleChange}
          
        />
        <Form.Field
          control={Checkbox}
          label='Machinery'
          name='Machinery'
          Value='Machinery'
          onChange={handleChange}
        />
        </FormGroup>
        <FormGroup inline>
        <Form.Field
          control={Checkbox}
          label='Constraction'
          name='Constraction'
          Value='Constraction'
          onChange={handleChange}
        />
        <Form.Field
          control={Checkbox}
          label='Health'
          name='Health'
          Value='Health'
          onChange={handleChange}
        />
         </FormGroup> */}
          
        
        
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
}