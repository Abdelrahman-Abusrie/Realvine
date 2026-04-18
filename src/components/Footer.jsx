import BusinessIcon from '@mui/icons-material/Business';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Footer() {

    return (
        <div className=" bg-neutral-900 pt-18 pb-5 sm:pt-24 text-gray-300">
            <div className="container px-3 sm:px-5 md:px-15 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-5">
                <div className="box col-span-2">
                    <div className="logo text-xl text-white font-bold flex items-end gap-1">
                        <BusinessIcon fontSize='large' sx={{ color: '#1e8749' }} />
                        <span>Realvine</span>
                    </div>
                    <p className="pt-7 ">A great platform to buy, sell and rent your properties without any agent
                        or
                        commisions.</p>
                </div>
                <div className="box ">
                    <h3 className="text-white text-xl font-bold mb-3">Company</h3>
                    <ul>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />About Us</a></li>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Services</a></li>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Blog</a></li>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Login</a></li>
                    </ul>
                </div>
                <div className="box">
                    <h3 className="text-white text-xl font-bold mb-3">Useful Links</h3>
                    <ul>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Terms of Services</a></li>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Privacy Policy</a></li>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Listing</a></li>
                        <li className="relative pl-4 hover:translate-x-1 duration-300 mb-1"><a href=""><ArrowForwardIosIcon sx={{ fontSize: '15px', color: '#777', marginRight: '3px' }} />Contact</a></li>
                    </ul>
                </div>
                <div className="box col-span-2 md:col-span-1">
                    <h3 className="text-white text-xl font-bold mb-3">Contact Details</h3>
                    <ul>
                        <li className="flex gap-2 mb-3 ">
                            <LocationOnIcon sx={{ color: '#1e8749' }} />
                            <div>
                                <p>C/54 Northwest Freeway,
                                    Suite 558,
                                    Houston, USA 485</p>
                                <a href="" className="block mt-2 text-green-600 hover:text-green-700 duration-300">View on
                                    Google map</a>
                            </div>
                        </li>
                        <li className="flex gap-2 mb-3 ">
                            <EmailIcon sx={{ color: '#1e8749' }} />
                            <a href="" className="hover:text-gray-400 duration-300">contact@example.com</a>
                        </li>
                        <li className="flex gap-2 mb-2 ">
                            <PhoneIcon sx={{ color: '#1e8749' }} />
                            <a href="" className="hover:text-gray-400 duration-300">+152 534-468-854</a>
                        </li>

                    </ul>
                </div>
            </div>
            <hr className="text-slate-800" />
            <div className="container mx-auto px-3 flex justify-between pt-7 ">
                <p>© 2026 Realvine. AbuSrie#1</p>
                <ul className="flex gap-2">
                    <li className="rounded-md border border-gray-800 hover:bg-green-700 duration-300 p-0.5 h-fit"><a
                        href=""><FacebookIcon /></a>
                    </li>
                    <li className="rounded-md border border-gray-800 hover:bg-green-700 duration-300 p-0.5 h-fit"><a
                        href=""><InstagramIcon /></a>
                    </li>
                    <li className="rounded-md border border-gray-800 hover:bg-green-700 duration-300 p-0.5 h-fit"><a
                        href=""><TwitterIcon /></a></li>
                    <li className="rounded-md border border-gray-800 hover:bg-green-700 duration-300 p-0.5 h-fit"><a
                        href=""><LinkedInIcon /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}