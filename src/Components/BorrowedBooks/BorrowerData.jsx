
const BorrowerData = ({borrowData, handleDelete}) => {
    const {email,photoURL,name,Author,currentDateTime,ReturnDate,_id} = borrowData;

    return (
        <tr>
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                <div className="inline-flex items-center gap-x-3">

                    <div className="flex items-center gap-x-2">
                        <img className="object-cover w-24 h-36 rounded" src={photoURL} alt="" />
                        <div>
                            <h2 className="font-medium text-gray-800 dark:text-white ">{name}</h2>
                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400"><span className="text-green-500 font-semibold">by </span>{Author}</p>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <p className="px-3 py-3 text-xs text-white rounded-full dark:bg-gray-800 bg-blue-100/60">{currentDateTime}</p>
            </td>
            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
            <p className="px-3 py-3 text-xs text-pink-500 rounded-full dark:bg-gray-800 bg-pink-100/60">{ReturnDate}</p>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-2">
                    <p className="px-3 py-1 text-xs text-white rounded-full dark:bg-gray-800 bg-indigo-100/60">{email}</p>
                   
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div className="flex items-center gap-x-6">
                    <button className="text-gray-500 btn btn-primary transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        Return
                    </button>
                    <button onClick={() => handleDelete(_id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                            <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default BorrowerData;