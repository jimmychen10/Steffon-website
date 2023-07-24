export default function Subscribe() {
    return (
        <div className="pt-20">
            <div className="card">

                <div class="futuraFont flex flex-col items-center md:items-start md:w-2/3 lg:w-1/2 mx-auto">
                    <h1 class="pb-4 didotFont text-4xl font-bold text-center md:text-left">Subscribe to Our Newsletter to Receive New Offers</h1>
                    <div class="mb-6">
                        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your email below *</label>
                        <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                    </div>
                    <button class="w-full h-12 font-bold text-indigo-100 transition-colors duration-150 bg-slate-700 rounded-lg focus:shadow-outline hover:bg-gray-800">Sign Up</button>
                </div>

            </div>
        </div>
    )
}

