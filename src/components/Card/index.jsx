import { CardProjetos } from '../CardProjetos'

export function Card() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid md:gap-x-28 md:gap-y-28 md:grid-cols-3">
        <CardProjetos />
      </div>
    </div>
  )
}
