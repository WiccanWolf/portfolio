const ContactForm = () => {
  return (
    <>
      <title>Contact Me</title>
      <h1 style={{ marginTop: '1rem' }}>Contact Me</h1>
      <form
        action='https://public.herotofu.com/v1/4902e6e0-f786-11ef-831c-f7fd4c94a18d'
        method='post'
        acceptCharset='UTF-8'
        className='contact'
      >
        <div>
          <input
            className='contact'
            name='Name'
            id='name'
            type='text'
            placeholder='Your name'
            required
          />
        </div>
        <div>
          <input
            className='contact'
            name='Email'
            id='email'
            type='email'
            placeholder='Your email'
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

        <div>
          <input type='submit' value='Send Message' />
          <div
            style={{
              textIndent: '-99999px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              position: 'absolute',
            }}
            aria-hidden='true'
          >
            <input
              type='text'
              name='_gotcha'
              tabIndex='-1'
              autoComplete='off'
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
