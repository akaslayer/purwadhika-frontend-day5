import React from 'react'
import TaskItem from './TaskItem'
type contributorOBJ = {
  avatar: string
}
type taskOBJ = {
  desc: string,
  status: boolean
}

type tagOBJ = {
  name: string
}
interface CardProps {
  id: string,
  title: string
  contributor: contributorOBJ[],
  description: string,
  status: string,
  task: taskOBJ[],
  tag: tagOBJ[],
}

const BackgroundColorMap: { [key: string]: string } = {
  "Due Date": "bg-rose",
  "Research": "bg-green",
}

const CardList: React.FC<CardProps> = ({ title, contributor, description, task, tag }) => {

  return (
    <div className="card bg-white p-4 flex flex-col gap-2 rounded-md">
      <div className="contributor flex gap-1 ">
        {contributor.map((item) => (
          <img className="w-[18px] rounded-xl" src={item.avatar} alt="" />
        ))}
      </div>
      <h1 className="font-sf-pro-text text-black-semibold text-base">{title}</h1>
      <p className="text-darkGray font-normal text-[14px]">{description}</p>
      <div className="tasks flex flex-col gap-2 ">
        {task.map((item) => (
          <TaskItem {...item} />
        ))}
      </div>

      <div className="tags flex gap-2 ">
        {tag.map((tags) => (
          <>
            <div className={`px-3 py-[10px] rounded-md ${BackgroundColorMap[tags.name]} text-sm text-sf-pro-text font-medium`}>
              {tags.name}
            </div>
          </>
        ))}
      </div>
    </div >
  )
}

export default CardList