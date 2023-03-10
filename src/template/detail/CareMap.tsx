import { IAnimalDetailChildProps } from '@shared/interface/IAnimalDetailChildProps'
import { getSearchURL } from '@shared/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk'

const CareMap = ({ item, isFetching }: IAnimalDetailChildProps) => {
  const [location, setLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  useEffect(() => {
    if (item == null) return
    const apiKey = '5C21C2B8-8A8A-3E9B-89CD-160EB787B064'
    const url = `https://api.vworld.kr/req/address?key=${apiKey}`

    const apiUrl = getSearchURL(
      {
        service: 'address',
        request: 'getcoord',
        version: '2.0',
        crs: 'epsg:4326',
        refine: true,
        simple: true,
        format: 'json',
        type: 'road',
        address: item.careAddr,
      },
      url,
    )
    const setCareAddrLocation = async () => {
      const { status, data } = await axios.get(`/api/location/${item.careAddr}`)
      if (status === 200) {
        const { response } = data
        if (data && response && response.status === 'OK') {
          const { x, y } = response.result.point
          setLocation({
            latitude: parseFloat(y),
            longitude: parseFloat(x),
          })
        }
      }
    }
    setCareAddrLocation()
  }, [item])

  if (isFetching || item == null) {
    return <div className='h-[300px] w-full animate-pulse bg-gray-200' />
  }
  if (location == null) return <></>

  return (
    <Map
      draggable={false}
      className='h-[300px] w-full'
      center={{ lat: location.latitude, lng: location.longitude }}
    >
      <MapMarker
        position={{ lat: location.latitude, lng: location.longitude }}
      ></MapMarker>
      <CustomOverlayMap
        position={{ lat: location.latitude, lng: location.longitude }}
        yAnchor={0.1}
      >
        <div className='customoverlay'>
          <a
            href={`https://map.kakao.com/link/map/${item.careNm},${location.latitude},${location.longitude}`}
            target='_blank'
            rel='noreferrer'
          >
            <span className='title'>{item.careNm}</span>
          </a>
        </div>
      </CustomOverlayMap>
    </Map>
  )
}

export default CareMap
