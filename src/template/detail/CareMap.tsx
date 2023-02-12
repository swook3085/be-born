import { IAnimalDetailChildProps } from '@shared/interface/IAnimalDetailChildProps'
import { getSearchURL } from '@shared/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
      const { status, data } = await axios.get(apiUrl)
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

  useEffect(() => {
    if (location == null) return
    const initMap = () => {
      const mapLocation = new naver.maps.LatLng(
        location.latitude,
        location.longitude,
      )
      const map = new naver.maps.Map('map', {
        center: mapLocation,
        zoom: 13,
      })
      const marker = new naver.maps.Marker({
        position: mapLocation,
        map,
      })
      const infowindows = new naver.maps.InfoWindow({
        content: [
          '<div class="iw_inner p-2">',
          `   <h3>${item?.careNm}</h3>`,
          '</div>',
        ].join(''),
      })
      infowindows.open(map, marker)
    }

    initMap()
  }, [location])

  if (isFetching || item == null) {
    return <div className='h-[300px] w-full animate-pulse bg-gray-200' />
  }

  return <div id='map' className='h-[300px] w-full' />
}

export default CareMap