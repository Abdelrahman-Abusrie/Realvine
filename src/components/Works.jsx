import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import KeyIcon from '@mui/icons-material/Key';

export default function Works() {

    return (
        <div className="pt-16 pb-10" data-aos="fade-up">
            <div class="main-title px-3 sm:px-5 md:px-15 text-center">
                <h2 class="text-3xl pb-3">
                    How It Works
                </h2>
                <p class="text-gray-400 mx-auto">A great plateform to buy, sell and rent your properties without any agent
                    or
                    commisions.</p>
            </div>
            <div class="container mx-auto px-3 sm:px-5 md:px-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-16 gap-10">
                <div class="box text-center p-4">
                    <div class="p-7 rounded-full bg-green-50 w-fit mx-auto mb-6">
                        <HomeIcon fontSize='large' sx={{ color: '#21a657' }} /></div>
                    <h3 class="text-xl mb-6 font-bold ">Evaluate Property</h3>
                    <p class="text-gray-400 ">If the distribution of letters and 'words' is random, the reader will not be
                        distracted from making.
                    </p>
                </div>
                <div class="box text-center p-4">
                    <div class="p-7 rounded-full bg-green-50 w-fit mx-auto mb-6">
                        <BusinessCenterIcon fontSize='large' sx={{ color: '#21a657' }} /></div>
                    <h3 class="text-xl mb-6 font-bold ">Meeting with Agent</h3>
                    <p class="text-gray-400 ">If the distribution of letters and 'words' is random, the reader will not be
                        distracted from making.
                    </p>
                </div>
                <div class="box text-center p-4">
                    <div class="p-7 rounded-full bg-green-50 w-fit mx-auto mb-6">
                        <KeyIcon fontSize='large' sx={{ color: '#21a657' }} /></div>
                    <h3 class="text-xl mb-6 font-bold ">Close the Deal</h3>
                    <p class="text-gray-400 ">If the distribution of letters and 'words' is random, the reader will not be
                        distracted from making.
                    </p>
                </div>
            </div>
        </div>
    );
}