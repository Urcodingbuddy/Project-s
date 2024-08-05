export function VideoCard(props:any){
    return <div>
        <img className="rounded-xl w-13 h-13 " src={props.thumbImage} alt="" />
        <div className="grid detailgrid pt-2">
            <div className="grid col-span-2" >
                <img className="inline col-span-1 rounded-full w-10 h-10" src={props.pfpImage} alt="" />
            </div>
            <div className="col-span-12">
                <div className="inline" >{props.title}</div>
                <div className="flex flex-row   items-center gap-1 text-gray-300" >{props.chName} <img className="inline " src="/assets/varified.svg" alt="" /></div>
                <span className="col-span-11 text-gray-300 text-base " >{props.views}</span>
                <span className="col-span-11 text-base " >・</span>
                <span className="col-span-11 text-gray-300 text-base " >{props.uDate}</span>
                     
            </div>
        </div>
    </div>
}
