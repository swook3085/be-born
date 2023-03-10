import Image from 'next/legacy/image'
import { useRef } from 'react'
import styled from 'styled-components'

const ButtonWrap = styled.div(
  (props: { selected: boolean; value: string }) => `
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px;
  border: 1px solid rgb(217, 217, 217);
  flex: 1;
  height: 120px;
  display: flex;
  margin: ${props.value === '417000' ? '0 10px' : '0'};
  flex-direction: column;
  border-color: ${props.selected ? '#ECB04D' : 'rgb(217, 217, 217)'};
`,
)

const Button = styled.button`
  background-color: #fff;
  border: none;
  flex: 1;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgb(0 0 0 / 5%);
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  }
`

const TitleWrap = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImagWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: end;
`

export interface IKindButtonProps {
  type?: 'dog' | 'cat'
  title: string
  active?: boolean
  value?: string
  onClick?: (value: string) => void
}

const KindButton = ({
  type = 'dog',
  title,
  onClick,
  active = false,
  value = '',
}: IKindButtonProps) => {
  const imgSrc = useRef<string>('/images/happycat.png')
  if (type !== 'cat') {
    imgSrc.current = '/images/happydog.png'
  }

  return (
    <ButtonWrap value={value} selected={active}>
      <Button onClick={() => onClick && onClick(value)}>
        <ImagWrap>
          <Image
            layout='intrinsic'
            src={imgSrc.current}
            alt={title}
            quality={100}
            objectFit='cover'
            width={65}
            height={65}
          />
        </ImagWrap>
        <TitleWrap>
          <p>{title}</p>
        </TitleWrap>
      </Button>
    </ButtonWrap>
  )
}

export default KindButton
