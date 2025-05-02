/* eslint-disable prettier/prettier */
import { CardProjetos } from "../CardProjetos";

export function Card() {
  return (
    <div className="flex justify-center">
      <div className="grid gap-10 md:grid-cols-3 px-5 w-[66rem]">
        <CardProjetos />
      </div>
    </div>
  );
}
