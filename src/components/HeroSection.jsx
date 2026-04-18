import { useState } from "react";
import { Button } from "@mui/material";

export default function HeroSection() {
    const [active, setActive] = useState('buy');

    return (
        <div>
            <div className="mx-3 sm:mx-5 mt-3 h-[500px] relative overflow-hidden rounded-2xl">
                <img src="./public/images/hero-bg.jpg" alt="" className="absolute -z-20 w-full h-full object-cover " />
                <div class="overlay absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(68,64,64,0.2)]"></div>
                <div class="container mx-auto p-2 sm:p-5 md:px-15">
                    <div class="text mt-25 ">
                        <h1 class="text-3xl mb-4 text-white font-bold">
                            We will help you find <br /> your <span class="text-green-500">Wonderful</span> home
                        </h1>
                        <p class="text-lg text-gray-300">A great plateform to buy, sell and rent your properties without any <br /> agent or commisions.
                        </p>
                    </div>
                </div>
            </div>

            <div className="-mt-30 container mx-auto px-5 sm:px-10 md:px-15" data-aos="fade-up" data-aos-delay="400">
                <div class="shadow-md relative mx-auto ">
                    <div class="buttons border-b-slate-300 border-b p-5 bg-white w-fit rounded-t-2xl">
                        <button onClick={() => setActive('buy')} class={` ${active === 'buy' ? 'text-white bg-green-600' : 'hover:text-green-600 hover:bg-white'} cursor-pointer py-2 px-3 duration-300 rounded `}>Buy</button>
                        <button onClick={() => setActive('sell')} class={` ${active === 'sell' ? 'text-white bg-green-600' : 'hover:text-green-600 hover:bg-white'} cursor-pointer py-2 px-3 duration-300 rounded `}>Sell</button>
                        <button onClick={() => setActive('rent')} class={` ${active === 'rent' ? 'text-white bg-green-600' : 'hover:text-green-600 hover:bg-white'} cursor-pointer py-2 px-3 duration-300 rounded `}>Rent</button>
                    </div>


                    <form action="" class="grid grid-flow-row mx-auto md:grid-cols-4 gap-10 p-5 bg-white rounded-tr-2xl ">
                        <div class=" ">
                            <label for="search" class="block mb-4 text-lg">Search :</label>
                            <input class="border-gray-400 border p-1 w-full h-8 outline-1 outline-gray-400" type="search" name="" id="search" placeholder="Search Your home" />
                        </div>

                        <div class=" ">
                            <label for="cat" class="block mb-4 text-lg">Select Categories : </label>
                            <select class="border-gray-400 border p-1 w-full h-8 outline-1 outline-gray-400" name="" id="cat">
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Offices">Offices</option>
                                <option value="Townhouse">Townhouse</option>
                            </select>

                        </div>
                        <div class=" ">
                            <label for="min-price" class="block mb-4 text-lg">Min Price : </label>
                            <select class="border-gray-400 border p-1 w-full h-8 outline-1 outline-gray-400" name="" id="min-price">
                                <option value="500">$500</option>
                                <option value="1000">$1000</option>
                                <option value="2000">$2000</option>
                                <option value="3000">$3000</option>
                                <option value="4000">$4000</option>
                                <option value="5000">$5000</option>
                                <option value="6000">$6000</option>

                            </select>

                        </div>
                        <div class=" ">
                            <label for="max-price" class="block mb-4 text-lg">Max Price : </label>
                            <select class="border-gray-400 border p-1 w-full h-8 outline-1 outline-gray-400" name=""
                                id="max-price">
                                <option value="500">$500</option>
                                <option value="1000">$1000</option>
                                <option value="2000">$2000</option>
                                <option value="3000">$3000</option>
                                <option value="4000">$4000</option>
                                <option value="5000">$5000</option>
                                <option value="6000">$6000</option>
                            </select>

                        </div>
                        <Button variant='contained'
                            sx={{
                                textTransform: 'none',
                                color: 'white',
                                backgroundColor: '#21a657',
                                borderRadius: '10px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                '&:hover': { backgroundColor: '#1e8749' }
                            }}>Search Now</Button>
                    </form>

                </div>
            </div>

        </div>
    );
}