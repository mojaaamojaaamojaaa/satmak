import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex h-screen w-full justify-center items-center bg-red-100 ">
      <div className="flex-col">
        <div className="flex justify-center">
          <Image
            src={"/images/cage433.png"}
            height={100}
            width={200}
            alt="ERROR OCCURED"
          />
        </div>
        <div className="flex  font-bold  justify-center my-5 ">
          <h1>ページがみつからないです！</h1>
        </div>
      </div>
    </div>
  );
}
