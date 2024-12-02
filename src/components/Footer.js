import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <div className='bg1'>
        <h3 className="p-1 py-4 lg:p-4 flex items-center">Made with 💖. <CopyrightIcon/>{date} All rights reserved.</h3>
    </div>
  )
}
