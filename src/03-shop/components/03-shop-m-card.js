import { useEffect, useState } from 'react'
import axios from 'axios'
import { imgUrl, imgServerUrl } from '../shop-config'
import './../styles/03-shop-m-card.scss'
import { Box, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom'

// 地圖檢視用的卡片
function ShopMcard({ filterShop, startShop, demoShop, setFindPos, isLoading }) {
  return (
    <>
      {startShop ? (
        <div className="r-m-card-wrap">
          {demoShop.map((v, i) => {
            return (
              <div className="r-m-col" key={v.rows.sid}>
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    style={{ background: '#ccc' }}
                  >
                    <div className="r-m-card-container">
                      <div className="r-m-card-img">
                        <div className="r-m-card-img-wrap">
                          <img
                            src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                            alt=""
                          />
                        </div>
                        <span
                          className="r-m-card-img-span"
                          style={v.rows.open ? {} : { background: '#ccc' }}
                        >
                          {v.rows.open ? '營業中' : '休息中'}
                        </span>
                        <div className="r-m-card-body-cates">
                          {v.cates.map((v, i) => {
                            return (
                              <p className="r-m-card-body-cates-p" key={i}>
                                {v}
                              </p>
                            )
                          })}
                        </div>
                      </div>
                      <div className="r-m-card-body">
                        <h2 className="r-m-card-body-h2">{v.rows.shop_name}</h2>
                        <div className="r-m-card-week-btn">
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_mon ? {} : { background: '#ccc' }
                            }
                          >
                            一
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_tue ? {} : { background: '#ccc' }
                            }
                          >
                            二
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_wed ? {} : { background: '#ccc' }
                            }
                          >
                            三
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_thu ? {} : { background: '#ccc' }
                            }
                          >
                            四
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_fri ? {} : { background: '#ccc' }
                            }
                          >
                            五
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_sat ? {} : { background: '#ccc' }
                            }
                          >
                            六
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={
                              v.rows.shop_sun ? {} : { background: '#ccc' }
                            }
                          >
                            日
                          </small>
                        </div>
                        <p className="r-m-card-body-p">{v.rows.shop_phone}</p>
                        <p className="r-m-card-body-p">
                          營業時間:
                          <span>
                            {v.rows.shop_opentime}-{v.rows.shop_closetime}
                          </span>
                        </p>
                        <p className="r-m-card-body-p">
                          {v.rows.shop_city}
                          {v.rows.shop_area}
                          {v.rows.shop_address_detail}
                        </p>

                        <div className="r-m-card-button">
                          <a
                            className="r-m-card-button-a"
                            href="#/"
                            onClick={() => {
                              setFindPos({
                                lat: +v.rows.shop_lat,
                                lng: +v.rows.shop_lng,
                                shop: v.rows.shop_name,
                              })
                            }}
                          >
                            <i className="fa-solid fa-caret-right"></i>
                            <span className="r-m-card-button-span">尋找</span>
                          </a>
                          <a className="r-m-card-button-a" href="/#">
                            <i className="fa-solid fa-caret-right"></i>
                            <span className="r-m-card-button-span">去逛逛</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Skeleton>
                ) : (
                  <div className="r-m-card-container">
                    <div className="r-m-card-img">
                      <div className="r-m-card-img-wrap">
                        <img
                          src={`${imgServerUrl}/images/03-shop/${v.rows.shop_cover}`}
                          alt=""
                        />
                      </div>
                      <span
                        className="r-m-card-img-span"
                        style={v.rows.open ? {} : { background: '#ccc' }}
                      >
                        {v.rows.open ? '營業中' : '休息中'}
                      </span>
                      <div className="r-m-card-body-cates">
                        {v.cates.map((v, i) => {
                          return (
                            <p className="r-m-card-body-cates-p" key={i}>
                              {v}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="r-m-card-body">
                      <h2 className="r-m-card-body-h2">{v.rows.shop_name}</h2>
                      <div className="r-m-card-week-btn">
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_mon ? {} : { background: '#ccc' }}
                        >
                          一
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_tue ? {} : { background: '#ccc' }}
                        >
                          二
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_wed ? {} : { background: '#ccc' }}
                        >
                          三
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_thu ? {} : { background: '#ccc' }}
                        >
                          四
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_fri ? {} : { background: '#ccc' }}
                        >
                          五
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_sat ? {} : { background: '#ccc' }}
                        >
                          六
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v.rows.shop_sun ? {} : { background: '#ccc' }}
                        >
                          日
                        </small>
                      </div>
                      <p className="r-m-card-body-p">{v.rows.shop_phone}</p>
                      <p className="r-m-card-body-p">
                        營業時間:
                        <span>
                          {v.rows.shop_opentime}-{v.rows.shop_closetime}
                        </span>
                      </p>
                      <p className="r-m-card-body-p">
                        {v.rows.shop_city}
                        {v.rows.shop_area}
                        {v.rows.shop_address_detail}
                      </p>

                      <div className="r-m-card-button">
                        <a
                          className="r-m-card-button-a"
                          href="#/"
                          onClick={() => {
                            setFindPos({
                              lat: +v.rows.shop_lat,
                              lng: +v.rows.shop_lng,
                              shop: v.rows.shop_name,
                            })
                          }}
                        >
                          <i className="fa-solid fa-caret-right"></i>
                          <span className="r-m-card-button-span">尋找</span>
                        </a>
                        <Link to={`/productList/${v.rows.sid}`}>
                          <p className="r-m-card-button-a">
                            <i className="fa-solid fa-caret-right"></i>
                            <span className="r-m-card-button-span">去逛逛</span>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div className="r-m-card-wrap">
          {filterShop.map((v, i) => {
            return (
              <div className="r-m-col" key={v[0].sid}>
                {isLoading ? (
                  <Skeleton
                    variant="rectangular"
                    style={{ background: '#ccc' }}
                  >
                    <div className="r-m-card-container">
                      <div className="r-m-card-img">
                        <div className="r-m-card-img-wrap">
                          <img
                            src={`${imgServerUrl}/images/03-shop/${v[0].shop_cover}`}
                            alt=""
                          />
                        </div>
                        <span
                          className="r-m-card-img-span"
                          style={v[0].open ? {} : { background: '#ccc' }}
                        >
                          {v[0].open ? '營業中' : '休息中'}
                        </span>
                        <div className="r-m-card-body-cates">
                          {v[1].map((v, i) => {
                            return (
                              <p className="r-m-card-body-cates-p" key={i}>
                                {v}
                              </p>
                            )
                          })}
                        </div>
                      </div>
                      <div className="r-m-card-body">
                        <h2 className="r-m-card-body-h2">{v[0].shop_name}</h2>
                        <div className="r-m-card-week-btn">
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_mon ? {} : { background: '#ccc' }}
                          >
                            一
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_tue ? {} : { background: '#ccc' }}
                          >
                            二
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_wed ? {} : { background: '#ccc' }}
                          >
                            三
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_thu ? {} : { background: '#ccc' }}
                          >
                            四
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_fri ? {} : { background: '#ccc' }}
                          >
                            五
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_sat ? {} : { background: '#ccc' }}
                          >
                            六
                          </small>
                          <small
                            className="r-m-card-week-btn-small"
                            style={v[0].shop_sun ? {} : { background: '#ccc' }}
                          >
                            日
                          </small>
                        </div>
                        <p className="r-m-card-body-p">{v[0].shop_phone}</p>
                        <p className="r-m-card-body-p">
                          營業時間:
                          <span>
                            {v[0].shop_opentime}-{v[0].shop_closetime}
                          </span>
                        </p>
                        <p className="r-m-card-body-p">
                          {v[0].shop_city}
                          {v[0].shop_area}
                          {v[0].shop_address_detail}
                        </p>

                        <div className="r-m-card-button">
                          <a
                            className="r-m-card-button-a"
                            href="#/"
                            onClick={() => {
                              setFindPos({
                                lat: +v[0].shop_lat,
                                lng: +v[0].shop_lng,
                                shop: v[0].shop_name,
                              })
                            }}
                          >
                            <i className="fa-solid fa-caret-right"></i>
                            <span className="r-m-card-button-span">尋找</span>
                          </a>
                          <a href="#/" className="r-m-card-button-a">
                            <i className="fa-solid fa-caret-right"></i>
                            <span className="r-m-card-button-span">去逛逛</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Skeleton>
                ) : (
                  <div className="r-m-card-container">
                    <div className="r-m-card-img">
                      <div className="r-m-card-img-wrap">
                        <img
                          src={`${imgServerUrl}/images/03-shop/${v[0].shop_cover}`}
                          alt=""
                        />
                      </div>
                      <span
                        className="r-m-card-img-span"
                        style={v[0].open ? {} : { background: '#ccc' }}
                      >
                        {v[0].open ? '營業中' : '休息中'}
                      </span>
                      <div className="r-m-card-body-cates">
                        {v[1].map((v, i) => {
                          return (
                            <p className="r-m-card-body-cates-p" key={i}>
                              {v}
                            </p>
                          )
                        })}
                      </div>
                    </div>
                    <div className="r-m-card-body">
                      <h2 className="r-m-card-body-h2">{v[0].shop_name}</h2>
                      <div className="r-m-card-week-btn">
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_mon ? {} : { background: '#ccc' }}
                        >
                          一
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_tue ? {} : { background: '#ccc' }}
                        >
                          二
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_wed ? {} : { background: '#ccc' }}
                        >
                          三
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_thu ? {} : { background: '#ccc' }}
                        >
                          四
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_fri ? {} : { background: '#ccc' }}
                        >
                          五
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_sat ? {} : { background: '#ccc' }}
                        >
                          六
                        </small>
                        <small
                          className="r-m-card-week-btn-small"
                          style={v[0].shop_sun ? {} : { background: '#ccc' }}
                        >
                          日
                        </small>
                      </div>
                      <p className="r-m-card-body-p">{v[0].shop_phone}</p>
                      <p className="r-m-card-body-p">
                        營業時間:
                        <span>
                          {v[0].shop_opentime}-{v[0].shop_closetime}
                        </span>
                      </p>
                      <p className="r-m-card-body-p">
                        {v[0].shop_city}
                        {v[0].shop_area}
                        {v[0].shop_address_detail}
                      </p>

                      <div className="r-m-card-button">
                        <a
                          className="r-m-card-button-a"
                          href="#/"
                          onClick={() => {
                            setFindPos({
                              lat: +v[0].shop_lat,
                              lng: +v[0].shop_lng,
                              shop: v[0].shop_name,
                            })
                          }}
                        >
                          <i className="fa-solid fa-caret-right"></i>
                          <span className="r-m-card-button-span">尋找</span>
                        </a>
                        <Link to={`/productList/${v[0].sid}`}>
                          <p className="r-m-card-button-a">
                            <i className="fa-solid fa-caret-right"></i>
                            <span className="r-m-card-button-span">去逛逛</span>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}
export default ShopMcard
