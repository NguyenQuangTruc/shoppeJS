
import IconVN from '../../assets/icon-vi.png'
import IconEN from '../../assets/icon-en.png'
import '../css/header.css'
import '../css/components.css'

export default function (props: any) {
    return (
        <div className=''>
            {/* header */}
            <div className='flex justify-between border-t-10 border-t-blue-950 pl-70 pr-70 shadow-xl pb-10'>
                <div className="header_left w-100">
                    <a href="">
                        <img src={props.logo} alt="" />
                    </a>
                </div>

                <div className="header_right pt-2">
                    <div className="header_right-top flex text-color-xanh">
                        <div className='ml-1 mr-1 text-13px font-bold'>
                            <a href="">
                                Sơ đồ cổng
                            </a>
                        </div>
                        <div className='ml-1 mr-1 text-13px font-bold'>
                            <a href="">
                                RSS
                            </a>
                        </div>
                        <div className='ml-1 mr-1 text-13px font-bold'>
                            <a href="">
                                Liên Hệ
                            </a>
                        </div>
                        <div className='ml-1 mr-1 text-13px font-bold'>
                            <a href="">
                                Đăng Nhập
                            </a>
                        </div>
                        <div className='ml-1 mr-1 text-13px font-bold'>
                            <a href="">
                                <img src={IconVN} alt="" />
                            </a>
                        </div>
                        <div className='ml-1 mr-1 text-13px font-bold'>
                            <a href="">
                                <img src={IconEN} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="header_right-bot mt-1">
                        <input
                            type="text"
                            className='w-full border-1 rounded-xl h-9 text-gray-500 text-1xl pl-3 pr-3'
                        />
                    </div>
                </div>
            </div>
            {/* end deader */}
            {/* menu */}
            <div className='bg-pink-900 h-13 ml-70 mr-70 margin-t--20 flex justify-between pl-5 pr-5 shadow-xl'>
                <div className='bg-white h-full w-1/12 rounded-full grid place-items-center'>
                    <a href="">H</a>
                </div>

                <div className='grid place-items-center text-white '>
                    <a href="">
                        GIỚI THIỆU
                    </a>
                </div>

                <div className='grid place-items-center text-white '>
                    <a href="">
                        TIN TỨC
                    </a>
                </div>

                <div className='grid place-items-center text-white '>
                    <a href="">
                        VĂN BẢN
                    </a>
                </div>

                <div className='grid place-items-center text-white '>
                    <a href="">
                        THỐNG KÊ
                    </a>
                </div>

                <div className='grid place-items-center text-white'>
                    <a href="">
                        BỘ GD&DT VỚI NHÂN DÂN
                    </a>
                </div>

                <div className='grid place-items-center text-white '>
                    <a href="">
                        QUẢN LÝ ĐIỀU HÀNH
                    </a>
                </div>
            </div>
        </div>

    )
}