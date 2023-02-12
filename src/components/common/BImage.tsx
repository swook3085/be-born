import Image, { ImageProps } from 'next/legacy/image'

const BImage = (props: ImageProps) => {
  return (
    <Image
      {...props}
      placeholder='blur'
      blurDataURL='data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
    />
  )
}

export default BImage
