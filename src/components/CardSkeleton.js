import { Skeleton } from '@mui/material'

export const CardSkeleton = () => {
  return (
    <div className='flex gap-2 min-w-52 h-80 text-gray-200 overflow-x-auto'>
        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} className='flex-shrink-0' width={210} height={310}/>
        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} className='flex-shrink-0' width={210} height={310}/>
        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} className='flex-shrink-0' width={210} height={310}/>
        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} className='flex-shrink-0' width={210} height={310}/>
        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} className='flex-shrink-0' width={210} height={310}/>
        <Skeleton variant='rectangular' sx={{ bgcolor: 'grey.800' }} className='flex-shrink-0' width={210} height={310}/>
    </div>
  )
}
