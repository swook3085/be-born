import { IAnimalListItemProps } from '@shared/interface/IPet'
import { MouseEvent, forwardRef } from 'react'
import { LegacyRef } from 'react'
import KindImageIcon from './KindImageIcon'
import { Badge } from './Badge'
import Image from 'next/legacy/image'
import {
  endDateBadgeType,
  getKindCdName,
  noticeDateDiff,
  replaceHTTP,
} from '@shared/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MobileAnimalItem = forwardRef(
  ({ item, detail }: IAnimalListItemProps, ref: LegacyRef<HTMLDivElement>) => {
    const { push } = useRouter()
    const { kindCd, noticeSdt, noticeEdt, careNm } = item

    const goDetail = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const param = {
        ...detail,
        page: item.page,
        id: item.desertionNo,
      }
      push({
        pathname: 'detail',
        query: param,
      })
    }

    return (
      <div className='border-b py-2' ref={ref}>
        <Link href={'/detail'} onClick={goDetail}>
          <figure className='w-full bg-white flex'>
            <div className='w-28 h-28 flex-0'>
              <Image
                layout='responsive'
                width={100}
                height={100}
                quality={100}
                objectFit='cover'
                src={replaceHTTP(item.popfile)}
                className='rounded-lg'
                alt={item.noticeNo}
              />
            </div>
            <figcaption className='p-1 flex-auto truncate relative'>
              <div className='m-0.5 ml-2'>
                <p className='cursor-default text-md'>{item.noticeNo}</p>
              </div>
              <div className='m-1 ml-2 cursor-default text-[12px] h-4 truncate'>
                <div className='flex items-center'>
                  <KindImageIcon kindCd={kindCd} />
                  <p className='ml-1'>{getKindCdName(kindCd)}</p>
                </div>
              </div>
              <p className='m-1 ml-2 cursor-default text-[12px] h-4 truncate'>
                {item.age} · {item.weight}
              </p>
              <p className='m-2 ml-2 cursor-default text-[13px] text-[#676c76] truncate absolute bottom-0'>
                <Badge type={endDateBadgeType(noticeSdt, noticeEdt)}>
                  종료 {noticeDateDiff(noticeSdt, noticeEdt)}일 전
                </Badge>
                &nbsp;
                {careNm}
              </p>
            </figcaption>
          </figure>
        </Link>
      </div>
    )
  },
)

export default MobileAnimalItem
