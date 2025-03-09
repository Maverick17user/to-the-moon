import { memo } from 'react'

interface DetailsParagraphProps {
  content: string
}

const DetailsParagraph = memo(({ content }: DetailsParagraphProps) => {
  return (
    <p className="text-gray-100">
      {content}
    </p>
  )
})

export default DetailsParagraph 