import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export default function Info() {

    return (
        <div id='about-US' className="pt-16 pb-10" data-aos="fade-up">
            <div className="container mx-auto px-2 sm:px-5  flex flex-col md:flex-row justify-between gap-x-14 gap-y-8 ">
                <div className="relative mx-auto basis-1/3 shadow-xl rounded-2xl overflow-hidden">
                    <img src="./public/images/about-banner.jpg" className='max-h-[450px] w-full' alt="" />
                    <button
                        className="absolute top-1/2 p-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full cursor-pointer">
                        <PlayArrowIcon fontSize='large' sx={{ color: '#21a657' }} /></button>
                </div>
                <div class="text p-5 flex-1 flex flex-col justify-center  ">
                    <h1 class="text-3xl leading-10 mb-5">Efficiency. Transparency. <br />Control.</h1>
                    <p class="text-gray-400 mb-6 text-lg">Hously developed a platform for the Real Estate marketplace that
                        allows
                        buyers
                        and sellers to easily
                        execute a
                        transaction on their own. The platform drives efficiency, cost transparency and control into the
                        hands
                        of the consumers.
                        Hously is Real Estate Redefined.</p>

                    <Button variant='contained'
                        sx={{
                            width: 'fit-content',
                            textTransform: 'none',
                            color: 'white',
                            backgroundColor: '#21a657',
                            borderRadius: '15px',
                            padding: '5px 50px',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: '#1e8749' }
                        }}>
                        Learn More
                    </Button>
                </div>
            </div>

        </div>
    );
}