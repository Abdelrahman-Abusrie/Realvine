import Button from '@mui/material/Button';
import toast from 'react-hot-toast';



export default function Contact() {

    return (
        <div id='contact' className="contact pt-16 pb-10" data-aos="fade-up">
            <div className="main-title px-3 sm:px-5 md:px-15 text-center">
                <h2 className="text-3xl pb-3">
                    Have Question ? Get in touch!
                </h2>
                <p className="text-gray-400 mx-auto">A great plateform to buy, sell and rent your properties without any agent
                    or
                    commisions.</p>
            </div>
            <div className="pt-10 w-fit mx-auto">
                <Button variant='contained'
                    onClick={() => toast.success('Your message has been sent! We will get back to you soon.')}
                    sx={{
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#21a657',
                        borderRadius: '5px',
                        padding: '5px 30px',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        '&:hover': { backgroundColor: '#1e8749' }
                    }}>
                    Contact Us
                </Button>
            </div>
        </div>
    );
}