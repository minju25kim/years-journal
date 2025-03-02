import Link from "next/link";

export default async function Page() {
  const today = new Date()
  const day = today.getDay();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate()
  console.log(today,day, month, year, date)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div>
      <ol>
        {days.map((item, index) => (
          <li key={index} className={index === day ? "text-blue-500" : ""}>
            <Link href={`/journals/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
