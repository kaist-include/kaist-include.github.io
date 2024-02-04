// Code taken from
// https://github.com/vercel/next.js/discussions/19065
// to solve https://stackoverflow.com/questions/65487914/error-image-optimization-using-next-js-default-loader-is-not-compatible-with-n
// (from https://blog.whereisthemouse.com/image-optimization-for-static-nextjs-sites)
import NextImage, { ImageLoader } from 'next/image'

// opt-out of image optimization, no-op
const customLoader: ImageLoader = ({ src }) => {
  return src
}

const Image: typeof NextImage = (props) => {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  )
}

export default Image