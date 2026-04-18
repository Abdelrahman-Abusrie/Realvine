import toast from 'react-hot-toast';

export default function Subscribe() {
    return (
        <div className="pt-16 -mb-16 ">
            <div className="mx-auto relative w-[90%] lg:w-[80%] shadow-2xl border border-gray-200 flex flex-col xl:flex-row justify-between items-center py-10 px-6 sm:px-10 md:px-16 rounded-2xl gap-8 text-center xl:text-left bg-white">
                <div className="xl:w-1/2">
                    <h2 className="font-bold text-3xl text-gray-800">Subscribe to Newsletter!</h2>
                    <p className="pt-3 text-gray-500 text-lg">Subscribe to get the latest updates, property insights, and market trends.</p>
                </div>

                <form
                    className="w-full xl:w-1/2 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-transparent sm:bg-white sm:border sm:border-gray-200 rounded-full sm:p-1 sm:shadow-sm"
                    onSubmit={(e) => {
                        e.preventDefault();
                        toast.success('Successfully Subscribed to Newsletter!');
                        e.target.reset();
                    }}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        required
                        className="w-full sm:flex-1 bg-white border border-gray-200 sm:border-none outline-none px-6 py-4 sm:py-3 rounded-full sm:rounded-none sm:rounded-l-full placeholder-gray-400 focus:ring-2 focus:ring-green-500 sm:focus:ring-0 transition-all"
                    />
                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-[#21a657] hover:bg-[#1e8749] cursor-pointer text-white font-semibold py-4 sm:py-3 px-8 rounded-full transition-colors duration-300 shadow-md sm:shadow-none"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}