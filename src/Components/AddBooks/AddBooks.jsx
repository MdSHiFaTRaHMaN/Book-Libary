import Swal from "sweetalert2";




const AddBooks = () => {

    const handleAddBook =event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const Author = form.Author.value;
        const Quantity = form.Quantity.value;
        const Category = form.category.value;
        const Date = form.Date.value;
        const rating = form.Rating.value;
        const discriptions = form.discriptions.value;
        const photoURL = form.PhotoURL.value;

        const newBook = { name, Author,Category, Quantity,Date, rating, discriptions,photoURL }
        console.log(newBook);
        
        fetch('https://book-library-server-two.vercel.app/book',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body : JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Add Book!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: "Added!",
                        text: "Your Book has been Added.",
                        icon: "success"
                      });
                    }
                  });
            }
           
        })
    }


    return (
        <div>
            <div className="flex items-center bg-[#223551] justify-center p-12">
                <div className="mx-auto w-5/6 max-w-[650px]">
                    <h1 className="mb-7 text-white font-bold text-4xl text-center">Add Books</h1>
                    <form  onSubmit={handleAddBook}>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-bold text-white">
                                        Book Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Enter Book Name....."
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#0e0f0f] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-bold text-white" >
                                        Author Name
                                    </label>
                                    <input
                                        type="text"
                                        name="Author"
                                        required
                                        placeholder="Author Name...."
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#070707] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-bold text-white" >
                                        Quantity
                                    </label>
                                    <input
                                        type="text"
                                        name="Quantity"
                                        required
                                        placeholder="Quantity"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#0d0d0d] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-bold text-white">
                                        Rating
                                    </label>
                                    <input
                                        type="text"
                                        name="Rating"
                                        required
                                        placeholder="Rating"
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#070708] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-bold text-white">
                                        Category
                                    </label>
                                    <select name="category" id="pet-select" required
                                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#0e0e0f] outline-none focus:border-[#6A64F1]"
                                    >
                                        <option value="">Select Caregory </option>
                                        <option value="History">History</option>
                                        <option value="Thrilar">Thrilar</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Novel">Novel</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                                <div className="mb-5">
                                    <label className="mb-3 block text-base font-bold text-white">
                                        Realse Date
                                    </label>
                                    <input
                                        type="text"
                                        name="Date"
                                        required
                                        placeholder="Date..."
                                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#0a0a0a] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-base font-bold text-white">
                                Discriptions
                            </label>
                            <input
                                type="text"
                                name="discriptions"
                                placeholder="Discriptions....."
                                min="0"
                                required
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-base font-bold text-white">
                                Photo URL
                            </label>
                            <input
                                type="text"
                                name="PhotoURL"
                                placeholder="Enter Photo Url link..."
                                min="0"
                                required
                                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-semibold text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="text-center">
                            {/* <input type="submit" value="Update product" /> */}
                            <button
                                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Update
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddBooks;