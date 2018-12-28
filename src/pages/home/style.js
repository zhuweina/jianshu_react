import styled from 'styled-components'
export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  padding-top: 30px;
  float: left;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  margin-left: 15px;
  padding-top: 30px;
  float: right;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  text-align: center;
  padding-right: 10px;
  box-sizing: border-box;
  margin-left: 18px;
  margin-bottom: 18px;
  img {
    width: 32px;
    height: 32px;
    /* 否则文字在下面，这样的话，让图片不影响文字的布局 */
    display: block;
    float: left;
    margin-right: 10px;
  }
`
export const ListWrapper = styled.div``
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  img {
    display: block;
    height: 100px;
    width: 100px;
    float: right;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    color: #333;
    font-weight: bold;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
  border: 1px solid #dcdc;
  height: 300px;
  line-height: 300px;
  text-align: center;
`
export const WriterItem = styled.div``
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #dcdcdc;
  font-size: 12px;
  cursor: pointer;
`
