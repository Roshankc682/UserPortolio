import React , {useState}from 'react';
import  {successToast,errorToast} from '../../Message/Message'
import { ToastContainer } from 'react-toastify';




const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  const [activestatus, setactivestatus] = useState(true)
  const [number_first, setnumber_first] = useState(1)
  const [pre_disable_btn, setpre_disable_btn] = useState(false)
  const [nxt_disable_btn, setnxt_disable_btn] = useState(false)

  console.log()
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const increase_page_no = () =>{
        if(Math.ceil(totalPosts / postsPerPage) == number_first){
            setnxt_disable_btn(false)
            // errorToast("no more project")
            return false
        }
        paginate(number_first+1)
        setnumber_first(number_first+1)

  }
  const decrease_page_no = () =>{
    if(1 == number_first){
        setpre_disable_btn(true)
        // errorToast("no more project")
    }else{
        paginate(number_first-1)
        setnumber_first(number_first-1)
    }
  }

  return (
    <>
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex justify-between flex-1 sm:hidden ">
            {(pre_disable_btn)
            ?
                <button
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                    disabled
                >
                    *
                </button>
                :
                    <button
                        className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                        onClick={()=>{
                            decrease_page_no()
                        }}
                    >
                        Previous
                    </button>
                }
            {(nxt_disable_btn)
            ?
                <button
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
                    disabled
                >
                    *
                </button>
            :
                <button
                    className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    onClick={()=>{
                        increase_page_no()
                    }}
                >
                    Next
                </button>
            }
        </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        {/* <p class="text-sm text-gray-700">
                            Showing
                            <span class="font-medium">1</span>
                            to
                            <span class="font-medium">10</span>
                            of
                            <span class="font-medium">97</span>
                            results
                        </p> */}
                    </div>
                <div>
            <nav className="inline-flex -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination">
                {/* <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span class="sr-only">Previous</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
                </a> */}
                {pageNumbers.map(number => (

                    <button
                            key={number}
                            aria-current="page"
                            className={`${activestatus?" border-indigo-500 bg-indigo-50 ":null} relative z-10 inline-flex items-center border  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
                            onClick={() => {
                                paginate(number)
                                setnumber_first(number)
                                setactivestatus(true)

                                }}>
                        {number}
                    </button>
                ))}
                {/* <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                <span class="sr-only">Next</span>
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                </a> */}
            </nav>
            </div>
        </div>
        </div>
        <ToastContainer/>
    </>
  );
};

export default Pagination;
