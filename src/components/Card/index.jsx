import { CardProjetos } from '../CardProjetos'

export function Card() {
  return (
    <div className="ml-6 mt-2 mr-6 grid md:gap-x-10 md:gap-y-10 md:grid-cols-3 ">
      <CardProjetos />
    </div>
  )
}
