export function VideoCard(props:any){
    return <div>
        <img className="rounded-xl" src={props.thumbImage} alt="" />
        <div className="grid pt-2">
                <img className="col-span-1 rounded-full w-10 h-10" src={props.pfpImage} alt="" />
            <div className="col-span-11 pl-0">
                <div>{props.title}</div>
                <div className="flex flex-row   items-center gap-1 text-gray-300" >{props.chName} <img className="inline " src="/assets/varified.svg" alt="" /></div>
                <span className="col-span-11 text-gray-300 text-base " >{props.views}</span>
                <span className="col-span-11 text-base " >・</span>
                <span className="col-span-11 text-gray-300 text-base " >{props.uDate}</span>
                     
            </div>
        </div>
    </div>
}

function VideoCard2(){
    return <div>

    </div>
}