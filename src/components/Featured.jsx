import { Button } from '@mui/material';
import { useState } from 'react';



const propertiesData = [
    { id: 1, image: "./images/property-1.jpg", title: "10765 Hillshire Ave, Baton Rouge, LA 70810", rate: 5, price: "$5000", category: "Rent" },
    { id: 2, image: "./images/property-2.jpg", title: "8921 Westheimer Rd, Houston, TX 77063", rate: 4, price: "$6000", category: "Buy" },
    { id: 3, image: "./images/property-3.jpg", title: "4510 Navigation Blvd, Houston, TX 77011", rate: 3, price: "$7000", category: "Sell" },
    { id: 4, image: "./images/property-4.jpg", title: "10765 Hillshire Ave, Baton Rouge, LA 70810", rate: 5, price: "$5000", category: "Buy" },
    { id: 5, image: "./images/property-5.jpg", title: "8921 Westheimer Rd, Houston, TX 77063", rate: 4, price: "$6000", category: "Rent" },
    { id: 6, image: "./images/property-6.jpg", title: "4510 Navigation Blvd, Houston, TX 77011", rate: 3, price: "$7000", category: "Sell" },
];

export default function Featured() {
    const [filter, setFilter] = useState('All');

    const filteredProperties = propertiesData.filter(
        property => filter === 'All' || property.category === filter
    );

    return (
        <div id='properties' className="features pt-16 pb-10" data-aos="fade-up">
            <div className="main-title px-3 sm:px-5 md:px-15 text-center">
                <h2 className="text-3xl pb-3">
                    Featured Properties
                </h2>
                <p className="text-gray-400 mx-auto">A great platform to buy, sell and rent your properties without any agent
                    or
                    commisions.</p>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mt-8 px-4">
                {['All', 'Buy', 'Sell', 'Rent'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full font-bold transition-all duration-300 cursor-pointer ${filter === cat ? 'bg-green-600 text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="container mx-auto pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 ">
                {filteredProperties.map((prop, index) => (
                    <div key={prop.id} data-aos="fade-up" data-aos-delay={index * 100}>
                        <Card image={prop.image} title={prop.title} rate={prop.rate} price={prop.price} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <Button variant='contained'
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
                    View All Properties
                </Button>
            </div>
        </div>
    );
}


import FavoriteIcon from '@mui/icons-material/Favorite';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';



function Card({ image, title, rate, price }) {
    const [fav, setFav] = useState(false);

    return (
        <div className="box mx-5 rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl duration-300">
            <div className="relative">
                <img src={image} alt="property" />
                <button
                    onClick={() => setFav(!fav)}
                    className="absolute top-3 right-4  w-10 h-10 p-2 flex justify-center items-center bg-white rounded-full cursor-pointer">
                    <FavoriteIcon sx={{ color: fav ? 'red' : 'gray' }} />
                </button>
            </div>


            <div className="te p-7 font-sans rounded-b-xl ">
                <h3 className=" pb-6 border-b border-gray-200  text-lg font-semibold hover:text-green-600 duration-300">
                    <a href="#">{title}</a>
                </h3>
                <div className="list flex flex-wrap justify-between py-6 border-b border-gray-200">
                    <span><ViewInArIcon sx={{ color: '#21a657' }} /> 8000sqf </span>
                    <span><BedIcon sx={{ color: '#21a657' }} /> 4 Beds </span>
                    <span><BathtubIcon sx={{ color: '#21a657' }} /> 4 Baths</span>
                </div>
                <div className="flex justify-between pt-6 flex-wrap">
                    <div class="price ">
                        <p class="text-lg text-gray-400 pb-1">Price</p>
                        <p class="text-lg">{price}</p>
                    </div>
                    <div class="rate">
                        <p class="text-lg text-gray-400 pb-1">Rating</p>
                        <p class="text-lg flex items-center gap-0.5">
                            {Array.from({ length: rate }).map((_, index) => (
                                <StarIcon key={index} sx={{ color: '#f1c40f' }} />

                            ))}
                            {Array.from({ length: 5 - rate }).map((_, index) => (
                                <StarBorderIcon key={index} sx={{ color: '#f1c40f' }} />
                            ))}
                            {rate}(30)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}