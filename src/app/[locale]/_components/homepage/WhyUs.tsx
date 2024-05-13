const WhyUs = () => {
  const imageClass =
    "mx-auto xl:w-52 xl:h-52 lg:h-40 lg:w-40 md:w-32 md:h-32 sm:w-20 sm:h-20  w-16 h-16 invert";
  return (
    <div className="relative flex items-center w-full py-16 xl:py-32 lg:py-20 mainpadding bg-main">
      <div className="w-full">
        <h1 className="text-3xl font-light text-center text-white opacity-80">
          WHY US?
        </h1>
        <h1 className="mt-5 text-center text-white heddertext">
          ทำไมต้อง Skyline Business Plus
        </h1>
        <div className="flex justify-center w-full gap-5 mx-auto mt-12 xl:mt-16 max-md:flex-wrap ">
          <div className="w-[380px]  ">
            <img src="/icon/rating-stars.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">ความชำนาญ</h1>
            <p className="mt-3 text-center text-white">
              ทีมงานมืออาชีพที่มีความชำนาญในการให้บริการ ด้วยประสบการณ์ กว่า 20
              ปี
            </p>
          </div>
          <div className="w-[380px]  ">
            <img src="/icon/international.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">
              สินค้าคุณภาพระดับสากล
            </h1>
            <p className="mt-3 text-center text-white">
              สินค้าคุณภาพระดับสากล ที่ผ่านการรับรองมาตรฐาน
            </p>
          </div>
          <div className="w-[380px]  ">
            <img src="/icon/car.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">
              มีบริการติดตั้ง
            </h1>
            <p className="mt-3 text-center text-white">
              บริการติดตั้งฟรี ในเขตกรุงเทพและปริมณฑล
            </p>
          </div>
          <div className="w-[380px]  ">
            <img src="/icon/insurance.png" alt="" className={imageClass} />
            <h1 className="mt-5 text-2xl text-center text-white">
              มีบริการติดตั้ง
            </h1>
            <p className="mt-3 text-center text-white">
              สินค้ามีรับประกัน และมีบริการหลังการขาย
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
