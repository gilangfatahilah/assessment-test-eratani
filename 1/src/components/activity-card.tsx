import { FaRegCalendar } from "react-icons/fa";

type Props = {
  image: string;
  date: string;
  title: string;
  description: string;
  publishedBy: string;
};

const ActivityCard = ({ image, date, title, description, publishedBy }: Props) => {
  return (
    <div className="w-full max-h-[131px] md:max-h-[427px] flex gap-8">
      <img
        src={image}
        alt="image"
        width={608}
        height={427}
        className="w-[125px] h-[131px] object-cover sm:w-[200px] sm:h-[150px] md:w-[400px] md:h-[300px] lg:w-[608px] lg:h-[427px] rounded-md"
      />

      <div className="max-w-md md:max-w-lg lg:max-w-xl flex flex-col justify-between md:gap-6">
        <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6">

          <div className="flex gap-2 justify-between sm:justify-start items-center text-slate-500">
            <FaRegCalendar className="md:w-4 md:h-4 lg:w-6 lg:h-6 hidden sm:block" />
            <p className="block sm:hidden text-[10px]">KEGIATAN</p>
            <p className="text-[10px] sm:text-sm  md:text-base lg:text-lg">
              {date}
            </p>
          </div>

          <h1 className="font-semibold md:leading-6 lg:leading-[48px] text-xs sm:text-base md:text-2xl lg:text-4xl">
            {title}
          </h1>

          <p className="hidden md:block text-md lg:text-2xl leading-5 lg:leading-[30px] line-clamp-1 md:line-clamp-3 lg:line-clamp-6">
            {description}
          </p>

          <p className="block md:hidden text-[10px] sm:text-xs text-slate-400">
            {`Oleh ${publishedBy}`}
          </p>

        </div>
        <button className="w-max lg:w-1/2 text-xs sm:text-sm lg:text-2xl font-bold sm:font-normal text-black bg-secondary px-4 py-2 rounded-md hover:bg-secondary/85 self-end">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
