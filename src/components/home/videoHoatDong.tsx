import '../css/components.css'
import Video1 from '../../assets/video/video1.mp4'
import Video2 from '../../assets/video/video2.mp4'
import Video3 from '../../assets/video/video3.mp4'
import { useState } from 'react'

export default function () {

    const [video, setVideo] = useState<string>(Video1)
    return (
        <div className="w-70 h-110 border-1 border-gray-100">
            <div
                className="link-video-hoatdong w-full h-10 bg-xanh-nhat text-1xl font-bold text-white"
            >
                <a href="">
                    <div className='w-70 h-10  grid place-content-center'>
                        <center>
                            |&gt;|
                            VIDEO HOẠT ĐỘNG
                        </center>
                    </div>
                </a>


                <div className='items-center block justify-items-center'>
                    <video src= {video} controls width="640" height="360">
                            Trình duyệt của bạn không hỗ trợ thẻ video.
                    </video>

                    <button className='h-10 w-70 text-gray-800 font-semibold cursor-pointer text-15px' onClick={() => setVideo(Video1)}>
                        Hơn 733.000 thí sinh đăng ký xét tuyển trên hệ thống của Bộ GDĐT
                    </button>

                    <div className='bg-gray-800 w-60 border-dotted border-b-1'></div>

                    <button className='h-10 w-70 text-gray-800 font-semibold cursor-pointer text-15px' onClick={() => setVideo(Video2)}>
                        Học sinh Việt Nam đạt thành tích cao tại Olympic Toán học, Vật lý, Hóa học quốc tế
                    </button>

                    <div className='bg-gray-800 w-60 border-dotted border-b-1'></div>

                    <button className='h-10 w-70 text-gray-800 font-semibold cursor-pointer text-15px' onClick={() => setVideo(Video3)}>
                        Ban Chỉ đạo tuyển sinh đại học, cao đẳng ngành giáo dục mầm non năm 2024 họp phiên đầu tiên
                    </button>
                </div>
            </div>
        </div>
    )
}