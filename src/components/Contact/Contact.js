import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_tnwyscv', e.target, 'eBoYorv3KNGRjdaOe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className='flex justify-center'>
            <div className='w-full'>
                <h2 className='text-5xl uppercase font-bold text-center py-6'>Contact Me</h2>
                <div class="grid lg:grid-cols-2 grid-cols-1 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/xjbhB41/contact-us.jpg" alt="Album" /></figure>
                    <div class="card-body">
                        <form onSubmit={sendEmail}>
                            <input type="text" placeholder="Subject" class="input input-bordered w-full mb-3" name='subject' /><br />
                            <input type="text" placeholder="Your Name" class="input input-bordered w-full mb-3" name='name' /><br />
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full mb-3" name='email' /><br />
                            <textarea class="textarea textarea-bordered w-full mb-3" placeholder="Type your message here..." name='message'></textarea><br />
                            <input type="submit" className='btn' value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;