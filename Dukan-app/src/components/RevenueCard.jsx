export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className=" border rounded-lg shadow-xl m-2 select-none " >
     <div className=" shadow-xl  p-6  select-none rounded-tl-lg rounded-tr-lg hover:bg-101 text-white bg-blue-500">
        <div className=" flex gap-2 items-center pb-4 text-white ">
            {title }<span className="cursor-pointer  ">  
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </span>
        </div>
        <div className="flex justify-between items-center " >
            <div className="font-bold text-3xl ">
            ₹ {amount}
            </div>
            <div className="underline cursor-pointer text-white">
                {orderCount ? <div className="flex">
                    {orderCount} orders<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div> : null
                }
            </div>
        </div>
    </div>
    <div className="pb-10 rounded-bl-lg rounded-br-lg bg-101"></div>
    </div>
}
