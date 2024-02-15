import { CardProjetos } from '../CardProjetos'

export function Card() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid md:gap-x-10 md:gap-y-10 md:grid-cols-3 px-5">
        <CardProjetos />
      </div>
    </div>
  )
}
