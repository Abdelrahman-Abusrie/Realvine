import BusinessIcon from '@mui/icons-material/Business';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { Button, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';



export default function Header() {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [nav, setNav] = useState(false);

    return (
        <div className="sticky top-0 z-100 bg-white/80 backdrop-blur-md w-full transition-all duration-300">
            <div class="container mx-auto px-3 sm:px-5 md:px-15 py-3 flex justify-between items-center ">
                <a href="#" class={`flex text-2xl font-bold items-center gap-2 ${isMobile ? 'text-lg' : 'text-2xl'}`}>
                    <BusinessIcon fontSize='large' sx={{ color: '#1e8749' }} />
                    <span>Realvine</span>
                </a>
                <div class={`nav flex justify-between items-center ${isMobile ? 'gap-[10px]' : 'gap-[50px]'}`}>
                    <ul class={` ${isMobile ? (nav ? 'absolute top-full left-0 w-full bg-white/95 flex flex-col items-center shadow-lg py-5' : 'hidden') : 'flex'} gap-5 `}>
                        <li class="p-2 text-lg font-medium text-[#555] hover:text-green-600 duration-300">
                            <a href="#">Home</a>
                        </li>
                        <li class="p-2 text-lg font-medium text-[#555] hover:text-green-600 duration-300">
                            <a href="#about-US">About US</a>
                        </li>
                        <li class="p-2 text-lg font-medium text-[#555] hover:text-green-600 duration-300">
                            <a href="#properties">Properties</a>
                        </li>
                        <li class="p-2 text-lg font-medium text-[#555] hover:text-green-600 duration-300">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    {isMobile && (
                        <IconButton onClick={() => setNav(!nav)}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    <Button variant='contained'
                        onClick={() => toast('Sign Up process coming soon!', { icon: '👏' })}
                        sx={{
                            color: 'white',
                            backgroundColor: '#21a657',
                            borderRadius: '50px',
                            padding: isMobile ? '5px 15px' : '5px 20px',
                            fontSize: isMobile ? '13px' : '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            '&:hover': { backgroundColor: '#1e8749' }
                        }}>
                        Sign Up</Button>
                </div>
            </div>
        </div >
    );
};