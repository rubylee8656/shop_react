import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './../styles/ShopCardRow.scss'

import ShopPost from './ShopPost'
import ShopHead from './../images/homepage-forum-store.svg'

function ShopCardRow() {
  const [shopCardData, setShopCardData] = useState([
    {
      sid: 1,
      member_sid: 1,
      categories_sid: 3,
      title: '',
      img: '',
      content: '',
      mb_name: '',
    },
  ])

  const getShopCardRow = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/home/shop-posts`)

      setShopCardData(res.data.shopPostRows)
      console.log(res.data.shopPostRows)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getShopCardRow()
  }, [])

  return (
    // 要怎麼選擇只要前三篇，之後每次再拿三篇
    <div className="y-shop-card-row">
      <div className="y-forum-head y-shop-head">
        <img src={ShopHead} alt="shop posts" />
        <p>戰士分享</p>
      </div>
      <div className="y-forum-card-wrap y-shop-card-wrap">
        {shopCardData.map((v, i) => {
          return <ShopPost shopInfo={v} key={v.sid} />
        })}
      </div>
    </div>
  )
}

export default ShopCardRow
