import UserProfileTmp from '../components/UserProfileTmp'
import '.././style/profile-pages/LikesShop.scss'
import LikeLabels from '../components/LikeLabels'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'

function LikesShop() {
  const [likeShops, setLikeShops] = useState([])

  const mb_sid = JSON.parse(localStorage.getItem('auth'))
    ? JSON.parse(localStorage.getItem('auth')).mb_sid
    : '未登入'

  const getLikeShops = async () => {
    try {
      if (mb_sid === '未登入') {
        return
      }
      const response = await axios.get(
        `http://localhost:3004/api/shop/shop_love?mb_sid=${mb_sid}`
      )
      const loveData = response.data.lovemember_rows
      //設定到state裡
      setLikeShops(loveData)
    } catch (e) {
      // 錯誤處理
      console.error(e.message)
      // setErrorMessage(e.message)
    }
  }
  // didMount時載入資料
  useEffect(() => {
    getLikeShops()
  }, [])

  return (
    <>
      <div className="s-body-profile">
        <div className="s-container">
          <Navbar />
          <UserProfileTmp />
          <div className="s-main-content">
            <div className="s-l-s">
              <h2 className="s-l-s-title">我的收藏</h2>
              <div className="s-l-s-card">
                <LikeLabels />
                <div className="s-l-s-card-inside">
                  {likeShops.map((v, i) => {
                    return (
                      <div className="r-love-card-container" key={v.sid}>
                        <div className="r-love-card-title">
                          <i className="fa-solid fa-heart"></i>
                        </div>
                        <div className="r-love-card-cover-middle">
                          <div className="r-love-card-cover-wrap">
                            <img
                              className="r-love-card-cover"
                              src={`http://localhost:3004/images/03-shop/${v.shop_cover}`}
                            />
                          </div>
                        </div>
                        <div className="r-love-card-footer">
                          <p className="r-love-card-name">{v.shop_name}</p>
                          <p className="r-love-card-info">
                            {v.shop_opentime}-{v.shop_closetime}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="s-footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LikesShop
