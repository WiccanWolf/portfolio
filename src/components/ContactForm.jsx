import { useFormData } from 'herotofu-react';
import { Button } from 'react-bootstrap';

const ContactForm = () => {
  const { formState, getFormSubmitHandler } = useFormData(
    'https://public.herotofu.com/v1/4902e6e0-f786-11ef-831c-f7fd4c94a18d'
  );

  const handleSubmit = () => {
    return <></>;
  };

  return (
    <>
      <title>Contact Me</title>
      <h1 style={{ marginTop: '1rem' }}>Contact Me</h1>
      {!!formState.status && (
        <div className='py-2'>Current form status is: {formState.status}</div>
      )}
      <form onSubmit={getFormSubmitHandler()}>
        <div className='pt-0 mb-3'>
          <input
            aria-label='name'
            type='text'
            placeholder='Your name'
            name='name'
            className='contact'
            required
          />
        </div>
        <div className='pt-0 mb-3'>
          <input
            aria-label='email'
            type='email'
            placeholder='Email'
            name='email'
            className='contact'
            required
          />
        </div>
        <div>
          <textarea
            aria-label='message'
            placeholder='Your message'
            name='message'
            className='contact'
            required
          />
        </div>
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export default ContactForm;
