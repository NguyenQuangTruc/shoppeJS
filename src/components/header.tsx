import './css/header.css'

export default function (props: any) {
    let hoverItem = "hover:text-gray-300"
    let khoangCachItem = "pr-3 pl-3"
    let khoangCachHaiBen = "pr-40 pl-40"
    return (
        <header className={`bg-header h-30 text-white pt-1 ${khoangCachHaiBen}`}>
            {/* top header */}
            <div
                className={`header-top flex justify-between`}
            >
                {/* top header left */}
                <div
                    className={`header-top-left flex`}
                >
                    <a
                        className={`${khoangCachItem} ${hoverItem}`}
                        href=""
                    >
                        Kênh Người Bán
                    </a>

                    <a
                        className={`${khoangCachItem} ${hoverItem}`}
                        href=""
                    >
                        Trở Thành Người Bán Shoppe
                    </a>

                    <a
                        className={`${khoangCachItem} ${hoverItem}`}
                        href=""
                    >
                        Tải ứng dụng
                    </a>

                    <div
                        className={`${khoangCachItem} flex`}
                    >
                        <span>Kết Nối</span>
                        <a
                            className='ml-1'
                            href=""
                        >
                            <div
                                className='bg-amber-50 h-5 w-5 text-black text-center rounded-2xl'
                            >
                                f
                            </div>
                        </a>
                        <a
                            className='ml-1'
                            href=""
                        >
                            <div
                                className='bg-amber-50 h-5 w-5 text-black text-center rounded-2xl'
                            >
                                i
                            </div>
                        </a>
                    </div>
                </div>

                {/* top header right */}
                <div
                    className='header-top-right flex'
                >
                    <a
                        className={`${hoverItem} ${khoangCachItem}`}
                        href=""
                    >
                        Thông Báo
                    </a>

                    <a
                        className={`${hoverItem} ${khoangCachItem}`}
                        href=""
                    >
                        Hỗ Trợ
                    </a>

                    <div className={`${khoangCachItem} text-black`}>
                        <select name="lang" id="langID">
                            <option value="en">Tiếng Anh</option>
                            <option value="vn">Tiếng Việt</option>
                        </select>
                    </div>

                    <a
                        className={`${hoverItem} ${khoangCachItem}`}
                        href=""
                    >
                        Đăng Kí
                    </a>

                    <a
                        className={`${hoverItem} ${khoangCachItem}`}
                        href=""
                    >
                        Đăng Nhập
                    </a>
                </div>
            </div>

            {/* mid header */}
            <div className="header-mid mt-3 flex justify-between">

                <div
                    className='w-55'
                >
                    <a
                        href=""
                    >
                        <img
                            className='h-13'
                            src={props.logo}
                            alt="đéo có logo"
                        />
                    </a>
                </div>

                <div className='w-full flex'>
                    <input
                        className='h-10 w-full bg-white mt-3 rounded-xl text-black pl-3 pr-3'
                        type="text"
                    />

                    <button
                        className='bg-white ml-5 text-black rounded-2xl'
                    >
                        Tìm kiếm
                    </button>
                </div>

                <div className='bg-white w-15 h-12 ml-5 text-black text-center pt-3 rounded-xl mt-3'>
                    <a
                        className=''
                        href=""
                    >
                        GH
                    </a>
                </div>
            </div>

            {/* bot header */}
            <div className={`header-bot flex justify-center text-13px`}>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Áo Thung Trơn Ôm
                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Son Romand Juicy 24

                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Sale 1k Điện Thoại iPhone
                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Cặp Xinh
                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Dép
                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Kính Gương
                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Ghế Ngồi Dựa
                    </a>
                </div>
                <div>
                    <a
                        className={`${khoangCachItem} text-gray-100`}
                        href=""
                    >
                        Ốp Đẹp
                    </a>
                </div>
            </div>
        </header>

    )
}