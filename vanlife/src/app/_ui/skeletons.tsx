
export function VanCardSkeleton(){
  const animation = 'animate-ping rounded bg-gray-300 border-3 border-gray-500'
  return(
    <div className={`${animation} flex flex-col gap-3 items-start w-[200px]`}>
      <div className='h-[250px]'></div>
      <div className='w-full border'></div>
    </div>
  )
}