/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CartInfoContext from '../contexts/CartInfoContext'
import AuthContext from '../../contexts/AuthContext'
// scss
import './../styles/CartInfo.scss'

// components
import CartNavBar from '../components/CartNavBar'
import OpenHoursBtn from '../components/OpenHoursBtn'
import PickupHoursBtn from '../components/PickupHoursBtn'
import EmptyCartBtn from '../components/EmptyCartBtn'
import CartItemsList from '../components/CartItemsList'
import CartItemsInfo from '../components/CartItemsInfo'
import ContinueShoppingBtn from '../components/ContinueShoppingBtn'
import GoPayBtn from '../components/GoPayBtn'
import RecMerch from '../components/RecMerch'
import NewsCrawl from '../../00-homepage/components/NewsCrawl'
import Footer from '../../components/Footer'

//img srcs
import YellowWave from '../../00-homepage/components/YellowWave'
import YellowWaveReverse from '../../00-homepage/components/YellowWaveReverse'
import YellowLineWave from './../images/line-wave.svg'
import YellowWaveLight from '../../00-homepage/components/YellowWaveLight'
import CartIcon from './../../dotown/cart.png'
import ProgressIcon from './../../dotown/warrior.png'
import PickupIcon from './../../dotown/hamburger.png'
import ShopCover from './../images/01cover.jpg'
import arrowClicked from './../../logo-and-fonts/pixel-arrowB.svg'
import arrowUnclicked from './../../logo-and-fonts/pixel-arrowB-border-M.svg'

function CartInfo() {
  const { cartItem, setCartItem, cartShopInfo, setCartShopInfo } =
    useContext(CartInfoContext)

  // 設定回上頁按鈕內文
  const [btnText, setBtnText] = useState('回購物車')
  const page = document.location.href

  // 折扣碼
  const [couponCode, setCouponCode] = useState('welcome80')

  // 選單狀態樣式
  const [pickup, setPickup] = useState(1)
  const [pay, setPay] = useState(1)

  useEffect(() => {
    console.log('payment code: ', pay)
  }, [pay])

  //member details
  const { myAuth, setMyAuth, logout, deleteAccountD } = useContext(AuthContext)

  // console.log(myAuth.authorised ? myAuth.mb_sid : 0)

  //member
  const mid = myAuth.authorised ? +myAuth.mb_sid : 1
  // console.log(mid)

  const [memberInfo, setMemberInfo] = useState([
    {
      mb_sid: mid,
      mb_name: '',
    },
  ])
  const getMemberInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:3004/cart/info/${mid}`)
      // setMemberInfo(res.data.member_info_rows)
      console.log(res.data.member_info_rows)
    } catch (error) {
      console.log(error.message)
    }
  }

  console.log(cartShopInfo)

  const {
    shop_sid,
    shop_list_sid,
    shop_cover,
    shop_name,
    shop_phone,
    shop_city,
    shop_area,
    shop_address_detail,
    shop_opentime,
    shop_closetime,
    shop_deadline,
    shop_sun,
    shop_mon,
    shop_tues,
    shop_wed,
    shop_thu,
    shop_fri,
    shop_sat,
  } = cartShopInfo

  useEffect(() => {
    getMemberInfo()
  }, [])

  return (
    <>
      <div className="y-CartInfo-container">
        <div className="y-Cart-nav">
          <CartNavBar />
          <div className="y-Cart-wave-base"></div>
          <YellowWave />
        </div>
        <div className="y-Cart-top">
          <div className="y-Cart-page">
            <div className="y-Cart-icon">
              <img src={CartIcon} alt="cart icon" />
            </div>
            <p className="y-Cart-name">我的惜食戰車</p>
          </div>
          <div className="y-Cart-status">
            <div className="y-progress-wrap">
              <div className="y-progress-icon">
                <img src={ProgressIcon} alt="progress icon" />
              </div>
              <div className="y-progress-border">
                <div className="y-progress-bar"></div>
                <div className="y-progress-bar-empty"></div>
              </div>
              <div className="y-progress-name">
                <p>加入商品</p>
                <p>訂購明細</p>
                <p>資訊確認</p>
                <p>完成訂購</p>
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-middle">
          <div className="y-Cart-pickup  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-pickup-tab">取餐方式</p>
            <div className="y-Cart-main y-Cart-pickup-main">
              <ul className="y-Cart-pickup-radio">
                <li
                  onClick={() => {
                    setPickup(1)
                  }}
                  // className={pickup === 1 ? 'y-Cart-Pick-selected' : ''}
                  className="y-Cart-Pick-selected"
                >
                  <div className="y-pickup-radio-icons">
                    <img
                      // src={pickup === 1 ? arrowClicked : arrowUnclicked}
                      src={arrowClicked}
                    />
                  </div>
                  <label
                    htmlFor="y-pickup-way-self"
                    className="y-pickup-way-options y-pickup-radio-labels"
                  >
                    店內自取
                  </label>
                  <input
                    id="y-pickup-way-self"
                    type="radio"
                    name="pickup_way"
                    value={1}
                  />
                </li>
                <li
                  onClick={() => {
                    setPickup(2)
                  }}
                  // className={pickup === 2 ? 'y-Cart-Pick-selected' : ''}
                >
                  <div className="y-pickup-radio-icons">
                    <img
                      src={pickup === 2 ? arrowClicked : arrowUnclicked}
                      style={{ display: 'none' }}
                    />
                  </div>
                  <label
                    htmlFor="y-pickup-way-shop"
                    className="y-pickup-way-options y-pickup-radio-labels"
                  >
                    店家配送
                  </label>
                  <input
                    id="y-pickup-way-shop"
                    type="radio"
                    name="pickup_way"
                    value={3}
                    disabled={true}
                  />
                  <span className="y-pickup-notice">暫不提供此選項</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="y-Cart-pay  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-pay-tab">付款方式</p>
            <div className="y-Cart-main y-Cart-pay-main">
              <ul className="y-Cart-pickup-radio">
                <li
                  onClick={() => {
                    setPay(1)
                  }}
                  className={pay === 1 ? 'y-Cart-Pick-selected' : ''}
                >
                  <div className="y-pickup-radio-icons">
                    <img src={pay === 1 ? arrowClicked : arrowUnclicked} />
                  </div>
                  <label
                    htmlFor="y-pay-line"
                    className="y-pickup-way-options y-pay-radio-labels"
                  >
                    LINE Pay
                  </label>
                  <input
                    id="y-pay-line"
                    type="radio"
                    name="pay_way"
                    value={1}
                  />
                  <span className="y-pickup-notice">
                    （可用LINE POINTS折抵）
                  </span>
                </li>
                <li
                  onClick={() => {
                    setPay(2)
                  }}
                  className={pay === 2 ? 'y-Cart-Pick-selected' : ''}
                >
                  <div className="y-pickup-radio-icons">
                    <img src={pay === 2 ? arrowClicked : arrowUnclicked} />
                  </div>
                  <label
                    htmlFor="y-pay-credit"
                    className="y-pickup-way-options y-pay-radio-labels"
                  >
                    信用卡線上刷卡一次付清
                  </label>
                  <input
                    id="y-pay-credit"
                    type="radio"
                    name="pay_way"
                    value={2}
                  />
                  <span className="y-pickup-notice">
                    （可接受VISA, Master, JCB, 聯合信用卡）
                  </span>
                </li>
                <li
                  onClick={() => {
                    setPay(3)
                  }}
                  className={pay === 3 ? 'y-Cart-Pick-selected' : ''}
                >
                  <div className="y-pickup-radio-icons">
                    <img src={pay === 3 ? arrowClicked : arrowUnclicked} />
                  </div>
                  <label
                    htmlFor="y-pay-credit"
                    className="y-pickup-way-options y-pay-radio-labels"
                  >
                    取貨付款
                  </label>
                  <input
                    id="y-pay-shop"
                    type="radio"
                    name="pay_way"
                    value={3}
                    disabled={false}
                  />
                  {/* <span className="y-pickup-notice">（暫不提供此選項）</span> */}
                </li>
              </ul>
            </div>
          </div>
          <div className="y-Cart-coupon  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-coupon-tab">優惠折抵</p>
            <div className="y-Cart-main y-Cart-coupon-main">
              <ul className="y-Cart-pickup-radio">
                <li>
                  <div className="y-pickup-radio-icons">
                    <img src={arrowClicked} />
                  </div>
                  <label
                    htmlFor="y-coupon-text"
                    className="y-pickup-way-options y-coupon-labels"
                  >
                    折扣碼
                  </label>
                  <div className="y-coupon-input">
                    <input
                      id="y-coupon-text"
                      type="text"
                      name="coupon"
                      // defaultValue={couponCode}
                      placeholder={`請輸入折扣碼`}
                      onChange={(e) => {
                        setCouponCode(e.target.value)
                      }}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="y-Cart-member  y-Cart-sections">
            <p className="y-Cart-tab y-Cart-member-tab">取餐資訊</p>
            <div className="y-Cart-main y-Cart-member-main">
              <ul className="y-Cart-member-info">
                <li className="y-Cart-member-details y-Cart-member-left">
                  <div className="y-pickup-radio-icons">
                    <img src={arrowClicked} />
                  </div>
                  訂購人：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  {myAuth?.mb_name}
                </li>
                <li className="y-Cart-member-details y-Cart-member-left">
                  <div className="y-pickup-radio-icons">
                    <img src={arrowUnclicked} />
                  </div>
                  取餐店家：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  {shop_name}
                </li>
                <li className="y-Cart-member-details y-Cart-member-left">
                  <div className="y-pickup-radio-icons">
                    <img src={arrowClicked} />
                  </div>
                  取餐時間：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  {shop_opentime} - {shop_deadline}
                </li>
                <li className="y-Cart-member-details y-Cart-member-left">
                  <div className="y-pickup-radio-icons">
                    <img src={arrowUnclicked} />
                  </div>
                  取餐位址：
                </li>
                <li className="y-Cart-member-details y-Cart-member-right">
                  {shop_city}
                  {shop_area}
                  {shop_address_detail}
                </li>
              </ul>
            </div>
          </div>
          <div className="y-Cart-details y-Cart-sections">
            <p className="y-Cart-tab y-Cart-details-tab">餐點明細</p>
            <div className="y-Cart-details-top">
              <p className="y-Cart-details-name y-Cart-details-header">
                商品名稱
              </p>
              <p className="y-Cart-details-origin y-Cart-details-header">
                原價
              </p>
              <p className="y-Cart-details-price y-Cart-details-header">
                優惠價
              </p>
              <p className="y-Cart-details-quantity y-Cart-details-header">
                數量
              </p>
              <p className="y-Cart-details-unit y-Cart-details-header">小計</p>
            </div>
            <div className="y-Cart-details-area">
              {cartItem.userCart.map((v, i) => {
                return (
                  <div className="y-Cart-details-row">
                    <CartItemsInfo cartItemData={v} key={i} />
                  </div>
                )
              })}
            </div>
            <div className="y-Cart-details-bottom">
              <p className="y-Cart-details-total">
                共 {cartItem.totalItem} 項商品，總數量 {cartItem.totalAmount} 個
              </p>
              <p className="y-Cart-details-total">
                原價 NT$ {cartItem.totalUnitPrice} 元，總金額 NT$
                {cartItem.totalSalePrice} 元
              </p>
              <div className="y-Cart-details-btns">
                <div className="y-continue-shopping-wrap">
                  <ContinueShoppingBtn
                    linkTo={`http://localhost:3000/cart`}
                    btnText={btnText}
                  />
                </div>
                <div className="y-cart-pay-wrap">
                  <GoPayBtn pickup={pickup} pay={pay} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="y-Cart-bottom">
          <div className="y-Cart-bottom-wave">
            <YellowWaveLight />
          </div>
          <div className="y-cart-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default CartInfo
