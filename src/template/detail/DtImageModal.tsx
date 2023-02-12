import BImage from '@components/common/BImage'
import FullOverLayer from '@components/overlays/FullOverLayer'
import Modal from '@components/overlays/Modal'
import useDevice from '@shared/hooks/useDevice'
import styled from 'styled-components'

const AutoHeightImageWrapper = styled.div`
  width: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`

interface IDtImageModalPrsop {
  src: string
  alt: string
  show: boolean
  onClose: () => void
}

const DtImageModal = ({ show, onClose, src, alt }: IDtImageModalPrsop) => {
  const { isMobile } = useDevice()

  if (isMobile) {
    return (
      <FullOverLayer show={show} onClose={onClose}>
        <AutoHeightImageWrapper>
          <BImage
            src={src}
            layout='fill'
            className='autoImage'
            width={512}
            height={500}
            quality={100}
            objectFit='contain'
            objectPosition='center'
            alt={alt}
          />
        </AutoHeightImageWrapper>
      </FullOverLayer>
    )
  }

  return (
    <Modal show={show} onClose={onClose}>
      <AutoHeightImageWrapper>
        <BImage
          src={src}
          layout='fill'
          className='autoImage'
          width={512}
          height={500}
          quality={100}
          objectFit='contain'
          alt={alt}
        />
      </AutoHeightImageWrapper>
    </Modal>
  )
}

export default DtImageModal
