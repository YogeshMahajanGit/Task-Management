export default function Icon({ svg }) {
  return (
    <div className=" flex gap-4 w-6 cursor-pointer">
      <img
        src={svg}
        alt=""
      />
    </div>
  );
}
