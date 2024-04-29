import Card from "./Card"

const StarterBoard: React.FC = () => {
  return (
    <section className="p-10">
      <div className="justify-start flex flex-col items-start">
        <h2 className='font-sf-compact-text font-bold text-[32px] text-black'>Starter Board</h2>
        <p className='font-sf-pro-text font-normal text-sm text-darkGray'>A description of a board.</p>
        <div className="card-container  bg-lightGray p-5 flex gap-4 my-8 w-full rounded-lg ">
          <Card title="Not started" />
          <Card title="In Progress" />
          <Card title="Blocked" />
          <Card title="Done" />

        </div>
      </div>
    </section>
  )
}

export default StarterBoard