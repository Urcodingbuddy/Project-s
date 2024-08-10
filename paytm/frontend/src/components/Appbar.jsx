import {firstNameatom} from '../atom/atoms'
import {useRecoilValue} from 'recoil'


export const Appbar = () => {
    const setbtnFirstname = useRecoilValue(firstNameatom);
    console.log(setbtnFirstname)
  return <div className="shadow h-14 flex justify-between items-center">
      <a href="https://paytm.com/">
      <div className="flex flex-col justify-center h-full ml-4">
         <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg" alt="" />
      </div>
      </a>
      <div className="flex border rounded-full justify-evenly h-10  mr-5 bg-paleBlue cursor-pointer">
          <div className="flex flex-col justify-center h-full pr-2 pl-2">
          {setbtnFirstname}
          </div>
              <div className="flex flex-col justify-center h-full text-xl ">
                  <img src="https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/loginImg.svg" alt="" />
          </div>
      </div>
  </div>
}