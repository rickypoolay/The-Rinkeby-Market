import Image from "next/image";
import { trunc } from "./functions";

function NFTCard({ img, creator, title, id, price, coin, desc, lockWidth }) {
  return (
    <div
      className={`p-2 rounded-md bg-gray-200 dark:bg-custom-lightgray justify-self-center ${
        lockWidth && "min-w-[200px]"
      } w-11/12 cursor-pointer hover:scale-110 transition-all ease-in-out duration-200 sm:max-w-[200px] md:max-w-[250px]`}
    >
      <div className="relative h-60 w-auto mb-2 ">
        <Image
          className="rounded-md"
          src={img ? img : "/images/Spinner.svg"}
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>

      <div className="text-xs sm:text-base">
        {creator && <h3>{creator}</h3>}
        <p>{title}</p>
        <div className="flex mt-2">
          {id && <p className="mr-auto">#{id}</p>}
          {price && <p className="ml-auto">{price}</p>}

          <div className="relative w-4 ml-1 px-auto ">
            <Image
              src="https://downloads.coindesk.com/arc-hosted-images/eth.png"
              layout="fill"
              objectFit="contain"
              alt=""
            />
          </div>
        </div>
        {desc && (
          <p className="text-sm break-words">
            {trunc(0, 47, null, null, desc)}
          </p>
        )}
      </div>
    </div>
  );
}

export default NFTCard;
