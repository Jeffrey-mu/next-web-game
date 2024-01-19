
import GameCard from '@/components/game/Card';
import { useFetch } from '@/lib/utils';
import { groupByDatePara, groupByDate } from '@/lib/utils';
export default async function Home() {
  const { data } = await useFetch<groupByDatePara[]>(
    `http://101.43.206.247:3230/game-files/list`,
  );
  const staticData = groupByDate(data);
  function handlePlay(folderName: string) {
    console.log(folderName)
  }
  return (
    <>
      <div className="container">
        {staticData.map((item) => (
          <>
            <h2 className="my-3 font-black text-2xl">{item.date}</h2>
            <div className="game-list flex flex-wrap gap-3">
              {item.items.map((item) => (
                  <GameCard value={item} key={item.folderName} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
}
